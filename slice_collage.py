from PIL import Image
import os

img_path = "public/images/collage.png"
out_dir = "public/images/menu"

os.makedirs(out_dir, exist_ok=True)
img = Image.open(img_path)

width, height = img.size

# Assuming a 3x3 grid
col_w = width // 3
row_h = height // 3

coords = {
    "garlic_knots.png": (0, 0),
    "garlic_bread.png": (1, 0),
    "pepperoni_bread.png": (2, 0),
    "viva_rosso.png": (0, 1),
    "pesto_dip.png": (1, 1),
    # Skipping (2, 1) as it seems to be "Top It Off" label in collage
    "mozzarella.png": (0, 2),
    "tiramisu.png": (1, 2),
    "burrata.png": (2, 2)
}

for name, (col, row) in coords.items():
    left = col * col_w
    upper = row * row_h
    right = left + col_w
    lower = upper + row_h
    
    cropped = img.crop((left, upper, right, lower))
    cropped.save(os.path.join(out_dir, name))
    
print("Cropped successfully!")
