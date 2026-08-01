#!/usr/bin/env python3
from pathlib import Path
from PIL import Image
import re

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
LOGO = ASSETS / "logo.png"

ICON_SIZES = [
    (16, ASSETS / "favicon-16x16.png"),
    (32, ASSETS / "favicon-32x32.png"),
    (48, ASSETS / "favicon-48x48.png"),
    (180, ASSETS / "apple-touch-icon.png"),
    (192, ASSETS / "android-chrome-192x192.png"),
    (512, ASSETS / "android-chrome-512x512.png"),
]
ICO_PATH = ROOT / "favicon.ico"


def make_square_icon(image: Image.Image, size: int) -> Image.Image:
    icon = image.copy()
    icon.thumbnail((size, size), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    x = (size - icon.width) // 2
    y = (size - icon.height) // 2
    canvas.paste(icon, (x, y), icon)
    return canvas


def generate_icons():
    img = Image.open(LOGO)
    for size, path in ICON_SIZES:
        out = make_square_icon(img, size)
        out.save(path)
        print(f"Wrote {path.relative_to(ROOT)} {size}x{size}")

    ico_images = [make_square_icon(img, size) for size in [16, 32, 48]]
    ico_images[0].save(ICO_PATH, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Wrote {ICO_PATH.name}")


def update_html_files():
    html_files = list(ROOT.glob("*.html"))
    if not html_files:
        raise SystemExit("No HTML files found.")

    count = 0
    for path in html_files:
        text = path.read_text(encoding="utf-8")
        new_text = text.replace("https://rkroofingpeb.com/assets/og-logo.jpg", "https://rkroofingpeb.com/assets/logo.png")
        new_text = new_text.replace("https://rkroofingpeb.com/assets/og-logo.jpg", "https://rkroofingpeb.com/assets/logo.png")
        new_text = new_text.replace("https://rkroofingpeb.com/assets/og-logo.jpg", "https://rkroofingpeb.com/assets/logo.png")
        new_text = new_text.replace("/assets/og-logo.jpg", "/assets/logo.png")
        new_text = new_text.replace("assets/og-logo.jpg", "assets/logo.png")

        if "/assets/favicon-48x48.png" not in new_text:
            new_text = re.sub(
                r"(<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/assets/favicon-32x32\.png\" ?/?>)\n?",
                r"\1\n    <link rel=\"icon\" type=\"image/png\" sizes=\"48x48\" href=\"/assets/favicon-48x48.png\" />\n",
                new_text,
            )

        if new_text != text:
            path.write_text(new_text, encoding="utf-8")
            count += 1
            print(f"Updated {path.name}")

    print(f"Processed {len(html_files)} HTML files, modified {count}.")


def cleanup_legacy_asset():
    legacy = ASSETS / "og-logo.jpg"
    if legacy.exists():
        legacy.unlink()
        print(f"Removed legacy asset: {legacy.relative_to(ROOT)}")


def main():
    if not LOGO.exists():
        raise SystemExit(f"Missing logo file: {LOGO}")
    generate_icons()
    update_html_files()
    cleanup_legacy_asset()


if __name__ == "__main__":
    main()
