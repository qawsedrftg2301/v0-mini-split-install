export function HowItWorks() {
  return (
    <section>
      <h2 className="text-[0.95em] font-semibold text-[#0a4d7a] mt-1.5 mb-1">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg shadow-[0_1px_5px_rgba(0,0,0,0.08)] text-[0.8em]">
          <strong>You supply</strong>
          <ul className="list-disc pl-[15px] mt-1 mb-0">
            <li>Heat pump</li>
            <li>Lineset</li>
            <li>Stand</li>
            <li>Disconnect</li>
            <li>You can buy on Amazon I can help with that.</li>
            <li>Electrical needs to be run from panel I can help with that.</li>
            <li><strong>Pictures of inside/outside placement recommended</strong></li>
          </ul>
        </div>

        <div className="bg-white p-2 rounded-lg shadow-[0_1px_5px_rgba(0,0,0,0.08)] text-[0.8em]">
          <strong>I install</strong>
          <ul className="list-disc pl-[15px] mt-1 mb-0">
            <li>Install system</li>
            <li>Startup</li>
            <li>Vacuum & test</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
