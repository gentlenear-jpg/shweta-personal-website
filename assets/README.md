# Assets Folder

This folder contains all the static assets for your personal website.

## Structure

```
assets/
├── images/          # Profile photos, project screenshots, etc.
├── icons/           # Custom icons and logos
└── README.md        # This file
```

## Image Guidelines

### Profile Photo
- **Recommended size**: 400x400px or larger
- **Format**: JPG or PNG
- **File name**: `profile.jpg` or `profile.png`
- **Usage**: Replace the placeholder in the hero section

### Project Images
- **Recommended size**: 800x600px or larger
- **Format**: JPG or PNG
- **File names**: `project1.jpg`, `project2.jpg`, etc.
- **Usage**: Replace placeholders in the projects section

### Background Images
- **Recommended size**: 1920x1080px or larger
- **Format**: JPG or PNG
- **Usage**: Can be used for hero section backgrounds

## Adding Images

1. Place your images in the appropriate folder
2. Update the HTML file to reference your images
3. Consider using WebP format for better performance
4. Optimize images for web (compress without losing quality)

## Example Usage

```html
<!-- Profile image -->
<img src="assets/images/profile.jpg" alt="Profile Photo" class="profile-image">

<!-- Project image -->
<img src="assets/images/project1.jpg" alt="Project Screenshot" class="project-image">
```

