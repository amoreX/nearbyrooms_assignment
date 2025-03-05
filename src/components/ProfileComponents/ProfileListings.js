import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function ProfileListings() {
	return (
		<Collapsible>
			<Card>
				<CollapsibleTrigger className="flex items-center justify-between w-full p-4 py-2">
					<h2 className="text-lg font-semibold">My Listings</h2>
					<ChevronDown className="w-5 h-5" />
				</CollapsibleTrigger>
				<CollapsibleContent>
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
