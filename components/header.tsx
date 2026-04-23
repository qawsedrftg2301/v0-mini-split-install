import { Snowflake } from "lucide-react"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Snowflake className="size-8" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Mini-Split Install
          </h1>
        </div>
        <p className="text-primary-foreground/90 text-lg">
          You buy — I install
        </p>
      </div>
    </header>
  )
}
