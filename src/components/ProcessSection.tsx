import { Lightbulb, Pencil, Code, Rocket, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "We dive deep into your vision, goals, and target market to create a strategic roadmap."
  },
  {
    number: "02",
    icon: Pencil,
    title: "Design & Planning",
    description: "Wireframes and design mockups are crafted to ensure pixel-perfect execution."
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Testing",
    description: "Our developers build and rigorously test your product with cutting-edge technologies."
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your application and provide ongoing support to ensure smooth operations."
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
            Our Proven 4-Step Process: From Vibe to Launch.
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1F3A93]/20 via-[#1F3A93]/40 to-[#1F3A93]/20" 
               style={{ width: 'calc(100% - 8rem)', left: '4rem' }}>
          </div>

          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-[#1F3A93] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="space-y-6">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between">
                      <div className="text-6xl font-extrabold text-[#1F3A93]/20">
                        {step.number}
                      </div>
                      {index < processSteps.length - 1 && (
                        <ArrowRight className="hidden lg:block w-6 h-6 text-[#1F3A93]/40" />
                      )}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-extrabold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
