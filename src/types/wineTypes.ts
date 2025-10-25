export type Wine = {
  id: string;
  name: string;
  year: number;
  price: number;
  type: "Red" | "White" | "Rosé";
};

export type WineFormData = Omit<Wine, "id">;

export interface WineFormProps {
  onSubmit: (wine: WineFormData) => void;
  onCancel: () => void;
  initialData?: WineFormData;
  isEditing?: boolean;
}

export interface WineListProps {
  wines: Wine[];
  onEditWine: (wine: Wine) => void;
  onDeleteWine: (id: string) => void;
}

export interface WineSidebarProps {
  onAddWine: () => void;
  onDrinksToggle: () => void;
  onHomeClick: () => void;
  isDrinksOpen: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}
