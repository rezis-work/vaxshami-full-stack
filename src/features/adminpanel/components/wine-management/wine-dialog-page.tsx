"use client";

import React, { useState, useEffect } from "react";
import WineForm from "./ui/wine-form";
import WineList from "./ui/wine-list";
import { Wine, WineFormData } from "@/types/wineTypes";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MockWineRepository } from "./data/wine-repository";
import { WineServiceImpl } from "./domain/wine-service";

export default function WineDialogPage() {
  // Wine management state
  const [wines, setWines] = useState<Wine[]>([]);
  const [activeWine, setActiveWine] = useState<Wine | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Load wines on component mount
  useEffect(() => {
    const loadWines = async () => {
      try {
        // Initialize wine service inside useEffect to avoid dependency issues
        const repository = new MockWineRepository();
        const wineService = new WineServiceImpl(repository);
        const loadedWines = await wineService.getWines();
        setWines(loadedWines);
      } catch (error) {
        console.error("Failed to load wines:", error);
      }
    };
    loadWines();
  }, []); // Empty dependency array - only run once on mount

  // Clear activeWine when dialog closes
  useEffect(() => {
    if (!isDialogOpen) {
      setActiveWine(null);
    }
  }, [isDialogOpen]);

  const handleEditWine = (wine: Wine) => {
    setActiveWine(wine);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = async (wineData: WineFormData) => {
    try {
      // Initialize wine service for this operation
      const repository = new MockWineRepository();
      const wineService = new WineServiceImpl(repository);
      
      if (activeWine) {
        // Update existing wine
        const updatedWine = await wineService.updateWine(activeWine.id, wineData);
        setWines((prev) =>
          prev.map((wine) =>
            wine.id === activeWine.id ? updatedWine : wine
          )
        );
      } else {
        // Add new wine
        const newWine = await wineService.addWine(wineData);
        setWines((prev) => [...prev, newWine]);
      }
      setActiveWine(null);
    } catch (error) {
      console.error("Failed to save wine:", error);
    }
  };

  const handleDeleteWine = async (id: string) => {
    if (confirm("ნამდვილად გსურთ ღვინის წაშლა?")) {
      try {
        // Initialize wine service for this operation
        const repository = new MockWineRepository();
        const wineService = new WineServiceImpl(repository);
        await wineService.deleteWine(id);
        setWines((prev) => prev.filter((wine) => wine.id !== id));
      } catch (error) {
        console.error("Failed to delete wine:", error);
      }
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={() => setActiveWine(null)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">ახალი ღვინო</span>
              <span className="sm:hidden">ახალი</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl mx-4">
            <DialogTitle className="sr-only">
              {activeWine ? "ღვინის შესწორება" : "ახალი ღვინო"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {activeWine ? "შეცვალეთ ღვინის მონაცემები" : "შეიყვანეთ ახალი ღვინის მონაცემები"}
            </DialogDescription>
            <WineForm
              onSubmit={(data: WineFormData) => {
                handleFormSubmit(data);
                setIsDialogOpen(false);
                setActiveWine(null);
              }}
              onCancel={() => {
                setIsDialogOpen(false);
                setActiveWine(null);
              }}
              initialData={activeWine ? {
                name: activeWine.name,
                year: activeWine.year,
                price: activeWine.price,
                type: activeWine.type,
              } : undefined}
              isEditing={!!activeWine}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Wine List Section */}
      <WineList
        wines={wines}
        onEditWine={handleEditWine}
        onDeleteWine={handleDeleteWine}
      />
    </div>
  );
}
