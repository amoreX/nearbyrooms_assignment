import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.header className="bg-white border-b sticky top-0 z-10"
    initial={{y:-100}}
    animate={{y:0}}
    transition={{type:"tween",ease:"easeOut",duration:0.38,delay:0}}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Nearby Rooms</h1>
        <div className="flex items-center gap-4">
          <Input type="text" className=" text-black focus:border-black" placeholder="Search.." />
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
