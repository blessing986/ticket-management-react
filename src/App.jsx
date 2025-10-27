import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import TicketManagement from "./components/TicketManagement";
import { getSession, clearSession } from "./utils/auth";

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = getSession();
    if (session) {
      setUser(session.user);
      if (
        currentPage === "landing" ||
        currentPage === "login" ||
        currentPage === "signup"
      ) {
        setCurrentPage("dashboard");
      }
    }
  }, [currentPage]);

  const handleAuth = () => {
    const session = getSession();
    if (session) {
      setUser(session.user);
      setCurrentPage("dashboard");
    }
  };

  const handleLogout = () => {
    clearSession();
    setUser(null);
    setCurrentPage("login");
  };

  const navigate = (page) => {
    const session = getSession();
    if ((page === "dashboard" || page === "tickets") && !session) {
      setCurrentPage("login");
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {currentPage === "landing" && <LandingPage onNavigate={navigate} />}
      {currentPage === "login" && (
        <AuthPage mode="login" onNavigate={navigate} onAuth={handleAuth} />
      )}
      {currentPage === "signup" && (
        <AuthPage mode="signup" onNavigate={navigate} onAuth={handleAuth} />
      )}
      {currentPage === "dashboard" && (
        <Dashboard onNavigate={navigate} onLogout={handleLogout} user={user} />
      )}
      {currentPage === "tickets" && (
        <TicketManagement
          onNavigate={navigate}
          onLogout={handleLogout}
          user={user}
        />
      )}
    </>
  );
}
