# Projects Assets Structure

This folder contains all project-related media assets (images and videos).

## Naming Convention

For each project, use the following naming pattern:
- `project{id}-{type}.{extension}`

Examples:
- `project1-image.jpeg` - Main project image
- `project1-video.mkv` - Project demo video
- `project2-image.png` - Second project image
- `project2-video.mp4` - Second project video

## Supported Formats

### Images
- .jpeg, .jpg
- .png
- .webp

### Videos
- .mp4 (recommended)
- .webm
- .mkv

## Usage

To add a new project asset:
1. Add your image and video files to this folder following the naming convention
2. Import them in `src/data/projectsData.ts`
3. Add the project data to the projects array

Example:
```typescript
import project2Image from '../assets/projects/project2-image.jpeg';
import project2Video from '../assets/projects/project2-video.mp4';
```