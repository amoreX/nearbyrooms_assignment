"use client";
import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/HomeComponents/Header";
import LocationSelection from "@/components/HomeComponents/LocationSelection";
import FeaturedRooms from "@/components/HomeComponents/FeaturedRooms";

export default function HomePage() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const isFilterSelected = (filter) => selectedFilters.includes(filter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-16 ">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        <LocationSelection />
        <FeaturedRooms
          selectedFilters={selectedFilters}
          toggleFilter={toggleFilter}
          isFilterSelected={isFilterSelected}
        />
      </main>
    </div>
  );
}
