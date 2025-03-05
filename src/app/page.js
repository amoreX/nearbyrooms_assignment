"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/HomeComponents/Header";
import LocationSelection from "@/components/HomeComponents/LocationSelection";
import FeaturedRooms from "@/components/HomeComponents/FeaturedRooms";

export default function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 pb-16 ">
			<Header />
			<main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
				<LocationSelection />
				<FeaturedRooms />
			</main>
		</div>
	);
}
