import { Target, Users, Lightbulb, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Startup-First Approach",
    description: "We understand the unique challenges startups face. Our solutions are designed to scale with your growth, from MVP to market leader."
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description: "Fast delivery without compromising on quality. We use modern tools and frameworks to build robust applications in record time."
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of the curve with cutting-edge technologies like AI, machine learning, and modern web frameworks."
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "Your success is our success. We work as an extension of your team, providing ongoing support and strategic guidance."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
                About Vibegen
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                We're a team of passionate developers and designers who believe in the power of great software to transform startups.
              </p>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="leading-relaxed">
                Founded by startup veterans who understand the hustle, Vibegen was born from a simple idea: 
                <span className="text-[#1F3A93] font-semibold"> exceptional web development shouldn't be out of reach for early-stage companies.</span>
              </p>
              
              <p className="leading-relaxed">
                We specialize in rapid prototyping, full-stack development, and AI integration. Our goal is to help you validate your ideas quickly, 
                build products that users love, and scale efficiently as your startup grows.
              </p>

              <p className="leading-relaxed">
                Whether you're pre-seed and need an MVP, or you're scaling and need a complete platform, 
                we bring the technical expertise and startup mindset to get you there.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#8A2BE2]">50+</div>
                <div className="text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#8A2BE2]">30+</div>
                <div className="text-gray-600 mt-1">Startups</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-[#8A2BE2]">98%</div>
                <div className="text-gray-600 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#1F3A93] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
