import React from "react";


const DiagonalPattern: React.FC<DiagonalPatternProps> = ({
  side,
  className = "",
  topOffset = "0",
}) => {
  return (
    <div
      className={`absolute ${side}-0 w-[60px] h-full overflow-hidden sm:block hidden ${className}`}
      style={{ top: topOffset }}
    >
      <div
        className="absolute inset-0 w-[60px] h-full dark:opacity-[0.04] opacity-[0.06] border dark:border-[#eee] border-[#000]/70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 2px, currentcolor 2px, currentcolor 3px, transparent 3px, transparent 6px)",
        }}
      />
    </div>
  );
};

export default DiagonalPattern;
