import { Button } from "./ui/button";
import { Check, Zap, Rocket, Sparkles } from "lucide-react";

const pricingTiers = [
  {
    name: "MVP Launch",
    icon: Zap,
    price: "$3,000",
    description: "Perfect for validating your startup idea quickly",
    features: [
      "Landing page design",
      "Core feature development",
      "Mobile responsive",
      "2 weeks delivery",
      "Basic SEO setup",
      "Email support"
    ],
    highlighted: false
  },
  {
    name: "SaaS Full Build",
    icon: Rocket,
    price: "$12,000",
    description: "Complete solution for scaling startups",
    features: [
      "Custom web application",
      "User authentication",
      "Database integration",
      "Payment processing",
      "Admin dashboard",
      "6 weeks delivery",
      "API development",
      "Priority support",
      "3 months maintenance"
    ],
    highlighted: true
  },
  {
    name: "AI Integration",
    icon: Sparkles,
    price: "$8,000",
    description: "Cutting-edge AI-powered features",
    features: [
      "Custom AI models",
      "Natural language processing",
      "Machine learning integration",
      "Data analytics",
      "4 weeks delivery",
      "API endpoints",
      "Priority support"
    ],
    highlighted: false
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Transparent pricing for startups at every stage. Choose the package that fits your vision.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.highlighted 
                    ? "border-2 border-[#1F3A93] ring-4 ring-[#1F3A93]/10 scale-105" 
                    : "border border-gray-200"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#8A2BE2] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    tier.highlighted 
                      ? "bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2]" 
                      : "bg-[#1F3A93]/10"
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      tier.highlighted ? "text-white" : "text-[#1F3A93]"
                    }`} />
                  </div>

                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <span className="text-5xl font-extrabold text-[#8A2BE2]">
                      {tier.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Check className="w-5 h-5 text-[#1F3A93]" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full py-6 text-lg ${
                      tier.highlighted
                        ? "bg-[#8A2BE2] hover:bg-[#7209c7] text-white"
                        : "bg-[#8A2BE2] hover:bg-[#7209c7] text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <button 
              onClick={scrollToContact}
              className="text-[#1F3A93] font-semibold hover:text-[#8A2BE2] underline"
            >
              Let's talk
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
