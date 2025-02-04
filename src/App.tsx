import Card from "./components/Card";
import ConnectGoogleAccount from "./components/ConnectGoogleAccount";
import FormUpload from "./components/FormUpload";
import FlowNode from "./components/FlowNode";

const App = () => {
  return (
    <div className="bg-gray-100 p-8 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-4">
        Output/Export to Google Sheets
      </h1>
      <div className="flex flex-col items-center gap-4">
        <Card>
          <ConnectGoogleAccount />
        </Card>

        <Card>
          <FlowNode />
        </Card>

        <Card>
          <FormUpload />
        </Card>
      </div>
    </div>
  );
};

export default App;
