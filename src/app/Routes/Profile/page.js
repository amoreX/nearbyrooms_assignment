"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileHeader from "@/components/ProfileComponents/ProfileHeader";
import ProfileInfoCard from "@/components/ProfileComponents/ProfileInfoCard";
import ProfileListings from "@/components/ProfileComponents/ProfileListings";
import ProfileStats from "@/components/ProfileComponents/ProfileStats";

export default function Profile() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 ">
			<ProfileHeader />
			<main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
				<div className="grid gap-6 md:grid-cols-3">
					<div className="md:col-span-2 space-y-6">
						<ProfileInfoCard />
						<ProfileListings />
					</div>
					<div className="hidden md:block space-y-6">
						<ProfileStats />
					</div>
				</div>
			</main>
		</div>
	);
}
