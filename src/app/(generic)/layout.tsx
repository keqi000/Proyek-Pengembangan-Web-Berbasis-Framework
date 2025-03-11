"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "../_layout/header";
import { cn } from "@/lib/utils";

export default function GenericLayout({children}: {children: ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={cn(
        `ml-0 flex min-h-screen transition-all duration-300`, 
        {"ml-64" : isSidebarOpen}
      )}
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
