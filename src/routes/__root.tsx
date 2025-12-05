import type { QueryClient } from "@tanstack/react-query"
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import type * as React from "react"
import { Toaster } from "sonner"
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary"
import { NotFound } from "~/components/NotFound"
import { ThemeInitScript } from "~/components/theme-init-script"
import { ThemeProvider } from "~/components/theme-provider"
import { getTheme } from "~/lib/theme"
import type { Theme } from "~/lib/theme"
import { seo } from "~/utils/seo"
import appCss from "../styles/app.css?url"
import customCss from "../styles/custom.css?url"

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
    loader: () => getTheme(),
    head: () => ({
        meta: [
            {
                charSet: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            ...seo({
                title: "Poznań.VJU - Największe wydarzenie technologiczne w Poznaniu",
                description: "Dołącz do Poznań.VJU - spotkaj się z ekspertami, wymień doświadczenia i rozwijaj swoje umiejętności"
            })
        ],
        links: [
            {
                rel: "stylesheet",
                href: "https://use.typekit.net/xbb0nym.css"
            },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            },
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "anonymous"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@300&display=swap"
            },
            {
                rel: "stylesheet",
                href: appCss
            },
            {
                rel: "stylesheet",
                href: customCss
            },
            {
                rel: "icon",
                href: "/favicon.ico"
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon.png"
            },
            {
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png"
            }
        ]
    }),
    errorComponent: (props) => {
        return (
            <RootDocument>
                <DefaultCatchBoundary {...props} />
            </RootDocument>
        )
    },
    notFoundComponent: () => <NotFound />,
    component: RootComponent
})

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    )
}

function RootDocument({ children }: { children: React.ReactNode }) {
    const initial = Route.useLoaderData() as Theme
    return (
        <html lang="en" className={initial === "system" ? "" : initial}>
            <head>
                <ThemeInitScript />
                <HeadContent />
            </head>
            <body className="">
                <ThemeProvider initial={initial}>
                    <div className="flex min-h-svh flex-col">{children}</div>
                    <Toaster />
                </ThemeProvider>
                <Scripts />
            </body>
        </html>
    )
}
