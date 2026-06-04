import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#0a4d7a] text-white text-center py-4 px-2.5">
      <h1 className="m-0 text-[1.3em] font-normal">Mini-Split Install</h1>
      <p className="mt-1.5 mb-0 text-[0.85em]">You buy — I install</p>
      <nav className="mt-2">
        <Link href="/energy-audit" className="text-white underline text-[0.85em] hover:opacity-80">
          Building Energy Audit →
        </Link>
      </nav>
    </header>
  )
}
