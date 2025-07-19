// components/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-4">
      <h2 className="text-xl font-semibold mb-4">Transmit</h2>
      <div className="text-sm text-gray-600 mb-2">Your ID:</div>
      <div className="font-mono text-sm bg-gray-100 p-2 rounded mb-4">
        ab12-cd34
      </div>
      <nav className="space-y-2">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">
          Send Files
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">
          History
        </button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-200">
          Settings
        </button>
      </nav>
    </aside>
  );
}
