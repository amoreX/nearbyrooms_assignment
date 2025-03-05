import { Card } from "@/components/ui/card";

export default function ProfileStats() {
	return (
		<Card className="p-6">
			<h2 className="font-semibold mb-4">Quick Stats</h2>
			<div className="space-y-4">
				<div>
					<div className="text-sm text-gray-500">Total Listings</div>
					<div className="text-2xl font-semibold">0</div>
				</div>
				<div>
					<div className="text-sm text-gray-500">Profile Views</div>
					<div className="text-2xl font-semibold">0</div>
				</div>
				<div>
					<div className="text-sm text-gray-500">Member Since</div>
					<div className="text-gray-600">February 2025</div>
				</div>
			</div>
		</Card>
	);
}
