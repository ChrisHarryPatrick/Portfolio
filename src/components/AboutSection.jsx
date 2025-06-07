import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in Java, SQL, and full-stack development,
              I specialize in building scalable applications and interactive
              user experiences. My academic background and hands-on teaching
              experience reinforce my ability to break down complex concepts
              into elegant solutions.
            </p>

            <p className="text-muted-foreground">
              I'm driven by a passion for clean code, system design, and
              continuous learning—always exploring new tools and technologies to
              stay at the cutting edge of software engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/ChrisHarryPatrick_RESUME.pdf"
                download="ChrisHarryPatrick_RESUME.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building robust and maintainable applications using Java,
                    Python, and modern frameworks like React and JavaFX.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Database & System Design
                  </h4>
                  <p className="text-muted-foreground">
                    Optimizing performance and designing efficient systems using
                    MySQL, PostgreSQL, and scalable backend architectures.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Mentorship & Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    Leading labs, guiding students, and contributing to team
                    success through active mentorship and effective
                    communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
