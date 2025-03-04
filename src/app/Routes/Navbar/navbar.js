"use client"

import Link from "next/link";
import { Search, MapPin, Home, PlusCircle, MessageCircle, User, LightbulbIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dir, setDir] = useState("home");

  return (
    <motion.nav className="bg-white border-t py-3 fixed bottom-0 w-screen"
    initial={{y:100}}
    animate={{y:0}}
    transition={{type:"tween",ease:"easeOut",duration:0.38,delay:0}}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            layout
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.2 }}
          >
            <Link href="/" className={`flex flex-col items-center ${dir == "home" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("home")}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} className="flex flex-col items-center">
                <Home className="h-6 w-6" />
                <span className="text-xs mt-1">Home</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.4 }}
          >
            <Link href="/Routes/Post" className={`flex flex-col items-center ${dir == "post" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("post")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center">
                <PlusCircle className="h-6 w-6" />
                <span className="text-xs mt-1">Add Post</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.6 }}
          >
            <Link href="/Routes/Chat" className={`flex flex-col items-center ${dir == "chat" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("chat")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center">
                <MessageCircle className="h-6 w-6" />
                <span className="text-xs mt-1">Chat</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.8 }}
          >
            <Link href="/Routes/Profile" className={`flex flex-col items-center ${dir == "profile" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("profile")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center">
                <User className="h-6 w-6" />
                <span className="text-xs mt-1">Profile</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
