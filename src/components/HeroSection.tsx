import { Button } from "./ui/button";
import { Brain, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-[#1F3A93]">Generating the right vibe</span>
                <br />
                <span className="text-gray-900">for your startup's</span>
                <br />
                <span className="text-gray-900">digital success.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl font-light">
                We craft cutting-edge web solutions and AI-powered applications 
                that transform your vision into reality. Built for startups ready to scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-[#8A2BE2] hover:bg-[#7209c7] text-white px-8 py-6 text-lg"
              >
                View Services
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="outline"
                className="border-2 border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93] hover:text-white px-8 py-6 text-lg"
              >
                Book a Consult
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8A2BE2]" />
                <span className="text-gray-600">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1F3A93] rounded-full"></div>
                <span className="text-gray-600">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1F3A93] rounded-full"></div>
                <span className="text-gray-600">Startup-Focused</span>
              </div>
            </div>
          </div>

          {/* Right Visual - 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A93]/20 to-[#8A2BE2]/20 rounded-full blur-3xl"></div>
              
              {/* Brain Icon Container */}
              <div className="relative  rounded-3xl p-12 ">
                <div className="relative">
                  {/* Pulsing Rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border-2 border-[#1F3A93]/20 animate-ping"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full border-2 border-[#8A2BE2]/20 animate-pulse"></div>
                  </div>
                  
                  {/* Brain Icon */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2] flex items-center justify-center shadow-2xl">
                      <Brain className="w-16 h-16 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#8A2BE2] flex items-center justify-center shadow-lg animate-bounce">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-[#1F3A93] shadow-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
