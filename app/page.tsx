"use client"

import dynamic from "next/dynamic"

// Disable SSR for the dashboard page
const AdminDashboard = dynamic(() => import("@/src/pages/admin-dashboard").then(m => m.default), {
  ssr: false,
})

export default function Page() {
  console.log("[v0] Admin Dashboard: rendering client-only SPA")
  return <AdminDashboard />
}
