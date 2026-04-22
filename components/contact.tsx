import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-primary mb-4">Contact</h2>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-base">
            Get in Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="tel:5063776170"
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Phone className="size-5" />
            506 377 6170
          </a>
          <a
            href="mailto:maritaudit@gmail.com"
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <Mail className="size-5" />
            maritaudit@gmail.com
          </a>
        </CardContent>
      </Card>
    </section>
  )
}
