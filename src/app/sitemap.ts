import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ai-finance-blog.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // ඔයාගේ වෙනත් පේජ්ස් (උදාහරණයක් ලෙස /blog වගේ ඒවා) තියෙනවා නම් මෙතනට එකතු කරන්න පුළුවන්
  ]
}