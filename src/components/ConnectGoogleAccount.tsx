import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import { setStatus } from "../store/slices/rootSlice";

interface Props {
  index: number;
}

const ConnectGoogleAccount = ({ index }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="flex items-center mb-2 px-2">
        <div className="rounded-full p-3 mr-2 bg-gray-100">
          <img src="/google-icon.png" className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold">Connect Google Account</label>
          <label className="text-xs text-gray-400">
            Please connect Google Account to use this block
          </label>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-3 rounded mt-2 mb-4 cursor-pointer"
        onClick={() => dispatch(setStatus({ index, status: "login" }))}
      >
        Connect
      </button>
    </>
  );
};

export default ConnectGoogleAccount;
