"use client";

import React from "react";
import {
  Home,
  User,
  BookOpen,
  GraduationCap,
  Briefcase,
  Coffee,
  FileText,
  MessageSquare,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

// 🛠 Definisikan interface untuk props Sidebar
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { name: "Beranda", icon: <Home size={20} />, link: "/", active: true },
  { name: "Biodata", icon: <User size={20} />, link: "/biodata" },
  { name: "Perkuliahan", icon: <BookOpen size={20} />, link: "/perkuliahan" },
  {
    name: "E-Learning Unsrat",
    icon: <GraduationCap size={20} />,
    link: "/elearning",
  },
  {
    name: "Kemahasiswaan",
    icon: <ShieldCheck size={20} />,
    link: "/kemahasiswaan",
  },
  { name: "KKT", icon: <Briefcase size={20} />, link: "/kkt" },
  {
    name: "PKM Penelitian Mahasiswa",
    icon: <FileText size={20} />,
    link: "/pkm",
  },
  {
    name: "Bimbingan Akademik",
    icon: <MessageSquare size={20} />,
    link: "/bimbingan",
  },
  {
    name: "Praktik Lapangan/Magang",
    icon: <Briefcase size={20} />,
    link: "/magang",
  },
  { name: "Skripsi / Tesis", icon: <FileText size={20} />, link: "/skripsi" },
  {
    name: "Mahasiswa Kewirausahaan",
    icon: <Coffee size={20} />,
    link: "/kewirausahaan",
  },
];

// 🛠 Tambahkan tipe props di parameter fungsi Sidebar
export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div className="relative transition-all duration-300">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header Sidebar */}
        <div className="bg-red-600 text-white py-4 px-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">INSPIRE</h1>
        </div>

        {/* Menu */}
        <nav className="mt-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`flex items-center gap-3 p-3 mx-2 rounded-md transition ${
                    item.active
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Tombol Hamburger */}
      <button
        className={`fixed top-4 left-3 z-50 bg-red-600 text-white p-2 rounded-md shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-64" : "translate-x-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
