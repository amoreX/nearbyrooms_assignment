import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { set } from "zod";

export default function ProfileListings() {
	const [clicked, setClicked] = useState(false);

	return (
		<Collapsible
			onClick={() => {
				setClicked(!clicked);
				if (!clicked) {
					setTimeout(() => {
						document.querySelector("#collapsible-content").scrollIntoView({ behavior: "smooth" });
					}, 300); // match the duration of the transition
				}
			}}
		>
			<Card>
				<CollapsibleTrigger className="flex items-center justify-between w-full p-4 py-2 ">
					<h2 className="text-lg font-semibold">My Listings</h2>
					<ChevronDown
						className={`w-5 h-5 transition-transform ${
							clicked ? "rotate-180" : ""
						} transition-all duration-300 ease-in-out`}
					/>
				</CollapsibleTrigger>
				<CollapsibleContent
					id="collapsible-content"
					className="transition-all duration-300 ease-in-out"
				>
					<div className="px-6 pb-6">
						<div className="text-center py-8 text-gray-500">
							No listings yet. Start by adding your first room!
						</div>
					</div>
				</CollapsibleContent>
			</Card>
		</Collapsible>
	);
}
