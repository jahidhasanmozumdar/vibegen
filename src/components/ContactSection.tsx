import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MessageSquare, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1F3A93]">
            Let's Build Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Ready to bring your startup vision to life? Get in touch and let's discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-900">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="border-gray-300 focus:border-[#1F3A93] focus:ring-[#1F3A93]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-900">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@startup.com"
                        className="border-gray-300 focus:border-[#1F3A93] focus:ring-[#1F3A93]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-gray-900">
                      Company / Startup
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Startup Inc."
                      className="border-gray-300 focus:border-[#1F3A93] focus:ring-[#1F3A93]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-900">
                      Tell us about your project *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="I'm looking to build..."
                      className="border-gray-300 focus:border-[#1F3A93] focus:ring-[#1F3A93] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#8A2BE2] hover:bg-[#7209c7] text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info - 1 column */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1F3A93] to-[#8A2BE2] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-extrabold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:hello@vibegen.com" className="text-white/90 hover:text-white">
                      hello@vibegen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Live Chat</div>
                    <p className="text-white/90">
                      Available Mon-Fri, 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Response Time</div>
                    <p className="text-white/90">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-extrabold text-gray-900 mb-3">
                Prefer to Schedule a Call?
              </h4>
              <p className="text-gray-600 mb-4">
                Book a free 30-minute consultation to discuss your project.
              </p>
              <Button 
                variant="outline"
                className="w-full border-[#1F3A93] text-[#1F3A93] hover:bg-[#1F3A93] hover:text-white"
              >
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
