"use client";

import Image from "next/image";
import { MapPin, ArrowRight, User, Crosshair, Clock, Flame } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Google Maps Geocoding API
          const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

          if (!apiKey) {
            console.warn("Google Maps API key is missing. Reverting to coordinates.");
            setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);
            return;
          }

          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await response.json();

          if (data.status === "OK" && data.results?.[0]) {
            // Use the first formatted address
            setLocation(data.results[0].formatted_address);
          } else {
            console.warn("Geocoding API error:", data.status);
            setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);
          }
        } catch (error) {
          console.warn("Error fetching address:", error);
          // Fallback to coordinates
          setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        console.error("Error getting location:", error);
        if (error.code === 1) { // PERMISSION_DENIED
          alert("Please allow location access to use this feature.");
        } else {
          alert("Unable to retrieve your location");
        }
      }
    );
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Content (50%) */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center px-8 lg:px-12 py-12 lg:py-0 relative z-10">

          {/* Brand Header - Centered & Larger */}
          <div className="flex flex-col items-center gap-0 mb-6 mx-auto">
            <div className="relative h-48 w-48">
              <Image
                src="/assets/logo.png"
                alt="KANSATIATE"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="text-5xl uppercase tracking-[0.15em] -mt-10 font-bold"
              style={{
                fontFamily: 'var(--font-sadana-square)',
                color: '#0F3F4C'
              }}
            >
              KANSATIATE
            </span>
          </div>

          <div className="max-w-xl mx-auto space-y-8 text-center lg:text-left">
            {/* Logo/Brand for emphasis if needed, but Navbar has it.
                We'll focus on the Heading as per reference. */}

            <h1 className="text-4xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-[#0F3F4C]">
              Authentic. Premium. <span className="text-[#E63946]">100% Vegetarian.</span>
            </h1>

            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Savor the finest Indian delicacies, prepared with passion and delivered hot to your doorstep. Taste the difference of quality.
            </p>

            {/* Input Box */}
            <div className="w-full bg-white border border-gray-200 p-2 rounded-xl shadow-lg flex flex-col sm:flex-row gap-2 transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
              <div className="flex-1 relative flex items-center">
                <MapPin className="absolute left-4 h-5 w-5 text-[#E63946]" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your delivery location"
                  className="w-full h-12 pl-12 pr-4 text-[#0F3F4C] font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                />

                <button
                  onClick={handleLocateMe}
                  disabled={loading}
                  className="absolute right-2 px-3 py-1.5 text-sm font-bold text-gray-500 hover:text-[#E63946] transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span className="flex items-center gap-1">
                      <Crosshair className="w-4 h-4" /> Locate Me
                    </span>
                  )}
                </button>
              </div>
              <Link
                href="/menu"
                className="h-12 px-5 bg-[#FF9933] hover:bg-[#e68a2e] text-white font-bold rounded-lg transition-all shadow-md active:scale-95 whitespace-nowrap text-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                Order Now <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#E63946]" />
                <span className="text-[#0F3F4C]">Hot & Fresh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E63946]" />
                <span className="text-[#0F3F4C]">30 Min Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Hero (55%) */}
        <div className="w-full lg:w-[55%] relative min-h-[50vh] lg:min-h-screen bg-gray-50">
          {/* Sign In Button Overlay */}
          <div className="absolute top-8 right-8 z-20">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#0F3F4C] hover:bg-[#E63946] hover:text-white font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 border border-white/20">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>

          <Image
            src="/assets/thaal.png"
            alt="Delicious Thaal"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/10" />
        </div>
      </div>
    </main>
  );
}
