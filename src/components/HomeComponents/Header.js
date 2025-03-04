import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [active, isActive] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus();
    }
  }, [active]);

  return (
    <header className="bg-white border-b sticky top-0 z-10 h-16">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between h-full">
        <h1 className={`text-2xl font-bold whitespace-nowrap transition-transform duration-300 ${active ? 'transform scale-75 md:scale-100' : ''}`}>
          Nearby Rooms
        </h1>
        <div className="flex items-center gap-4 ml-auto">
          <AnimatePresence>
            {active && (
              <motion.input
                ref={inputRef}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 150, opacity: 1 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
                exit={{ width: 0, opacity: 0 }}
                type="text"
                className="text-black border-black border-1 rounded-md focus:border-black px-2 py-0.5 w-30"
                placeholder="Search.."
              />
            )}
          </AnimatePresence>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full scale-150 cursor-pointer"
            onClick={() => isActive(!active)}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
