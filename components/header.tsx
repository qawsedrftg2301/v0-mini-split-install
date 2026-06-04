import Link from "next/link"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-3">
      <div className="flex items-center justify-between max-w-[900px] mx-auto">
        <div>
          <h1 className="text-xl font-bold m-0">Mini-Split Install</h1>
          <p className="text-sm mt-1 opacity-90">You buy — I install</p>
        </div>
        <Link 
          href="/energy-audit" 
          className="text-sm bg-primary-foreground text-primary px-4 py-2 rounded font-medium hover:opacity-90"
        >
          Energy Audit Service
        </Link>
      </div>
    </header>
  )
}
