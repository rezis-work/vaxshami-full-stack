import { NoSidebarProps } from "@/app/interfaces/NoSidebarProps";

export default function NoSidebarPage({ params }: NoSidebarProps) {
  const id = params.id;
  return (
    <div>
      <h1>id: {id}</h1>
    </div>
  );
}
