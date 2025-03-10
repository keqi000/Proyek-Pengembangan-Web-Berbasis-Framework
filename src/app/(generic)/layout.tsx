"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "../_layout/header";

export default function GenericLayout({children}: {children: ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`flex min-h-screen transition-all duration-300 ${
        isSidebarOpen ? "ml-64" : "ml-0"
      }`}
    >
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header />
        {children}
      </div>
    </div>
  );
}
