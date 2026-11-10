/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF is ~20% smaller than WebP; browsers without AVIF support get WebP.
    formats: ['image/avif', 'image/webp'],
    // Optimized variants are cached for 30 days. Use a new filename when replacing a photo.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Only remote host in use. Remote images are served directly (see SiteImage), and
    // keeping this list narrow stops the optimizer being used as an open image proxy.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async headers() {
    return [
      {
        // Static logos and photos in /public rarely change; let browsers cache them for a week.
        source: '/:file*.(png|jpg|jpeg|JPG|webp|svg)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ];
  },
};

module.exports = nextConfig;
