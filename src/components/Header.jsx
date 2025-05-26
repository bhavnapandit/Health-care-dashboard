import { Search, Bell, Plus } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-white  px-6 py-4 flex items-center justify-between">
            <div className="flex-1 max-w-md">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-egyptian w-4 h-4" />

                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />

                    <Bell className="absolute right-3 top-1/2 transform -translate-y-1/2 text-egyptian w-4 h-4 cursor-pointer" />
                </div>
            </div>
            <div className="flex items-center space-x-4">

                <div className="flex items-center space-x-3">
                    <img
                        src="/icon.png"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full bg-cyan-400"
                    />
                </div>

                <button className="bg-egyptian text-white p-2 rounded-lg hover:bg-cyan-400">
                    <Plus className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default Header;
