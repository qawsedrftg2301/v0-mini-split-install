export function HowItWorks() {
  return (
    <section>
      <h2 className="text-sm font-semibold text-primary mb-2">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-card p-3 rounded-lg shadow-sm text-sm">
          <strong>You supply</strong>
          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-muted-foreground">
            <li>Heat pump</li>
            <li>Lineset</li>
            <li>Stand</li>
            <li>Disconnect</li>
            <li>Pipe cover</li>
            <li>You can buy on Amazon I can help with that.</li>
            <li>Electrical needs to be run from panel I can help with that.</li>
          </ul>
        </div>

        <div className="bg-card p-3 rounded-lg shadow-sm text-sm">
          <strong>I install</strong>
          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-muted-foreground">
            <li>Install system</li>
            <li>Startup</li>
            <li>Vacuum & test</li>
            <li><strong className="text-foreground">Pictures of inside/outside placement recommended</strong></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
