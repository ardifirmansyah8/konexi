import { ArrowDown, Check, ChevronDown, Search, X } from "lucide-react";
import FileDropdown from "./FileDropdown";

const FormUpload = () => {
  return (
    <div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Google Account
        </label>
        <div className="relative inline-block w-full">
          <select className="block appearance-none w-full border border-gray-200 text-sm text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>Account 1</option>
            <option>Account 2</option>
            <option>Account 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown />
          </div>
        </div>
      </div>

      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          File
        </label>
        <div className="border border-gray-200 rounded-md py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/google-sheet-icon.png" className="w-4 h-5" />
            <input
              type="file"
              className="file:bg-white file:text-white file:w-0 w-3xs"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative inline-block w-full group">
              <button className="flex items-center w-full px-2.5 py-1.5 text-gray-500 bg-gray-100 border-gray-200 text-xs text-gray-500 rounded-xl focus:outline-none">
                <span className="mr-2">Tab 1</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="hidden absolute left-0 mt-1 rounded-md shadow-lg bg-white p-1 flex flex-col gap-2 min-w-40">
                <div className="relative">
                  <input
                    className="block w-full py-1 px-2 text-xs text-gray-800 border rounded-md border-gray-300 focus:outline-none pl-8"
                    type="text"
                    placeholder="Search"
                  />
                  <Search className="absolute w-4 h-4 left-2 top-1 text-gray-500" />
                </div>
                <div className="flex justify-between hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md px-4 py-2">
                  <label className="text-xs text-gray-700">Tab 1</label>
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <div className="flex justify-between hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md px-4 py-2">
                  <label className="text-xs text-gray-700">Tab 2</label>
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <div className="flex justify-between hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md px-4 py-2">
                  <label className="text-xs text-gray-700">Tab 3</label>
                  <Check className="w-3 h-3 text-green-500" />
                </div>
              </div>
            </div>
            <button>
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded mt-2">
        Export
      </button>
      <div className="w-full text-center mt-1">
        <label className="text-gray-700 text-xs">Last export 14h ago</label>
      </div>
    </div>
  );
};

export default FormUpload;
