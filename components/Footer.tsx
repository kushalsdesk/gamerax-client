import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-white/5">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Press
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-4">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-4">
            Legal
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider mb-4">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-gray-400">
          &copy; 2024 GameVault. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
