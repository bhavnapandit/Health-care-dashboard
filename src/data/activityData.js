
export const activityData = [
    {
        day: 'Mon',
        bars: [
            { height: 40, color: 'bg-cyan-400', position: 'left' },
            { height: 60, color: 'bg-gray-200', position: 'center' },
            { height: 80, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Tues',
        bars: [
            { height: 90, color: 'bg-cyan-400', position: 'left' },
            { height: 30, color: 'bg-gray-200', position: 'center' },
            { height: 70, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Wed',
        bars: [
            { height: 20, color: 'bg-cyan-400', position: 'left' },
            { height: 50, color: 'bg-gray-200', position: 'center' },
            { height: 40, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Thurs',
        bars: [
            { height: 70, color: 'bg-cyan-400', position: 'left' },
            { height: 85, color: 'bg-gray-200', position: 'center' },
            { height: 95, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Fri',
        bars: [
            { height: 100, color: 'bg-cyan-400', position: 'left' },
            { height: 45, color: 'bg-gray-200', position: 'center' },
            { height: 65, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Sat',
        bars: [
            { height: 35, color: 'bg-cyan-400', position: 'left' },
            { height: 75, color: 'bg-gray-200', position: 'center' },
            { height: 55, color: 'bg-indigo-500', position: 'right' }
        ]
    },
    {
        day: 'Sun',
        bars: [
            { height: 60, color: 'bg-cyan-400', position: 'left' },
            { height: 40, color: 'bg-gray-200', position: 'center' },
            { height: 80, color: 'bg-indigo-500', position: 'right' }
        ]
    }
];

export const chartConfig = {
    title: 'Activity',
    subtitle: '3 appointment on this week',
    maxHeight: 120,
    colors: {
        primary: 'bg-cyan-400',
        secondary: 'bg-gray-200',
        accent: 'bg-indigo-500'
    }
};
