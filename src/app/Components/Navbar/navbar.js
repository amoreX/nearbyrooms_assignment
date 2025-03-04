"use client"

import Link from "next/link";
import { Search, MapPin, Home, PlusCircle, MessageCircle, User, LightbulbIcon, Framer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react";
// import {motion} from "framer-motion";

export default function Navbar() {

    const [dir,setDir]=useState("home");

  return (

    <nav className="bg-white border-t py-3 fixed bottom-0 w-screen ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center" >
          <Button
            variant="ghost"
          >
            <Link href="/" className={`flex flex-col items-center ${dir=="home"?"text-accentBlue":"text-grey-100"}`} onClick={()=>setDir("home")}>
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
            </Link>
          </Button>

          <Button variant="ghost" >
          <Link href="/Components/Post" className={`flex flex-col items-center ${dir=="post"?"text-accentBlue":"text-grey-100"}`} onClick={()=>setDir("post")}>
            <PlusCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Add Post</span>
            </Link>
          </Button>

          <Button variant="ghost" >
            <Link href="/Components/Chat" className={`flex flex-col items-center ${dir=="chat"?"text-accentBlue":"text-grey-100"}`} onClick={()=>setDir("chat")} >
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
            </Link>
          </Button>

          <Button variant="ghost" >
            <Link href="/Components/Profile" className={`flex flex-col items-center ${dir=="profile"?"text-accentBlue":"text-grey-100"}`} onClick={()=>setDir("profile")}>
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
