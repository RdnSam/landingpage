/**
 * Cloudinary Image Utility
 * Generates optimized image URLs from Cloudinary CDN
 */

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'djzb4f4p8';

export interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
  gravity?: 'auto' | 'face' | 'center';
}

/**
 * Generate Cloudinary image URL with transformations
 * @param publicId - The public ID of the image in Cloudinary (e.g., 'rifda-jepara/kusen-1')
 * @param options - Image transformation options
 * @returns Optimized Cloudinary image URL
 */
export function getCloudinaryUrl(
  publicId: string,
  options: CloudinaryImageOptions = {}
): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity,
  } = options;

  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  // Only add gravity if crop is fill and gravity is specified
  if (gravity && (crop === 'fill' || crop === 'crop')) {
    transformations.push(`g_${gravity}`);
  }
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${publicId}`;
}

/**
 * Preset configurations for common use cases
 */
export const cloudinaryPresets = {
  thumbnail: (publicId: string) =>
    getCloudinaryUrl(publicId, {
      width: 300,
      height: 300,
      quality: 'auto',
      format: 'auto',
      crop: 'fill',
    }),

  gallery: (publicId: string) =>
    getCloudinaryUrl(publicId, {
      width: 800,
      quality: 'auto',
      format: 'auto',
      crop: 'limit',
    }),

  fullsize: (publicId: string) =>
    getCloudinaryUrl(publicId, {
      width: 1920,
      quality: 'auto',
      format: 'auto',
      crop: 'limit',
    }),

  hero: (publicId: string) =>
    getCloudinaryUrl(publicId, {
      width: 1920,
      height: 1080,
      quality: 'auto',
      format: 'auto',
      crop: 'fill',
      gravity: 'auto',
    }),
};
