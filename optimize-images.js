const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

(async () => {
  const files = await imagemin(['img/**/*.{jpg,png}'], {
    destination: 'img',
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminMozjpeg({
        quality: 75
      })
    ]
  });

  console.log('Images optimized:', files.map(file => path.basename(file.sourcePath)));
})();