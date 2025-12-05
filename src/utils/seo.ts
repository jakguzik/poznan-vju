export const seo = ({
    title,
    description,
    keywords,
    image,
    url,
    siteName = "Poznań.VJU"
}: {
    title: string
    description?: string
    image?: string
    keywords?: string
    url?: string
    siteName?: string
}) => {
    const baseUrl = typeof window !== 'undefined' 
        ? `${window.location.protocol}//${window.location.host}`
        : 'https://poznan.vju.pl'
    const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : baseUrl
    const fullImageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : undefined

    const tags = [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        // Twitter Card tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        ...(fullImageUrl ? [{ name: "twitter:image", content: fullImageUrl }] : []),
        // OpenGraph tags (must use property, not name)
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:site_name", content: siteName },
        { property: "og:url", content: fullUrl },
        { property: "og:locale", content: "pl_PL" },
        ...(fullImageUrl ? [
            { property: "og:image", content: fullImageUrl },
            { property: "og:image:type", content: "image/png" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" }
        ] : [])
    ]

    return tags
}
