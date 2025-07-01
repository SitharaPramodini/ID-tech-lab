import React, { useEffect, useState } from "react";

const Star = ({ style }) => {
  return <div className="absolute bg-white rounded-full" style={style}></div>;
};

const StarsCanvas = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 500; // Number of stars
    const tempStars = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 1; // 1px to 3px
      const top = Math.random() * 100; // %
      const left = Math.random() * 100; // %
      const opacity = Math.random(); // 0 to 1
      const animationDuration = Math.random() * 5 + 5; // 5s to 10s

      tempStars.push(
        <Star
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            opacity,
            animation: `twinkle ${animationDuration}s infinite alternate`,
          }}
        />
      );
    }

    setStars(tempStars);
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 overflow-hidden z-20 bg-black">
      {stars}
    </div>
  );
};

export default StarsCanvas;
