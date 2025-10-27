import { Ticket, CheckCircle, ArrowRight, Clock } from "lucide-react";
import Footer from "./Footer";

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Main Container with max-width */}
      <div className="max-w-[1440px] mx-auto">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 py-4 md:px-12 md:py-6">
          <div className="flex items-center gap-2">
            <div className="bg-linear-to-br from-blue-600 to-purple-600 p-1.5 md:p-2 rounded-lg">
              <Ticket className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </span>
          </div>
          <div className="flex gap-2 md:gap-3">
            <button
              className="px-3 py-2 md:px-6 text-sm md:text-base text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => onNavigate("login")}
            >
              Login
            </button>
            <button
              className="px-3 py-2 md:px-6 text-sm md:text-base bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform cursor-pointer"
              onClick={() => onNavigate("signup")}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section with Wavy Background */}
        <section className="relative px-6 py-20 md:px-12 md:py-32 overflow-hidden">
          {/* Wavy Background */}
          <div className="absolute inset-0 z-0">
            <svg
              className="absolute bottom-0 w-full h-64 md:h-96"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="url(#gradient)"
                fillOpacity="0.3"
                d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Decorative Circle */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-linear-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 left-10 w-48 h-48 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-600 font-semibold text-sm">
                🎫 Next-Gen Ticket Management
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Streamline Your
              </span>
              <br />
              <span className="text-gray-800">Support Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Manage, track, and resolve customer tickets with lightning speed.
              Transform chaos into clarity with TicketFlow.
            </p>
            <div className="flex justify-center items-center">
              <button
                className="group px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 transform flex items-center gap-2 cursor-pointer"
                onClick={() => onNavigate("signup")}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional customer support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Complete Control",
                description:
                  "Full CRUD operations with powerful filtering and search capabilities for maximum productivity.",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: <Ticket className="w-8 h-8" />,
                title: "Easy Management",
                description:
                  "Create, edit, and track tickets with our intuitive interface. Everything you need in one place.",
                color: "from-indigo-400 to-purple-500",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Real-time Updates",
                description:
                  "Stay informed with instant notifications and live status updates on all your tickets.",
                color: "from-red-400 to-rose-500",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
              >
                <div
                  className={`inline-block p-3 bg-linear-to-br ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
