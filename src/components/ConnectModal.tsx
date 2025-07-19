// components/ConnectModal.tsx
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export function ConnectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [peerId, setPeerId] = useState("");

  function handleConnect() {
    console.log("Connecting to", peerId);
    // TODO: Trigger signaling and create peer connection
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-blue-700"
      >
        Connect to Peer
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-xl shadow-lg w-[300px]">
            <Dialog.Title className="text-lg font-semibold">Connect to Peer</Dialog.Title>
            <input
              value={peerId}
              onChange={(e) => setPeerId(e.target.value)}
              className="w-full mt-4 p-2 border border-gray-300 rounded"
              placeholder="Enter Peer ID"
            />
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={() => setIsOpen(false)} className="text-sm px-3 py-1 rounded hover:underline">
                Cancel
              </button>
              <button onClick={handleConnect} className="bg-blue-600 text-white px-4 py-1 rounded">
                Connect
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
