import { Database } from "lucide-react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import { setStatus } from "../store/slices/rootSlice";

interface Props {
  index: number;
}

const FlowNode = ({ index }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      className="flex items-center justify-center gap-1 bg-gray-200 py-2 w-5/6 rounded-xl mx-auto cursor-pointer"
      onClick={() => dispatch(setStatus({ index, status: "connected" }))}
    >
      <Database className="w-4 h-4 text-gray-500" />
      <p className="text-xs font-medium text-gray-700">
        Connect Flow Node to Import to Google Sheets
      </p>
    </button>
  );
};

export default FlowNode;
