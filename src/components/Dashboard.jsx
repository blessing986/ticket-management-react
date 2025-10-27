import React, { useState, useEffect } from "react";
import {
  LogOut,
  CheckSquare,
  CheckCircle,
  Clock,
  XCircle,
  Ticket,
  Menu,
  X,
} from "lucide-react";
import Footer from "./Footer";

const Dashboard = ({ onNavigate, onLogout, user }) => {
  const [tickets, setTickets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TicketFlow
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                Welcome, {user?.name}
              </span>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 transform text-white cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
            <div className="flex flex-col gap-3 pt-3">
              <span className="text-gray-700 font-medium">
                Welcome, {user?.name}
              </span>
              <button
                onClick={onLogout}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 transform text-white cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Tickets</p>
                <p className="text-3xl font-bold text-gray-800">
                  {stats.total}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckSquare className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Open Tickets</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.open}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">In Progress</p>
                <p className="text-3xl font-bold text-amber-600">
                  {stats.inProgress}
                </p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="text-amber-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <p className="text-3xl font-bold text-gray-600">
                  {stats.closed}
                </p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <XCircle className="text-gray-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Quick Actions
          </h3>
          <button
            onClick={() => onNavigate("tickets")}
            className="w-full md:w-auto px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform font-semibold cursor-pointer"
          >
            Manage Tickets
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
