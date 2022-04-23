import React from "react";
import "../modal.scss";

const Dots = () => {
  return (
    <div className="dots">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <svg
          key={i}
          width="3"
          height="3"
          viewBox="0 0 3 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3" height="3" rx="1.5" fill="#8E8E8E" />
        </svg>
      ))}
    </div>
  );
};

export default Dots;
