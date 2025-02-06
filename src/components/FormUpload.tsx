import { Check, ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import CircleLoading from "./CircleLoading";
import { setExportData } from "../store/slices/rootSlice";
interface Props {
  index: number;
  data: { file: { uploadDate: string } };
}

const TABS = ["Tab 1", "Tab 2", "Tab 3"];

const FormUpload = ({ index, data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [account, setAccount] = useState("");
  const [fileData, setFileData] = useState({ file: "", tab: "" });
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let SHOW_TABS = TABS;
  const isDisabledExport = !account || !fileData.file || !fileData.tab;

  const submit = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(
        setExportData({
          index,
          account,
          name: fileData.file,
          tab: fileData.tab,
        })
      );
      setIsLoading(false);
    }, 1500);
  };

  console.log(data.file.uploadDate);

  return (
    <div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Google Account
        </label>
        <div className="relative inline-block w-full">
          <select
            className="block appearance-none w-full border border-gray-200 text-sm text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={(e) => setAccount(e.target.value)}
            value={account}
          >
            <option value="">Choose Account</option>
            <option value="Account 1">Account 1</option>
            <option value="Account 2">Account 2</option>
            <option value="Account 3">Account 3</option>
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
              className="file:bg-white file:text-white file:w-0 w-52"
              onChange={(e) =>
                setFileData({
                  ...fileData,
                  file: e.target?.files ? e.target?.files[0].name : "",
                })
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="relative inline-block w-full group">
              <button
                className="flex items-center w-full px-2.5 py-1.5 text-gray-500 bg-gray-100 border-gray-200 text-xs rounded-xl focus:outline-none"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="mr-2">{fileData.tab || "Choose Tab"}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div
                className={`${
                  showDropdown ? "flex" : "hidden"
                } absolute left-0 mt-1 rounded-md shadow-lg bg-white p-1 flex-col gap-2 min-w-40`}
              >
                <div className="relative">
                  <input
                    className="block w-full py-1 px-2 text-xs text-gray-800 border rounded-md border-gray-300 focus:outline-none pl-8"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => {
                      const text = e.target.value;
                      SHOW_TABS = TABS.filter((tab) => tab.search(text));
                    }}
                  />
                  <Search className="absolute w-4 h-4 left-2 top-1 text-gray-500" />
                </div>
                {SHOW_TABS.map((tab) => (
                  <div
                    key={tab}
                    className="flex justify-between hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md px-4 py-2"
                    onClick={() => {
                      setFileData({ ...fileData, tab });
                      setShowDropdown(false);
                    }}
                  >
                    <label className="text-xs text-gray-700">{tab}</label>
                    {fileData.tab === tab && (
                      <Check className="w-3 h-3 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {fileData.file && (
              <button
                className="cursor-pointer"
                onClick={() => setFileData({ file: "", tab: "" })}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      <button
        className={`${
          isDisabledExport
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
        } w-full text-white text-xs py-2 px-3 rounded mt-2 flex items-center justify-center gap-2`}
        disabled={isDisabledExport}
        onClick={() => submit()}
      >
        {isLoading && <CircleLoading />} Export
      </button>
      {data.file.uploadDate && (
        <div className="w-full text-center mt-1">
          <label className="text-gray-700 text-xs">
            Last export {data.file.uploadDate}
          </label>
        </div>
      )}
    </div>
  );
};

export default FormUpload;
