export const calendarData = {
  month: "October",
  year: 2021,
  days: [
    { date: 25, day: "Mon", appointments: ["10:00"] },
    { date: 26, day: "Tues", appointments: ["08:00", "09:00"] },
    { date: 27, day: "Wed", appointments: ["12:00"] },
    { date: 28, day: "Thurs", appointments: ["10:00"] },
    { date: 29, day: "Fri", appointments: ["11:00", "14:00", "16:00"] },
    { date: 30, day: "Sat", appointments: ["14:00"] },
    { date: 31, day: "Sun", appointments: ["10:00"] },
  ],
}

export const appointmentCards = [
  {
    id: 1,
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    type: "dentist",
    color: "#3632A9",
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    type: "physiotherapy",
    color: "#8b5cf6",
  },
]

export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        text: "💉",
        color: "#10b981",
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        text: "👁️",
        color: "#6366f1",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        text: "❤️",
        color: "#ef4444",
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        text: "👨🏾‍⚕️",
        color: "#8b5cf6",
      },
    ],
  },
]

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 35 },
    { day: "Sat", value: 50 },
    { day: "Sun", value: 25 },
  ],
}


export const appointments = [
    { time: '09:00', day: 26, type: 'special' },
    { time: '11:00', day: 28, type: 'normal' },
    { time: '12:00', day: 30, type: 'normal' },
    { time: '09:00', day: 31, type: 'normal' }
  ];

export const timeSlots = [
    '10:00', '11:00', '12:00',
    '08:00', '09:00', '10:00',
    '12:00', '—', '13:00',
    '10:00', '11:00', '—',
    '—', '14:00', '16:00',
    '12:00', '14:00', '15:00',
    '09:00', '10:00', '11:00'
  ];

export  const days = [
    { day: 25, dayName: 'Mon' },
    { day: 26, dayName: 'Tues' },
    { day: 27, dayName: 'Wed' },
    { day: 28, dayName: 'Thurs' },
    { day: 29, dayName: 'Fri' },
    { day: 30, dayName: 'Sat' },
    { day: 31, dayName: 'Sun' }
  ];
