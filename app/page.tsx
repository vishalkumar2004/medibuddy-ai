"use client"

import dynamic from "next/dynamic"

// Lazy-load SPA to avoid SSR issues with BrowserRouter
const MediBuddyApp = dynamic(() => import("../src/app").then((m) => m.default), { ssr: false })

export default function Page() {
  console.log("[v0] Root Page: rendering SPA for '/'")
  return <MediBuddyApp />
}
