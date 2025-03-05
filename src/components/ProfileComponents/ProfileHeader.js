"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProfileHeader({ name }) {
	const [profileName, setProfileName] = useState(name);
	const [avatar, setAvatar] = useState("");

	useEffect(() => {
		setProfileName(name);
		const avatar = name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
		setAvatar(avatar);
	}, [name]);

	return (
		<div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white flex justify-center items-center p-10">
			<div className="flex flex-col items-center md:flex-row md:items-end md:space-x-6">
				<div className="relative mb-4 md:mb-0 ">
					<Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white">
						{/* <AvatarImage src="/placeholder.svg" /> */}
						<AvatarFallback className="text-accentBlue scale-200">{avatar}</AvatarFallback>
					</Avatar>
					<CheckCircle2 className="absolute bottom-0 right-0 w-6 h-6 text-blue-500 bg-white rounded-full" />
				</div>
				<div className="text-center md:text-left flex-1">
					<h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>
					<div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
						<Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
							🏠 Room enthusiast
						</Badge>
						<Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
							🌆 City explorer
						</Badge>
					</div>
				</div>
				<div className=" md:flex items-center gap-2">
					<Button
						variant="secondary"
						size="sm"
						className="bg-white/20 hover:bg-white/30 cursor-pointer"
					>
						<LogOut className="w-4 h-4 " />
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
}
