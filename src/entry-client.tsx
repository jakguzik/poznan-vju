import { StartClient } from "@tanstack/react-start/client"
import { StrictMode, startTransition } from "react"
import { hydrateRoot } from "react-dom/client"
import { inject } from "@vercel/analytics"

// Initialize Vercel Web Analytics
inject()

startTransition(() => {
    hydrateRoot(
        document,
        (
            <StrictMode>
                <StartClient />
            </StrictMode>
        )
    )
})
