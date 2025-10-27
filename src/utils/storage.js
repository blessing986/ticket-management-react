export const getTickets = () => {
  const stored = localStorage.getItem("tickets");
  return stored ? JSON.parse(stored) : [];
};

export const saveTickets = (tickets) => {
  localStorage.setItem("tickets", JSON.stringify(tickets));
};

export const addTicket = (ticket) => {
  const tickets = getTickets();
  const newTicket = { ...ticket, id: Date.now() };
  const updated = [...tickets, newTicket];
  saveTickets(updated);
  return newTicket;
};

export const updateTicket = (id, updates) => {
  const tickets = getTickets();
  const updated = tickets.map((t) => (t.id === id ? { ...t, ...updates } : t));
  saveTickets(updated);
};

export const deleteTicket = (id) => {
  const tickets = getTickets();
  const updated = tickets.filter((t) => t.id !== id);
  saveTickets(updated);
};
