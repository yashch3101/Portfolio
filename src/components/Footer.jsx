    import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

    const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-10">
        <h2 className="text-2xl font-bold">
            Ready to take <span className="text-purple-400">your</span> digital presence to the next level?
        </h2>
        <p className="mt-2 text-gray-400">
            Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        {/* Centered Button */}
        <div className="flex justify-center mt-6">
            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            Let's get in touch <span>👉</span>
            </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/yashch3101" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="hover:text-gray-400 transition" />
            </a>
            <a href="https://x.com/Yash3129" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} className="hover:text-gray-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/yashchaurasia2910" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="hover:text-gray-400 transition" />
            </a>
        </div>

        {/* Footer Copyright */}
        <p className="mt-6 text-gray-500">Copyright © 2025 Yash</p>
        <div className="mt-2">
            <a href="mailto:contact@jsmastery.pro" className="px-4 py-2 bg-gray-800 rounded-lg inline-flex items-center">
            📧 chaurasiayash2910@gmail.com
            </a>
        </div>
        </footer>
    );
    };

    export default Footer;
