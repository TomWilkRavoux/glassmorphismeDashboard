import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-glass backdrop-blur-glass rounded-lg shadow-lg border border-white/10">
      <h1 className="text-xl font-bold">SwiftLogistics</h1>
      <div className="space-x-4">
        <button className="p-2 bg-white/20 rounded-full">🔔</button>
        <button className="p-2 bg-white/20 rounded-full">👤</button>
      </div>
    </nav>
  );
}
