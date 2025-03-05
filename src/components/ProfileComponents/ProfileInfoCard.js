import { Briefcase, Building2, Globe, Heart, PenSquare, LogOut } from "lucide-react";
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
import { useState, useContext } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ProfileContext } from "@/app/Routes/Profile/page";

export default function ProfileInfoCard() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [relationship, setRelationship] = useState("Not specified");
	const { setName } = useContext(ProfileContext);

	const [userDetails, setUserDetails] = useState({
		worksAt: "Not specified",
		livesIn: "Not specified",
		country: "Not specified",
	});

	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	const handleDialogSubmit = () => {
		const name = document.getElementById("Name").value;
		const workAt = document.getElementById("WorkAt").value;
		const livesIn = document.getElementById("LivesIn").value;
		const country = document.getElementById("Country").value;

		setUserDetails((prevDetails) => ({
			worksAt: workAt || prevDetails.worksAt,
			livesIn: livesIn || prevDetails.livesIn,
			country: country || prevDetails.country,
		}));

		if (name) {
			setName(name);
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

			{/* Edit Profile Dialog + LOgout */}

			<div className="flex justify-center items-center gap-2">
				<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
					<DialogTrigger asChild>
						<div className="flex items-center justify-center gap-2">
							<Button
								className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
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
							<DialogDescription />
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="Name" className="text-right">
									Name
								</Label>
								<Input
									id="Name"
									type="text"
									placeholder="e.g. John Doe"
									className="col-span-3 outline-none border border-black rounded-md p-2 hover:outline-none focus:outline-none"
								/>
							</div>
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

				<Button
					variant="secondary"
					className="bg-blue-500 text-white   hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer"
				>
					<LogOut className="w-4 h-4 " />
					Logout
				</Button>
			</div>
		</Card>
	);
}
