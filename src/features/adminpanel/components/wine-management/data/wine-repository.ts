import { Wine, WineFormData } from "@/types/wineTypes";
import { WineRepository } from "../domain/wine-service";

// Mock data for initial wines
const initialWines: Wine[] = [
  {
    id: "1",
    name: "ქართული ღვინო",
    year: 2020,
    price: 25.50,
    type: "Red",
  },
  {
    id: "2",
    name: "ჩხავერი",
    year: 2019,
    price: 35.00,
    type: "White",
  },
  {
    id: "3",
    name: "რქაცითელი",
    year: 2021,
    price: 28.00,
    type: "White",
  },
  {
    id: "4",
    name: "საფერავი",
    year: 2018,
    price: 42.50,
    type: "Red",
  },
  {
    id: "5",
    name: "მუკუზანი",
    year: 2020,
    price: 38.00,
    type: "Red",
  },
  {
    id: "6",
    name: "ცოლიკაური",
    year: 2019,
    price: 32.00,
    type: "White",
  },
  {
    id: "7",
    name: "ოჯალეში",
    year: 2017,
    price: 45.00,
    type: "Red",
  },
  {
    id: "8",
    name: "ქინძმარაული",
    year: 2021,
    price: 29.50,
    type: "White",
  },
];

export class MockWineRepository implements WineRepository {
  private wines: Wine[] = [...initialWines];

  async getAll(): Promise<Wine[]> {
    return Promise.resolve([...this.wines]);
  }

  async create(wineData: WineFormData): Promise<Wine> {
    const newWine: Wine = {
      id: Date.now().toString(),
      ...wineData,
    };
    this.wines.push(newWine);
    return Promise.resolve(newWine);
  }

  async update(id: string, wineData: WineFormData): Promise<Wine> {
    const index = this.wines.findIndex(wine => wine.id === id);
    if (index === -1) {
      throw new Error(`Wine with id ${id} not found`);
    }
    
    const updatedWine = { ...this.wines[index], ...wineData };
    this.wines[index] = updatedWine;
    return Promise.resolve(updatedWine);
  }

  async delete(id: string): Promise<void> {
    const index = this.wines.findIndex(wine => wine.id === id);
    if (index === -1) {
      throw new Error(`Wine with id ${id} not found`);
    }
    
    this.wines.splice(index, 1);
    return Promise.resolve();
  }
}
