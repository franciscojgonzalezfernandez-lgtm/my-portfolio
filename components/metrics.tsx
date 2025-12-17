"use client";

import { useState, useEffect } from "react";
import {
  Rocket,
  Zap,
  Eye,
  Accessibility,
  Search,
  Chrome,
  MonitorSmartphone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function Metrics() {
  const [launched, setLaunched] = useState(false);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLaunched(true), 500);
    const timer2 = setTimeout(() => setShowScores(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const metrics = [
    { name: "Performance", score: 100, icon: Zap, color: "text-green-500" },
    {
      name: "Accessibility",
      score: 100,
      icon: Accessibility,
      color: "text-green-500",
    },
    { name: "Best Practices", score: 100, icon: Eye, color: "text-green-500" },
    { name: "SEO", score: 100, icon: Search, color: "text-green-500" },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section with Rocket Animation */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Numbers Don't Lie
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Achieving perfect scores isn't just about bragging rights — it's
            about delivering exceptional user experiences that drive real
            business results.
          </p>

          {/* Rocket Animation */}
          <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Rocket */}
            <div
              className={`relative transition-all duration-1000 ease-out ${
                launched
                  ? "-translate-y-8 scale-110"
                  : "translate-y-16 scale-100"
              }`}
            >
              {/* Rocket Trail */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-4 transition-all duration-500 ${
                  launched ? "h-32 opacity-100" : "h-0 opacity-0"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-t from-transparent via-orange-400 to-yellow-400 rounded-full blur-sm" />
              </div>

              {/* Rocket Body */}
              <div className="relative bg-gradient-to-b from-foreground to-muted-foreground rounded-t-full p-8 shadow-2xl">
                <Rocket
                  className={`w-16 h-16 md:w-24 md:h-24 text-background transition-transform duration-500 ${
                    launched ? "rotate-0" : "rotate-12"
                  }`}
                />
                {/* Rocket Window */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-blue-400 rounded-full border-2 border-background/50" />
              </div>

              {/* Rocket Fins */}
              <div className="flex justify-center -mt-2">
                <div className="w-4 h-8 bg-red-500 -skew-x-12 rounded-b" />
                <div className="w-8 h-4 bg-foreground rounded-b" />
                <div className="w-4 h-8 bg-red-500 skew-x-12 rounded-b" />
              </div>
            </div>

            {/* 100 Score Badges flying around */}
            {showScores && (
              <>
                <div
                  className="absolute top-8 left-1/4 animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    100
                  </span>
                </div>
                <div
                  className="absolute top-16 right-1/4 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    100
                  </span>
                </div>
                <div
                  className="absolute bottom-16 left-1/3 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    100
                  </span>
                </div>
                <div
                  className="absolute bottom-8 right-1/3 animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                >
                  <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    100
                  </span>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Animated Score Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div
                key={metric.name}
                className={`bg-card border border-border rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  showScores
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <metric.icon
                  className={`w-8 h-8 mx-auto mb-3 ${metric.color}`}
                />
                <div className="relative w-20 h-20 mx-auto mb-3">
                  {/* Circular Progress */}
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-muted"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      className={`${metric.color} transition-all duration-1000`}
                      strokeDasharray={`${showScores ? 226 : 0} 226`}
                      style={{ transitionDelay: `${index * 150 + 500}ms` }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-foreground">
                    {showScores ? metric.score : 0}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {metric.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Lighthouse Screenshot */}
        {/* <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground">
                  Lighthouse Report
                </span>
              </div>
              <div className="p-8 bg-gradient-to-br from-background to-muted">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {metrics.map((metric) => (
                    <div key={metric.name} className="text-center">
                      <div className="relative w-24 h-24 md:w-28 md:h-28">
                        <svg className="w-full h-full -rotate-90">
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="8"
                            className="opacity-20"
                          />
                          <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283 283"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-bold text-green-500">
                          {metric.score}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {metric.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Commitment Section */}
        <section className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Committed to Performance Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As an engineer, I understand that web performance isn't just a
              technical metric — it's a
              <strong className="text-foreground">
                {" "}
                critical business driver
              </strong>
              . Studies show that a 1-second delay in page load time can result
              in a{" "}
              <strong className="text-foreground">
                7% reduction in conversions
              </strong>
              . That's why I obsess over every millisecond, every byte, and
              every render cycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4">
                <p className="text-3xl font-bold text-foreground mb-2">53%</p>
                <p className="text-sm text-muted-foreground">
                  of mobile users abandon sites that take over 3 seconds to load
                </p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-foreground mb-2">2x</p>
                <p className="text-sm text-muted-foreground">
                  higher conversion rates for sites with sub-2-second load times
                </p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-foreground mb-2">$2.6B</p>
                <p className="text-sm text-muted-foreground">
                  lost annually due to slow-loading websites
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Try it yourself section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Try It Yourself!
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take my word for it. Run a Lighthouse audit on this
                very website and see the results with your own eyes.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Chrome className="w-5 h-5" />
                    Open Chrome DevTools
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Right-click anywhere on this page and select{" "}
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-mono text-xs">
                      Inspect
                    </span>
                    , or press{" "}
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-mono text-xs">
                      F12
                    </span>{" "}
                    (Windows/Linux) or{" "}
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-mono text-xs">
                      Cmd + Option + I
                    </span>{" "}
                    (Mac).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Navigate to Lighthouse Tab
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    In the DevTools panel, click on the{" "}
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-mono text-xs">
                      Lighthouse
                    </span>{" "}
                    tab. If you don't see it, click the{" "}
                    <span className="bg-muted px-2 py-0.5 rounded text-foreground font-mono text-xs">
                      &gt;&gt;
                    </span>{" "}
                    arrows to find more tabs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MonitorSmartphone className="w-5 h-5" />
                    Configure the Audit
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Select the categories you want to test:{" "}
                    <span className="font-medium text-foreground">
                      Performance
                    </span>
                    ,{" "}
                    <span className="font-medium text-foreground">
                      Accessibility
                    </span>
                    ,{" "}
                    <span className="font-medium text-foreground">
                      Best Practices
                    </span>
                    , and{" "}
                    <span className="font-medium text-foreground">SEO</span>.
                    Choose either Desktop or Mobile device.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Analyze the Page
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Click{" "}
                    <span className="bg-foreground text-background px-3 py-1 rounded text-xs font-medium">
                      Analyze page load
                    </span>{" "}
                    and wait for the audit to complete. In a few seconds, you'll
                    see the results!
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative: PageSpeed Insights */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground mb-4">
                Prefer a quicker way? Use Google's PageSpeed Insights:
              </p>
              <a
                href="https://pagespeed.web.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity mx-auto w-fit"
              >
                Open PageSpeed Insights
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Just paste this website's URL and hit Analyze
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
