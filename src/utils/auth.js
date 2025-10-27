export const getSession = () => {
  const session = localStorage.getItem("ticketapp_session");
  return session ? JSON.parse(session) : null;
};

export const setSession = (token, user) => {
  localStorage.setItem("ticketapp_session", JSON.stringify({ token, user }));
};

export const clearSession = () => {
  localStorage.removeItem("ticketapp_session");
};

export const isAuthenticated = () => {
  return !!getSession();
};
