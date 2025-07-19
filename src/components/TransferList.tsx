// components/TransferList.tsx
type Transfer = {
  name: string;
  size: number;
  progress: number; // 0 to 100
  status: "sending" | "receiving" | "done";
};

const exampleTransfers: Transfer[] = [
  { name: "project.zip", size: 124000000, progress: 60, status: "sending" },
  { name: "notes.txt", size: 1200, progress: 100, status: "done" },
];

export function TransferList() {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-lg font-medium">Transfers</h2>
      {exampleTransfers.map((t, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <div className="font-medium">{t.name}</div>
            <div className="text-xs text-gray-500">
              {(t.size / 1_000_000).toFixed(2)} MB — {t.status}
            </div>
          </div>
          <div className="w-1/3">
            <div className="h-2 bg-gray-200 rounded">
              <div
                className={`h-2 rounded ${
                  t.status === "done" ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: `${t.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
