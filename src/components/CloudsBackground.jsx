import { useEffect, useState } from "react";

export const CloudsBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const numberOfClouds = 8;
    const generatedClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      generatedClouds.push({
        id: i,
        size: Math.random() * 150 + 120,
        x: Math.random() * 100,
        y: Math.random() * 50,
        duration: Math.random() * 40 + 30,
        flip: Math.random() > 0.5 ? -1 : 1,
      });
    }

    setClouds(generatedClouds);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-cloud"
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size / 3.5}px`,
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            backgroundImage: "url('/cloud.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 0.4,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
