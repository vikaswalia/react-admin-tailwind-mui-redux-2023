const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@helpers": path.resolve(__dirname, 'src/helpers'),
      "@layouts": path.resolve(__dirname, 'src/components/layouts'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@contexts": path.resolve(__dirname, 'src/contexts'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@store": path.resolve(__dirname, 'src/store'),
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@services": path.resolve(__dirname, 'src/services'),
      "@lib": path.resolve(__dirname, 'src/lib'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@data": path.resolve(__dirname, 'src/data'),
      "@features": path.resolve(__dirname, 'src/features'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@router": path.resolve(__dirname, 'src/router'),
    },
  },
};