import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1D2C] text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div>
          <h2 className="text-2xl font-semibold text-white">CoderBro</h2>

          
          <div className="flex items-center gap-5 mt-6 text-gray-400">
            <FaFacebookF className="text-xl cursor-pointer hover:text-white duration-200" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-white duration-200" />
            <FaYoutube className="text-xl cursor-pointer hover:text-white duration-200" />
            <FaInstagram className="text-xl cursor-pointer hover:text-white duration-200" />
          </div>
        </div>

        <div className="space-y-4 text-white">
          <h3 className="font-semibold text-lg">Quick Links</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="cursor-pointer hover:text-white duration-200">Courses</li>
            <li className="cursor-pointer hover:text-white duration-200">Blogs</li>
            <li className="cursor-pointer hover:text-white duration-200">About Us</li>
            <li className="cursor-pointer hover:text-white duration-200">Careers</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
