import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t w-screen ">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">HedgeStake</h3>
            <p className="text-sm text-muted-foreground">
              Advanced betting calculators for strategic wagers.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-muted text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HedgeStake. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ by Mokshith S</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
