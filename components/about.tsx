"use client";

import { AboutMe } from "@/interfaces/aboutMe.interface";

interface AboutProps {
  mode: "professional" | "personal";
  onModeChange: (mode: "professional" | "personal") => void;
  professional: AboutMe;
  personal: AboutMe;
}

export const About = ({
  mode,
  onModeChange,
  personal,
  professional,
}: AboutProps) => {
  return (
    <section
      id="about"
      className={`py-24 ${
        mode === "personal" ? "bg-background/10" : "bg-muted/30"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <div
              className={`inline-flex rounded-full p-1 ${
                mode === "personal"
                  ? "bg-background/20"
                  : "bg-card border border-border"
              }`}
            >
              <button
                onClick={() => onModeChange("professional")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "professional"
                    ? mode === "personal"
                      ? "bg-background text-foreground"
                      : "bg-foreground text-background"
                    : mode === "personal"
                    ? "text-background hover:text-background/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Professional
              </button>
              <button
                onClick={() => onModeChange("personal")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === "personal"
                    ? "bg-background text-foreground"
                    : mode === "personal"
                    ? "text-background hover:text-background/80"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Personal
              </button>
            </div>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden">
            <div className="relative aspect-video bg-muted/50">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/professional-video-introduction.jpg"
              >
                <source src="/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <h2
            className={`text-4xl font-bold mb-8 text-center ${
              mode === "personal" ? "text-background" : "text-foreground"
            }`}
          >
            {mode === "professional"
              ? "About Me - Professional"
              : "About Me - Personal"}
          </h2>

          {mode === "professional" ? (
            <div className="prose prose-lg mx-auto">
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  mode === "personal"
                    ? "text-background/80"
                    : "text-muted-foreground"
                }`}
              >
                I'm a passionate web developer and technical manager focused on
                creating exceptional digital experiences that combine elegant
                design with clean and efficient code. With years of experience
                leading development teams, I bridge the gap between technical
                excellence and business objectives.
              </p>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  mode === "personal"
                    ? "text-background/80"
                    : "text-muted-foreground"
                }`}
              >
                My expertise spans modern front-end development, cloud
                architecture, and team leadership. I specialize in React,
                Next.js, and cutting-edge web technologies, while also managing
                cross-functional teams to deliver scalable solutions that drive
                business growth.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Development
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB
                  </p>
                </div>

                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Management
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Team Leadership, Agile, Project Planning, Technical Strategy
                  </p>
                </div>

                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Cloud & DevOps
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Google Cloud, AWS, Docker, CI/CD, Microservices
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="prose prose-lg mx-auto">
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  mode === "personal"
                    ? "text-background/80"
                    : "text-muted-foreground"
                }`}
              >
                When I'm not coding or leading teams, I'm an avid learner and
                tech enthusiast. I love exploring new technologies, contributing
                to open-source projects, and sharing my knowledge through blog
                posts and YouTube videos.
              </p>

              <p
                className={`text-lg leading-relaxed mb-6 ${
                  mode === "personal"
                    ? "text-background/80"
                    : "text-muted-foreground"
                }`}
              >
                Outside of tech, I enjoy photography, hiking, and spending
                quality time with family and friends. I believe in work-life
                balance and continuous personal growth, always seeking new
                challenges that push me out of my comfort zone.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Hobbies
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Photography, Hiking, Reading, Gaming
                  </p>
                </div>

                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Interests
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    AI/ML, Space Exploration, Sustainable Tech, Music
                  </p>
                </div>

                <div
                  className={`p-6 rounded-lg ${
                    mode === "personal"
                      ? "bg-background/20 border border-background/30"
                      : "bg-card border border-border"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      mode === "personal"
                        ? "text-background"
                        : "text-foreground"
                    }`}
                  >
                    Values
                  </h3>
                  <p
                    className={`text-sm ${
                      mode === "personal"
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    Creativity, Empathy, Continuous Learning, Collaboration
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
