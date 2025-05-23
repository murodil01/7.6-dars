import React from "react";
import {
  MapPin,
  ChevronDown,
  Rows4,
  User,
  Heart,
  ShoppingCart,
  Search,
} from "lucide-react";
import { Input } from "antd";
import logo from "../assets/logo.png";

const { Search: SearchInput } = Input;

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="bg-gray-100 text-sm text-gray-700 flex justify-center">
        <div className="w-full max-w-screen-xl mx-auto py-2 flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 gap-3">
          <div className="flex flex-wrap gap-4 items-center">
            <a className="flex gap-1 items-center cursor-pointer hover:text-blue-600 text-[14px] whitespace-nowrap">
              <MapPin size={16} />
              Toshkent
              <ChevronDown size={16} />
            </a>
            <a href="#" className="hover:text-blue-600 text-[14px] whitespace-nowrap">
              Topshirish punktlari
            </a>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#"
              className="text-[14px] text-blue-500 hover:text-blue-700 border-r-2 pr-2 border-b-gray-600 whitespace-nowrap"
            >
              Sotuvchi bo'lish
            </a>
            <a
              href="#"
              className="text-[14px] text-blue-500 hover:text-blue-700 border-r-2 pr-2 border-b-gray-600 whitespace-nowrap"
            >
              Topshirish punktini ochish
            </a>
            <a href="#" className="text-[14px] hover:text-blue-600 whitespace-nowrap">
              Savol-javob
            </a>
            <a href="#" className="text-[14px] hover:text-blue-600 whitespace-nowrap">
              Buyurtmalarim
            </a>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none whitespace-nowrap">
              <option value="uz">O'zbekcha</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-4 bg-white ">
        <div className="w-full max-w-screen-xl mx-auto flex flex-wrap items-center gap-6 px-4 sm:px-6 lg:px-8">
          <img
            src={logo}
            alt="logo"
            className="w-[145px] h-[45px] object-contain flex-shrink-0"
          />

          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-[16px] rounded-lg text-fuchsia-900 hover:bg-gray-300 transition-all whitespace-nowrap">
            <Rows4 />
            Katalog
          </button>

          <div className="flex-1 min-w-[200px]">
            <SearchInput
              placeholder="Mahsulotlar va turkumlar izlash"
              enterButton={<Search size={20} />}
              className="w-full"
              size="large"
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center whitespace-nowrap">
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <User size={20} />
              Kirish
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <Heart size={20} />
              Saralangan
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <ShoppingCart size={20} />
              Savat
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <ul className="flex flex-nowrap items-center gap-6 text-sm text-gray-700 font-medium whitespace-nowrap">
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Hafta tovarlari
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Elektronika
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Maishiy texnika
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Kiyim
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Poyabzallar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Aksesuarlar
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Go'zallik va parvarish
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Salomatlik
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Uy ro'zg'or buyumlari
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Qurilish va tamirlash
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
            >
              Yana <ChevronDown size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
