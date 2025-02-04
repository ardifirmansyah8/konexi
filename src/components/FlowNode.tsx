import { Database } from "lucide-react";

const FlowNode = () => {
  return (
    <div className="flex items-center justify-center gap-1 bg-gray-200 py-2 rounded-xl">
      <Database className="w-4 h-4 text-gray-500" />
      <p className="text-xs font-medium text-gray-700">
        Connect Flow Node to Import to Google Sheets
      </p>
    </div>
  );
};

export default FlowNode;
