export const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Languages 🧠",
      items: ["Java", "Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries 🧩",
      items: ["JavaFX", "React", "Docker"],
    },
    {
      title: "Database Systems 🗄️",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Version Control & Collaboration 🤝",
      items: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="space-y-12 ">
          {skillGroups.map((group, i) => (
            <div
              key={i}
              className="relative z-10 bg-white dark:bg-card p-6 sm:p-8 rounded-2xl shadow-xl border border-border"
            >
              <h3 className="text-2xl font-semibold mb-6 text-foreground justify-center flex items-center gap-2">
                {group.title}
              </h3>

              <div className="flex justify-center flex-wrap gap-3">
                {group.items.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm hover:scale-105 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
