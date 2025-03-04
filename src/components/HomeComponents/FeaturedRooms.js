import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
export default function FeaturedRooms({
  selectedFilters,
  toggleFilter,
  isFilterSelected,
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div className="hidden md:block w-2/3"
    initial={{opacity:0,x:400}}
    animate={{opacity:1,x:0}}
    transition={{type:"tween",ease:"easeOut",duration:0.38,delay:0.4}}
    >
      <Card className="p-6 h-full">
        <div className="flex flex-col h-full">
          {/* Quick Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Quick Filters</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Studio",
                "1 Bedroom",
                "2+ Bedrooms",
                "< $1000/mo",
                "$1000-$2000/mo",
                "Pet Friendly",
                "Furnished",
                "Utilities Included",
              ].map((filter) => (
                <Button
                  key={filter}
                  variant={isFilterSelected(filter) ? "solid" : "outline"}
                  size="sm"
                  className={`rounded-full ${
                    isFilterSelected(filter) ? "bg-accentBlue text-white" : ""
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                  {isFilterSelected(filter) && <span className="ml-2">✕</span>}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Rooms */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Featured Rooms</h3>
              <Button variant="ghost" size="sm" className="text-accentBlue">
                View All
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-y-auto max-h-[calc(100vh-300px)]">
              {/* Empty state for featured rooms */}
              <div className="col-span-full flex flex-col items-center justify-center text-center p-8 bg-gray-100 rounded-lg">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <MapPin className="h-6 w-6 text-accentBlue" />
                </div>
                <h4 className="text-lg font-medium text-gray-800">
                  No Featured Rooms
                </h4>
                <p className="text-gray-600 mt-2">
                  Select a location to see available rooms in that area
                </p>
              </div>

              {/* These would be populated when a location is selected */}
              {/* Sample room cards that would appear after location selection */}
              <div className="hidden border rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-3">
                  <div className="font-medium">Cozy Downtown Studio</div>
                  <div className="text-sm text-gray-500">
                    Downtown • $1,200/mo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Viewed */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-3">Recently Viewed</h3>
            <p className="text-gray-500 text-sm">
              Your recently viewed rooms will appear here
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
