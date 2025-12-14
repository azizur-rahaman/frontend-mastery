import { MetadataRoute } from "next";

export default function sitemap() : MetadataRoute.Sitemap {
    return [
        { url: 'https://your-domain.vercel.app/', lastModified: new Date()},
        { url: 'https://your-domain.vercel.app/about', lastModified: new Date()},
        { url: 'https://your-domain.vercel.app/projects', lastModified: new Date()}
    ];
}