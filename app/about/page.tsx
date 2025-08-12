import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-slate-900">About Anteres Unlimited Clothing LLC</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner for authentic American fashion in Singapore
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Established in 2024, Anteres Unlimited Clothing LLC is a legally registered clothing brand based in
                Columbus, Ohio, specializing in importing high-quality apparel directly from the United States and
                distributing to Singapore.
              </p>
              <p>
                Our company was founded with a clear mission: to bridge the gap between American fashion excellence and
                Southeast Asian style preferences, ensuring that customers in Singapore have access to authentic,
                high-quality clothing from renowned American brands.
              </p>
              <p>
                Operating under full legal compliance and transparency, we maintain the highest standards of business
                ethics and customer service, making us a trusted partner for both suppliers and customers.
              </p>
            </div>
          </div>
          <div>
            <Card className="bg-slate-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Company Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">Legal Name:</h4>
                    <p className="text-slate-600">Anteres Unlimited Clothing LLC</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Established:</h4>
                    <p className="text-slate-600">2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Business Address:</h4>
                    <p className="text-slate-600">
                      100 E Broad St Ste 1350
                      <br />
                      Columbus, OH 43215
                      <br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Business Type:</h4>
                    <p className="text-slate-600">
                      Clothing brand importing apparel from the USA and distributing to Singapore
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-slate-600">
                We guarantee 100% authentic products sourced directly from authorized American distributors and
                manufacturers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-slate-600">
                Connecting American fashion excellence with Singapore's dynamic market through efficient logistics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-slate-600">
                Dedicated to providing exceptional customer service and building long-term relationships with our
                clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-slate-600">
                Committed to maintaining the highest standards of quality in every product we import and distribute.
              </p>
            </div>
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Transparency & Compliance</h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Anteres Unlimited Clothing LLC operates with complete transparency and full legal compliance. We are a
              registered Limited Liability Company in the state of Ohio, United States, with all necessary business
              licenses and registrations in place.
            </p>
            <p>
              Our company maintains proper documentation for all business operations, including import/export licenses,
              tax registrations, and banking relationships. We are committed to ethical business practices and maintain
              detailed records of all transactions and business activities.
            </p>
            <p>
              For banking institutions and business partners requiring additional documentation, including our Employer
              Identification Number (EIN) and other corporate documents, these are available upon request through proper
              channels and verification procedures.
            </p>
            <p>
              We believe in building trust through transparency, which is why we openly share our business model,
              company structure, and operational details with our customers and partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
