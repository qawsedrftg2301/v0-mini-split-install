import Link from "next/link"

export default function EnergyAudit() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4 px-3 text-center">
        <h1 className="text-xl font-bold m-0">Building Energy Audit</h1>
        <p className="text-sm mt-1 opacity-90">Save energy, save money</p>
      </header>

      <main className="flex-1 w-full max-w-[900px] mx-auto px-3 py-3 flex flex-col gap-4">
        <section>
          <h2 className="text-sm font-semibold text-primary mb-2">What is an Energy Audit?</h2>
          <div className="bg-card p-3 rounded-lg shadow-sm text-sm">
            <p className="text-muted-foreground">
              A building energy audit identifies where your home or business is losing energy and money. 
              I use professional tools to find air leaks, insulation problems, and inefficiencies in your heating and cooling systems.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-primary mb-2">What I Check</h2>
          <div className="bg-card p-3 rounded-lg shadow-sm text-sm">
            <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
              <li>Air leaks around windows, doors, and foundations</li>
              <li>Insulation levels in walls, attic, and basement</li>
              <li>Heating and cooling system efficiency</li>
              <li>Ductwork for leaks and proper sealing</li>
              <li>Ventilation and moisture issues</li>
              <li>Thermal imaging to find hidden problems</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-primary mb-2">Benefits</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-card p-3 rounded-lg shadow-sm text-center text-sm">
              Lower energy bills
            </div>
            <div className="bg-card p-3 rounded-lg shadow-sm text-center text-sm">
              More comfortable home
            </div>
            <div className="bg-card p-3 rounded-lg shadow-sm text-center text-sm">
              Reduce drafts
            </div>
            <div className="bg-card p-3 rounded-lg shadow-sm text-center text-sm">
              Find rebate opportunities
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-primary mb-2">Contact</h2>
          <div className="text-center text-sm space-y-1">
            <div>
              <a href="tel:5063776170" className="text-primary font-bold hover:underline">
                506 377 6170
              </a>
            </div>
            <div>
              <a href="mailto:maritaudit@gmail.com" className="text-primary font-bold hover:underline">
                maritaudit@gmail.com
              </a>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/" className="text-primary text-sm font-medium hover:underline">
            ← Back to Mini-Split Install
          </Link>
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-2 px-3 text-center text-xs">
        Building Energy Audit • New Brunswick
      </footer>
    </div>
  )
}
