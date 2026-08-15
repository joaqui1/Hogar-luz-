import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const pages: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/geriatrico-bahia-blanca", priority: 0.9, changeFrequency: "monthly" },
  { path: "/desarrollo-web", priority: 0.3, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
