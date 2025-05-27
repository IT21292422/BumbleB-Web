"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "blur(8px) brightness(0.3)",
            transform: "scale(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-green-900/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Welcome to <span className="text-yellow-400">BumbleB</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 my-2 capitalize drop-shadow-md">
            IoT-enabled robotic pollination for enhanced strawberry yield
          </p>
          <p className="text-sm md:text-xl text-gray-100 my-2">24-25J-160</p>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
            BumbleB is an innovative autonomous rover designed to enhance
            strawberry crop yields through precision pollination technology. Our
            cutting-edge solution addresses the critical challenges in modern
            agriculture while promoting sustainable farming practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToNext}
            >
              Explore Project
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-gray-200 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}
