

import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import { promises as fs } from 'fs';
import path from 'path';

(async () => {
  const files = await imagemin(['src/img/**/*.{jpg,png}'], {
    destination: 'src/img',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminMozjpeg({
        quality: 75
      })
    ],
  });

    // Move optimized files back to their original locations
    await Promise.all(files.map(async file => {
      const originalPath = file.sourcePath;
      const optimizedPath = file.destinationPath;
      await fs.rename(optimizedPath, originalPath);
    }));

  console.log('Images optimized:', files.map(file => path.basename(file.sourcePath)));
})();