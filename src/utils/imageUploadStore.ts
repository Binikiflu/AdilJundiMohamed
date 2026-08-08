// Utility for storing and retrieving custom uploaded images from localStorage

const STORAGE_KEY = 'custom_product_image_overrides';

export function getCustomImage(id: string): string | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    const map = JSON.parse(data);
    return map[id] || null;
  } catch (e) {
    return null;
  }
}

export function setCustomImage(id: string, dataUrl: string): void {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const map = data ? JSON.parse(data) : {};
    map[id] = dataUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event('custom-images-updated'));
  } catch (e) {
    console.error('Failed to save image to localStorage', e);
  }
}

export function clearCustomImage(id: string): void {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    const map = JSON.parse(data);
    delete map[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event('custom-images-updated'));
  } catch (e) {
    console.error('Failed to clear custom image', e);
  }
}

export function getAllCustomImages(): Record<string, string> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Optimizes uploaded image file:
 * - High resolution canvas rendering (up to 1920px max dimension)
 * - Enables high quality image smoothing algorithms
 * - Outputs high resolution compressed Data URL (quality 0.92) to balance sharpness and localStorage speed
 */
export function processAndSaveImage(id: string, file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const src = e.target?.result as string;
      if (!src) {
        reject(new Error('Failed to read image file'));
        return;
      }

      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { alpha: true });

        if (!ctx) {
          setCustomImage(id, src);
          resolve(src);
          return;
        }

        // Maintain high resolution up to 1920px max dimension
        const maxDimension = 1920;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;

        // Apply high-quality rendering settings
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to high resolution data URL
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
        setCustomImage(id, optimizedDataUrl);
        resolve(optimizedDataUrl);
      };

      img.src = src;
    };
    reader.readAsDataURL(file);
  });
}

