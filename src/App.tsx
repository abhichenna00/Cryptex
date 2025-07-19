// App.tsx
import { Sidebar } from "./components/Sidebar";
import { FileDropZone } from "./components/FileDropZone";
import { TransferList } from "./components/TransferList";
import { ConnectModal } from "./components/ConnectModal";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex flex-col flex-1 p-4 overflow-auto">
        <FileDropZone />
        <TransferList />
      </main>
      <ConnectModal />
    </div>
  );
}

export default App;
