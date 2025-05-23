import React from "react";
import { Apple, Facebook, Instagram, Play, Youtube } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="w-full max-w-screen-xl mx-auto text-gray-700 px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Biz haqimizda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Topshirish punktlari
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Foydalanuvchilarga</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Biz bilan bog'lanish
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Savol-javob
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tadbirkorlarga</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Uzumda sotib oling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sotuvchi kabinetiga kirish
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Topshirish punktini ochish
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ilovani yuklab oling</h3>
            <div className="flex flex-wrap items-center gap-4 my-2">
              <a
                href="#"
                className="text-black text-base sm:text-lg flex gap-2 items-center"
              >
                <Apple size={20} /> App Store
              </a>
              <a
                href="#"
                className="text-black text-base sm:text-lg flex gap-2 items-center"
              >
                <Play size={20} /> Google Play
              </a>
            </div>
            <h3 className="text-lg font-bold mt-6 mb-2">Uzum ijtimoiy tarmoqlarda</h3>
            <div className="flex space-x-4 text-xl sm:text-2xl">
              <a href="#" className="hover:text-purple-600">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaTelegramPlane size={25} />
              </a>
              <a href="#" className="hover:text-pink-600">
                <Facebook />
              </a>
              <a href="#" className="hover:text-pink-600">
                <Youtube />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:underline">
              Maxfiylik kelishuvi
            </a>
            <a href="#" className="hover:underline">
              Foydalanuvchi kelishuvi
            </a>
          </div>
          <p className="text-center md:text-left">
            © 2025 XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
