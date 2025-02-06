import { Trash } from "lucide-react";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import { deleteData } from "../store/slices/rootSlice";

interface Props {
  index: number;
  children: ReactNode;
}

const Card = ({ index, children }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-green-200 rounded-md p-2">
          <img src="/google-sheet-icon.png" className="w-3 h-4" />
        </div>
        <h2 className="font-medium">Export to Google Sheets</h2>
        <button
          className="bg-gray-200 rounded-md p-1 ml-auto cursor-pointer"
          onClick={() => dispatch(deleteData(index))}
        >
          <Trash className="w-4 h-4" />
        </button>
      </div>

      {children}
    </div>
  );
};

export default Card;
