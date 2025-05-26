import { sidebarSections } from "../data/navigationData";

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-gray-50 p-6 flex flex-col">
            <div className="mb-12">
                <h1 className="text-2xl font-bold text-cyan-400">
                    Health<span className="text-egyptian">care.</span>
                </h1>
            </div>

            {/* # render sections */}
            {sidebarSections.map((section, sectionIndex) => (
                <div
                    key={sectionIndex}
                    className={
                        sectionIndex === sidebarSections.length - 1 ? "mt-auto" : "mb-8"
                    }
                >
                    {section.title && (
                        <p className="text-gray-300 ml-3 text-xs tracking-wide">
                            {section.title}
                        </p>
                    )}

                    {section.items.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={`flex items-center space-x-3 p-3 hover:text-gray-700 mb-2 ${item.active ? "text-egyptian" : "text-gray-300"
                                }`}
                        >
                            {item.icon}
                            <span className={item.active ? "font-medium" : ""}>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
