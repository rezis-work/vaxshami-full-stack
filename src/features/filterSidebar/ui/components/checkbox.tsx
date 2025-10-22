import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter, useSearchParams } from "next/navigation";

const CheckboxComponent = ({ title }: { title: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isChecked = searchParams.get(title) === "true";

  const handleChange = (e: CheckedState) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (e === false) {
      searchParams.delete(title);
    }

    if (e === true) {
      searchParams.delete(title);
      searchParams.append(title, "true");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="mb-4">
      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150">
        <Checkbox
          id={title}
          value={title}
          checked={isChecked}
          onCheckedChange={(e) => handleChange(e)}
          className="h-5 w-5 border-2 border-gray-300 rounded cursor-pointer"
        />
        <label
          htmlFor={title}
          className="text-sm font-medium text-gray-700 cursor-pointer capitalize flex-1"
        >
          {title.replace(/([A-Z])/g, " $1").trim()}
        </label>
      </div>
    </div>
  );
};

export default CheckboxComponent;
