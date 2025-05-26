import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
    return (
        <main className="flex-1 p-6 bg-white">
            <div className="grid grid-cols-12 gap-6 h-full">
                <section className="col-span-6">
                    {/* dashboard header title and dropdown button should be at top */}
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-[#3632A9]">Dashboard</h1>
                        <button className="flex items-center gap-2 px-4 py-2">
                            <span className="text-[#3632A9] text-xs text-medium">This Week</span>
                            <svg
                                className="w-4 h-4 text-[#3632A9] text-xs text-medium"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* left column: anatomy section and health status cards */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                        <AnatomySection />
                        <HealthStatusCards />
                    </div>
                    {/* activity feed below the health status cards as shown in image*/}
                    <ActivityFeed />
                </section>

                {/*  calendar view and upcoming schedule*/}
                <section className="col-span-6 space-y-6 rounded-lg bg-alice">
                    <CalendarView />
                    <UpcomingSchedule />
                </section>
            </div>
        </main>
    );
};

export default DashboardMainContent;

