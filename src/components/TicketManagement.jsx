import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, LogOut, Ticket } from "lucide-react";
import Toast from "./Toast";
import Footer from "./Footer";

const TicketManagement = ({ onNavigate, onLogout }) => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "open",
    priority: "medium",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  const saveTickets = (newTickets) => {
    setTickets(newTickets);
    localStorage.setItem("tickets", JSON.stringify(newTickets));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title || formData.title.trim() === "") {
      newErrors.title = "Title is required";
    }
    if (!formData.status) {
      newErrors.status = "Status is required";
    }
    if (!["open", "in_progress", "closed"].includes(formData.status)) {
      newErrors.status = "Status must be open, in_progress, or closed";
    }
    if (formData.description && formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setToast({
        message: "Please fix the errors in the form",
        type: "error",
      });
      return;
    }

    if (editingTicket) {
      const updated = tickets.map((t) =>
        t.id === editingTicket.id ? { ...formData, id: t.id } : t
      );
      saveTickets(updated);
      setToast({ message: "Ticket updated successfully!", type: "success" });
    } else {
      const newTicket = { ...formData, id: Date.now() };
      saveTickets([...tickets, newTicket]);
      setToast({ message: "Ticket created successfully!", type: "success" });
    }

    setFormData({
      title: "",
      description: "",
      status: "open",
      priority: "medium",
    });
    setEditingTicket(null);
    setShowForm(false);
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setFormData(ticket);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updated = tickets.filter((t) => t.id !== id);
    saveTickets(updated);
    setToast({ message: "Ticket deleted successfully!", type: "success" });
    setDeleteConfirm(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-700";
      case "in_progress":
        return "bg-amber-100 text-amber-700";
      case "closed":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status) => {
    return status === "in_progress"
      ? "In Progress"
      : status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50">
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}

      <nav className="bg-white shadow-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-linear-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TicketFlow
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate("dashboard")}
                className="px-3 py-2 md:px-6 text-sm md:text-base text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Dashboard
              </button>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 hover:scale-105 transform font-semibold cursor-pointer"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Ticket Management
          </h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingTicket(null);
              setFormData({
                title: "",
                description: "",
                status: "open",
                priority: "medium",
              });
            }}
            className="flex items-center gap-2 w-full md:w-auto px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform font-semibold cursor-pointer"
          >
            <Plus size={20} />
            Create Ticket
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              {editingTicket ? "Edit Ticket" : "Create New Ticket"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  {errors.status && (
                    <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform font-semibold cursor-pointer"
                >
                  {editingTicket ? "Update Ticket" : "Create Ticket"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingTicket(null);
                    setFormData({
                      title: "",
                      description: "",
                      status: "open",
                      priority: "medium",
                    });
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {tickets.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">
              No tickets yet. Create your first ticket to get started!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-800 flex-1">
                    {ticket.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {getStatusLabel(ticket.status)}
                  </span>
                </div>

                {ticket.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {ticket.description}
                  </p>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-500">
                    Priority: {ticket.priority}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(ticket)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 cursor-pointer"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(ticket.id)}
                      className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this ticket? This action cannot be
              undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 transform"
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TicketManagement;
