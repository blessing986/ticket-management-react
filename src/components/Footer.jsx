import { Ticket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 py-12 md:px-12 border-t border-gray-200 bg-white">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-linear-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TicketFlow
            </span>
          </div>
          <p className="text-gray-600">
            Streamline your support workflow with powerful ticket management.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>&copy; 2025 TicketFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
