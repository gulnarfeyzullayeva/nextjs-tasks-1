import Link from "next/link"

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Səhifə tapılmadı!</h2>
      <Link href="/">Ana səhifəyə qayıt</Link>
    </div>
  )
}

export default NotFound
