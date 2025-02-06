import { useSelector } from "react-redux";

import Card from "./components/Card";
import ConnectGoogleAccount from "./components/ConnectGoogleAccount";
import FormUpload from "./components/FormUpload";
import FlowNode from "./components/FlowNode";
import { RootState } from "./store/store";

const App = () => {
  const { exportData } = useSelector((state: RootState) => state.root);

  return (
    <div className="bg-gray-100 md:p-8 p-4">
      <h1 className="text-lg md:text-3xl font-bold mb-4 text-center">
        Output/Export to Google Sheets
      </h1>
      <div className="flex flex-col items-center gap-4">
        {exportData.map((data, index) => (
          <Card key={index} index={index}>
            {data.type === "google-sign-in" && !data.status && (
              <ConnectGoogleAccount index={index} />
            )}
            {data.type === "google-node" && !data.status && (
              <FlowNode index={index} />
            )}
            {(data.status === "login" || data.status === "connected") && (
              <FormUpload index={index} data={data} />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
