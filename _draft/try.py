from PIL import Image, ImageOps

def invert_image_colors(image_path, output_path):
    """
    Inverts the colors of the image so black text can be easily read on it.

    Args:
        image_path (str): Path to the original image.
        output_path (str): Path to save the inverted image.
    """
    image = Image.open(image_path).convert("RGB")

    # Invert colors
    inverted_image = ImageOps.invert(image)

    # Save result
    inverted_image.save(output_path)


# Example usage
invert_image_colors("background.png", "background_invert.jpg")
