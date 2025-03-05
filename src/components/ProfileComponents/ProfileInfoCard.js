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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function ProfileInfoCard() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [relationship, setRelationship] = useState("Not specified");
	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	const [userDetails, setUserDetails] = useState({
		worksAt: "Not specified",
		livesIn: "Not specified",
		country: "Not specified",
	});

	const handleDialogSubmit = () => {
		const workAt = document.getElementById("WorkAt").value;
		const livesIn = document.getElementById("LivesIn").value;
		const country = document.getElementById("Country").value;

		if (workAt && livesIn && country) {
			setUserDetails({
				worksAt: workAt || "Not specified",
				livesIn: livesIn || "Not specified",
				country: country || "Not specified",
			});
		}

		handleDialogClose();
	};

	return (
		<Card className="p-6">
			{/* Profile Info  */}
			<div className="space-y-6">
				<div className="flex items-center gap-3">
					<Briefcase className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Works at</div>
						<div className="text-gray-600">{userDetails.worksAt}</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Building2 className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Lives in</div>
						<div className="text-gray-600">{userDetails.livesIn}</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Globe className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Country</div>
						<div className="text-gray-600">{userDetails.country}</div>
					</div>
				</div>
				<div className="flex items-center gap-3">
					<Heart className="w-5 h-5 text-blue-500" />
					<div>
						<div className="text-sm text-gray-500">Relationship</div>
						<div className="text-gray-600">{relationship}</div>
					</div>
				</div>
			</div>

			{/* Edit Profile Dialog */}

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
						<DialogTitle>Edit your profile</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="WorkAt" className="text-right">
								Works at
							</Label>
							<Input
								id="WorkAt"
								type="text"
								placeholder="e.g. Pune"
								className="col-span-3 outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="LivesIn" className="text-right">
								Lives in
							</Label>
							<Input
								id="LivesIn"
								type="text"
								placeholder="e.g. Chandigarh"
								className="col-span-3 outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="Country" className="text-right">
								Country
							</Label>
							<Input
								id="Country"
								type="text"
								placeholder="e.g. India"
								className="col-span-3 outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="Relationship" className="text-right">
								Relationship
							</Label>
							<Select
								id="Relationship"
								className="col-span-3"
								onValueChange={(value) => setRelationship(value)}
							>
								<SelectTrigger className="outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none">
									<SelectValue placeholder="Select relationship status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Single">Single</SelectItem>
									<SelectItem value="In a relationship">In a relationship</SelectItem>
									<SelectItem value="Married">Married</SelectItem>
									<SelectItem value="Divorced">Divorced</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter>
						<Button
							className="bg-accentBlue hover:bg-accentHoverBlue transition-all duration-300 ease-in-out"
							type="submit"
							onClick={handleDialogSubmit}
						>
							Update
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Card>
	);
}
