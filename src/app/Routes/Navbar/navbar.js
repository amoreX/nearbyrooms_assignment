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
    <nav className="bg-white border-t py-3 fixed bottom-0 w-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            layout
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.2 }}
            className="flex-1"
          >
            <Link href="/" className={`flex flex-col items-center w-full ${dir == "home" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("home")}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} className="flex flex-col items-center w-full">
                <Home className="h-6 w-6" />
                <span className="text-xs mt-1">Home</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.4 }}
            className="flex-1"
          >
            <Link href="/Routes/Post" className={`flex flex-col items-center w-full ${dir == "post" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("post")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center w-full">
                <PlusCircle className="h-6 w-6" />
                <span className="text-xs mt-1">Add Post</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay: 0.6 }}
            className="flex-1"
          >
            <Link href="/Routes/Chat" className={`flex flex-col items-center w-full ${dir == "chat" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("chat")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center w-full">
                <MessageCircle className="h-6 w-6" />
                <span className="text-xs mt-1">Chat</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            layout
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.38, delay:0.8 }}
            className="flex-1"
          >
            <Link href="/Routes/Profile" className={`flex flex-col items-center w-full ${dir == "profile" ? "text-accentBlue" : "text-grey-100"}`} onClick={() => setDir("profile")}>
              <motion.div whileHover={{ scale:1.05 }} whileTap={{ scale:1 }} className="flex flex-col items-center w-full">
                <User className="h-6 w-6" />
                <span className="text-xs mt-1">Profile</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
