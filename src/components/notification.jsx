export default function Notification({ type = "info", title, message }) {
  const palette = {
    info: "bg-secondary text-secondary-foreground",
    success: "bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-200",
    warning: "bg-yellow-50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200",
    error: "bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200",
  }
  return (
    <div className={`rounded-md border p-3 ${palette[type] || palette.info}`} role="status" aria-live="polite">
      <div className="font-medium">{title}</div>
      {message && <p className="text-sm opacity-90">{message}</p>}
    </div>
  )
}
