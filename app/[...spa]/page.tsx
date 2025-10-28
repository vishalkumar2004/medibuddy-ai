"use client"

import dynamic from "next/dynamic"

// NOTE: This catch-all handles routes like /admin, /doctor, etc.
// so that refreshing or direct deep links work without 404.
const MediBuddyApp = dynamic(
  // We are two levels deep from project root here: app/[...spa]/page.tsx
  // so the relative import needs ../../ to reach src/app.jsx
  () => import("../../src/app").then((m) => m.default),
  { ssr: false },
)

export default function CatchAllPage() {
  console.log("[v0] CatchAllPage: rendering SPA for a non-root path")
  return <MediBuddyApp />
}
