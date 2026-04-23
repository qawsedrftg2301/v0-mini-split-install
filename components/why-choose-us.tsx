import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Award } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-primary mb-4">Why</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6 pb-4">
            <DollarSign className="size-8 mx-auto mb-2 text-primary" />
            <p className="font-medium">Save Money</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6 pb-4">
            <Award className="size-8 mx-auto mb-2 text-primary" />
            <p className="font-medium">Pro Install</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
