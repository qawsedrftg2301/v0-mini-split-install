import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Wrench } from "lucide-react"

export function HowItWorks() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-primary mb-4">How It Works</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Package className="size-5 text-primary" />
              You Supply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Heat pump</li>
              <li>Lineset</li>
              <li>Stand</li>
              <li>Disconnect</li>
              <li className="text-foreground font-medium">
                You can buy on Amazon — I can help with that
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <Wrench className="size-5 text-primary" />
              I Install
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Install system</li>
              <li>Startup</li>
              <li>Vacuum & test</li>
              <li className="text-foreground font-medium">
                Pictures of inside/outside placement recommended
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
