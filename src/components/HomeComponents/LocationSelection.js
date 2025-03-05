"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function LocationSelection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full md:w-1/3">
      <Card className="p-6 h-full flex flex-col gap-4 ">
        <div className="mt-4 flex-1 flex flex-col items-center justify-center text-center gap-2">
          <div className="bg-blue-500 rounded-full p-6 inline-flex mb-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            No Posts Found Nearby
          </h2>
          <p className="text-gray-600 mt-2 max-w-md">
            Let's find you the perfect space! Select a location to discover
            rooms within your preferred radius.
          </p>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div className="flex items-center gap-2">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <MapPin className="h-5 w-5" />
                  Choose Location
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
        </div>
        <div className="mt-6 text-blue-400 flex items-center justify-center gap-2">
          <span className="text-gray-400">
            Tip: Use the map to explore different areas
          </span>
        </div>
      </Card>
    </div>
  );
}
