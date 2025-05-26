import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

function App() {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right section: Header on top, then DashboardMainContent */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}


export default App;

