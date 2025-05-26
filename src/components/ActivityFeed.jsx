import React from "react";
import {activityData,chartConfig} from "../data/activityData";
function ActivityChart() {
  return (
    <div className="bg-alice p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">
          {chartConfig.title}
        </h2>
        <p className="text-sm text-gray-400">{chartConfig.subtitle}</p>
      </div>

      {/* Chart */}
      <div className="flex justify-between items-end h-32">
        {activityData.map((dayData, index) => (
          <div key={dayData.day} className="flex flex-col items-center">
            {/* Bars container */}
            <div className="flex items-end gap-1 mb-4 h-24">
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`w-2 rounded-full ${bar.color}`}
                  style={{
                    height: `${(bar.height / 100) * chartConfig.maxHeight}px`,
                    minHeight: "8px",
                  }}
                ></div>
              ))}
            </div>

            {/* Day label */}
            <span className="text-xs text-gray-500 font-medium">
              {dayData.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityChart;