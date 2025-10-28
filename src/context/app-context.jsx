"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import demo from "../data/demo-data.json"

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light") // 'light' | 'dark'
  const [lang, setLang] = useState("en") // 'en' | 'hi'
  const [user, setUser] = useState({ id: "u_1", name: "Admin User", role: "admin" })
  const [notifications, setNotifications] = useState(demo.notifications || [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
  }, [theme])

  const addNotification = (note) => {
    setNotifications((prev) => [{ id: crypto.randomUUID(), ...note }, ...prev])
  }

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      lang,
      setLang,
      user,
      setUser,
      notifications,
      addNotification,
      demo,
    }),
    [theme, lang, user, notifications],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useApp must be used within AppProvider")
  return ctx
}
