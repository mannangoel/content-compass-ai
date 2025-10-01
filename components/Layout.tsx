'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, History } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  action?: () => void;
}

// Define actions for each navigation item
const navActions = {
  home: () => {
    window.location.href = '/';
  },
  history: () => {
    window.location.href = '/history';
  }
};

const navItems: NavItem[] = [
  { id: 0, icon: <Home size={24} />, label: "Home", action: navActions.home },
  { id: 1, icon: <History size={24} />, label: "History", action: navActions.history }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
      <main className="p-8">
        {children}
      </main>
      
      {/* Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="relative flex items-center justify-center gap-6 bg-white/20 dark:bg-black/20 backdrop-blur-2xl rounded-full px-6 py-3 shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <motion.div
            layoutId="active-indicator"
            className="absolute w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl -z-10"
            animate={{
              left: `calc(${active * (100 / navItems.length)}% + ${100 / navItems.length / 2}%)`,
              translateX: "-50%",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />

          {navItems.map((item, index) => {
            const isActive = index === active;
            return (
              <motion.div key={item.id} className="relative flex flex-col items-center group">
                <motion.button
                  onClick={() => {
                    setActive(index);
                    if (item.action) item.action();
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{ scale: isActive ? 1.4 : 1 }}
                  className="flex items-center justify-center w-14 h-14 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 relative z-10"
                >
                  {item.icon}
                </motion.button>

                <span className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-500 text-white dark:bg-gray-200 dark:text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}