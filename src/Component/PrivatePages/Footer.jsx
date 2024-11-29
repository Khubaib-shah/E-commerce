import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Old Money. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com/khubaib_baacha"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/Khubaib-shah"
            className="hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://facebook.com/khubaib2004.1978"
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com/in/khubaib-baacha-30a5132b0"
            className="hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-xs text-gray-400">
          <p>
            Made with 💙 by{" "}
            <a
              href="https://linkedin.com/in/khubaib-baacha-30a5132b0"
              target="_blank"
            >
              Khubaib Shah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
