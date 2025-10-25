import { Wine, WineFormData } from "@/types/wineTypes";

export interface WineRepository {
  getAll(): Promise<Wine[]>;
  create(wineData: WineFormData): Promise<Wine>;
  update(id: string, wineData: WineFormData): Promise<Wine>;
  delete(id: string): Promise<void>;
}

export interface WineService {
  getWines(): Promise<Wine[]>;
  addWine(wineData: WineFormData): Promise<Wine>;
  updateWine(id: string, wineData: WineFormData): Promise<Wine>;
  deleteWine(id: string): Promise<void>;
}

export class WineServiceImpl implements WineService {
  constructor(private repository: WineRepository) {}

  async getWines(): Promise<Wine[]> {
    return this.repository.getAll();
  }

  async addWine(wineData: WineFormData): Promise<Wine> {
    return this.repository.create(wineData);
  }

  async updateWine(id: string, wineData: WineFormData): Promise<Wine> {
    return this.repository.update(id, wineData);
  }

  async deleteWine(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
