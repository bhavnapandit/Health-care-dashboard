import { days, timeSlots} from "../data/appointmentData";
function CalendarView() {
  return (
    <div className="mx-auto bg-gray-50 p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-egyptian text-md font-bold ml-5">October 2021</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-egyptian hover:text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-egyptian hover:text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* #calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {days.map((dayInfo, index) => (
          <div
            key={dayInfo.day}
            className={`text-center ${
              dayInfo.day === 26 ? "bg-blue-50 rounded-lg " : ""
            }`}
          >
            {/* #day name */}
            <div
              className={`text-[8px] font-bold mb-2 ${
                dayInfo.day === 31 ? "text-gray-400" : "text-egyptian"
              }`}
            >
              {dayInfo.dayName}
            </div>

            {/* #day number */}
            <div
              className={`text-[18px] font-bold mb-3 ${
                dayInfo.day === 31 ? "text-gray-400" : "text-gray-800"
              }`}
            >
              {dayInfo.day}
            </div>

            {/* #time slots #*/}
            <div className="space-y-1">
              {[0, 1, 2].map((slotIndex) => {
                const timeIndex = index * 3 + slotIndex;
                const time = timeSlots[timeIndex];
                const isSpecialAppointment =
                  dayInfo.day === 26 && time === "09:00";
                const isNormalAppointment =
                  (dayInfo.day === 28 && time === "11:00") ||
                  (dayInfo.day === 30 && time === "12:00") ||
                  (dayInfo.day === 31 && time === "09:00");

                return (
                  <div
                    key={slotIndex}
                    className="text-[10px] font-medium h-5 flex items-center justify-center"
                  >
                    {time === "—" ? (
                      <span className="text-gray-300">—</span>
                    ) : isSpecialAppointment ? (
                      <div className="bg-egyptian text-white px-2 py-1 rounded text-xs font-medium">
                        {time}
                      </div>
                    ) : isNormalAppointment ? (
                      <div className="bg-indigo-200 text-white px-2 py-1 rounded text-xs relative inline-block text-center">
                        {time}
                        <div className="absolute left-1/2 translate-x-[-50%] w-[.2rem] h-[.2rem] bg-gray-50 rounded-full"></div>
                      </div>
                    ) : (
                      <span
                        className={`${
                          dayInfo.day === 31 ? "text-gray-400" : "text-egyptian"
                        }`}
                      >
                        {time}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex p-2 gap-4">
        <div className="w-[50%] bg-egyptian text-gray-200 p-4 rounded-[1.5rem] relative">
          <div className="absolute top-3 right-4 text-2xl">🦷</div>

          <h3 className="font-semibold text-sm mb-2">Dentist</h3>
          <p className="text-xs mb-1">09:00-11:00</p>
          <p className="text-xs">Dr. Cameron Williamson</p>
        </div>

        <div className="w-[60%] bg-lavender text-egyptian p-4 rounded-[1.5rem] relative">
          <div className="absolute top-3 right-4 text-2xl">💪🏻</div>

          <h3 className="font-semibold text-sm mb-2">
            Physiotherapy Appointment
          </h3>
          <p className="text-xs mb-1">11:00-12:00</p>
          <p className="text-xs">Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
