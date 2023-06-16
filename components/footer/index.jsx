import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold text-gray-900 cursor-pointer">
              Keyboard<span className="text-cyan">r</span>
            </a>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/privacy-policy" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms-of-service" legacyBehavior>
            <a className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              Terms of Service
            </a>
          </Link>
          <div className="flex space-x-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <AiOutlineGithub size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              <GrLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
