import Link from "next/link"

function Navbar() {
  return (
    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
