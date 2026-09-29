import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/private/'], // අවශ්‍ය නම් ප්‍රයිවට් පේජ් බ්ලොක් කරන්න පුළුවන්
    },
    sitemap: 'https://ai-finance-blog.vercel.app/sitemap.xml',
  }
}