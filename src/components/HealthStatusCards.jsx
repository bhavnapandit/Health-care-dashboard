import { healthStatusData } from "../data/healthData";
const HealthStatusCards = () => {
  return (
    <section className="space-y-4">
      {healthStatusData.map(({ id, name, color, progress, date, icon }) => (
        <div key={id} className="bg-alice rounded-xl shadow-sm p-4">
          <div className="flex items-start space-x-4">
            {/* # task progress */}
            <div className="flex-1 space-y-1">
              {/* # icon and name */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center relative">
                  <img src={icon} alt="" className="w-9 h-9" />
                </div>
                <p className="text-sm font-bold text-[#3F51B5]">{name}</p>
              </div>

              <p className="text-[10px] text-gray-300">Date: {date}</p>

              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%`, backgroundColor: color }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HealthStatusCards;
