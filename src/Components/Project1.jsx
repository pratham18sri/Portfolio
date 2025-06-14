import { useRef } from "react";
import "./Project1.css";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <span>
        <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        className={`card-spotlight ${className}`}
        >
        {children}
            <div>
                <button className="card-button">View</button>
            </div>
            <div className="text">
              <h3>This Project I Made using React</h3>
            </div>
        </div>
    </span>
    
    
  );
};

export default SpotlightCard;
