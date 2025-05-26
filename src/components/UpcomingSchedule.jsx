import { upcomingSchedule } from "../data/appointmentData";


const UpcomingSchedule = () => {
  return (
    <div className="bg-alice rounded-xl p-6">
      <h3 className="text-lg font-semibold text-egyptian mb-6">
        The Upcoming Schedule
      </h3>

      <div className="space-y-6">
        {upcomingSchedule.map((dayGroup, dayIndex) => (
          <div key={dayIndex}>
            <h4 className="text-sm font-medium text-gray-400 mb-3">
              {dayGroup.day}
            </h4>

            <div className="grid grid-cols-2 gap-3  text-egyptian font-medium">
              {dayGroup.appointments.map((appointment) => {
                return (
                  <div
                    key={appointment.id}
                    className="p-5 rounded-3xl  bg-lavender hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm ">
                        {appointment.title}
                      </span>
                      {appointment.text}
                    </div>

                    <p className="text-xs">{appointment.time}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
