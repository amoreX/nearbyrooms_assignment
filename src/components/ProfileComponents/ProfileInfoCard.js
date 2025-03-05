import { Briefcase, Building2, Globe, Heart, PenSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProfileInfoCard() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};
	return (
		<Card className="p-6">
			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<Briefcase className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Works at</div>
						<div className="text-gray-600">Not specified</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Building2 className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Lives in</div>
						<div className="text-gray-600">Not specified</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Globe className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Country</div>
						<div className="text-gray-600">Not specified</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Heart className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Relationship</div>
						<div className="text-gray-600">Not specified</div>
					</div>
				</div>
			</div>
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogTrigger asChild>
					<div className="flex items-center justify-center gap-2">
						<Button
							className="bg-accentBlue hover:bg-accentHoverBlue transition-all duration-300 ease-in-out"
							onClick={() => setIsDialogOpen(true)}
						>
							<PenSquare className="w-4 h-4 mr-2" />
							Edit Profile
						</Button>
					</div>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Choose Location</DialogTitle>
						<DialogDescription>
							Search for the location you want to find rooms at.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="Location" className="text-right">
								Address
							</Label>
							<Input
								id="Location"
								type="text"
								placeholder="e.g. Mumbai"
								className="col-span-3 outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							className="bg-accentBlue hover:bg-accentHoverBlue transition-all duration-300 ease-in-out"
							type="submit"
							onClick={handleDialogClose}
						>
							Search
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Card>
	);
}
