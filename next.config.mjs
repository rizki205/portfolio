/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // WAJIB ADA agar menghasilkan folder /out
  images: {
    unoptimized: true, // Sangat disarankan untuk GitHub Pages
  },
};

export default nextConfig;
