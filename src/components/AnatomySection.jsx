import React from "react";
import {  SearchX } from "lucide-react";

const AnatomyViewer = () => {
  const anatomyIndicators = [
    {
      id: "heart",
      name: "Healthy Heart",
      position: { top: "32%", left: "90%" },
      color: "#3632A9",
      icon: "❤️",
      labelPosition: "right",
    },
    {
      id: "leg",
      name: "Healthy Leg",
      position: { top: "60%", left: "10%" },
      color: "#00d3f2",
      icon: "🦵",
      labelPosition: "left",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-alice rounded-lg ">
      {/* #header with zoom icon */}
      <div className="relative p-4">
        <div className="absolute top-2 right-2 w-8 h-8 text-gray-400 flex items-center justify-center">
          <SearchX className="w-5 h-5" />
        </div>
      </div>

      {/* #main anatomy display */}
      <div className="relative px-8 pb-8">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* #human body image */}
          <img
            src="/body.png"
            alt="human anatomy"
            className="w-32 h-full object-contain opacity-90 drop-shadow-lg"
            style={{ filter: "hue-rotate(10deg) saturate(1.2)" }}
          />

          {/* #health indicators */}
          {anatomyIndicators.map((indicator) => {
            return (
              <div
                key={indicator.id}
                className="absolute min-w-28 transform -translate-x-1/2 -translate-y-1/2 rounded-sm"
                style={{
                  top: indicator.position.top,
                  left: indicator.position.left,
                }}
              >
                <div
                  className={`flex items-center gap-2 px-2 py-1 rounded-lg text-white text-[10px] font-medium shadow-md`}
                  style={{
                    backgroundColor: indicator.color,
                    flexDirection:
                      indicator.labelPosition === "left"
                        ? "row-reverse"
                        : "row",
                  }}
                >
                  {indicator.icon }
                  <span>{indicator.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnatomyViewer;
