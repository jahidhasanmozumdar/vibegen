import { Shield, CheckCircle, DollarSign } from "lucide-react";

const assurances = [
  {
    icon: Shield,
    title: "30-Day Bug-Fix Guarantee",
    description: "Any bugs or issues found within 30 days of launch are fixed at no additional cost. Your peace of mind is our priority."
  },
  {
    icon: DollarSign,
    title: "No Hidden Costs",
    description: "What you see is what you pay. All pricing is transparent and agreed upon upfront—no surprise fees or unexpected charges."
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance Testing",
    description: "Every project undergoes rigorous testing across devices and browsers before launch to ensure a flawless user experience."
  }
];

export function SafeHandsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
            Your Project is in Safe Hands.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We stand behind our work with concrete guarantees and transparent processes.
          </p>
        </div>

        {/* Assurance Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {assurances.map((assurance, index) => {
            const Icon = assurance.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#8A2BE2] hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-extrabold text-gray-900">
                      {assurance.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {assurance.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#F8F8F8] px-6 py-4 rounded-full border border-[#1F3A93]/20">
            <div className="w-3 h-3 bg-[#8A2BE2] rounded-full animate-pulse"></div>
            <p className="text-gray-700">
              <span className="font-semibold text-[#1F3A93]">100% Client Satisfaction</span> is our commitment to you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
