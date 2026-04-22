import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-primary mb-4">Price</h2>
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-xl">Installation</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-3">
          <div>
            <p className="text-3xl font-bold">$500</p>
            <p className="text-primary-foreground/80 text-sm">
              Starting price for single unit, one head basic install
            </p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-3">
            <p className="text-lg font-semibold">$200</p>
            <p className="text-primary-foreground/80 text-sm">
              Pump down removal
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
