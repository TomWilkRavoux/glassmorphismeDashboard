import React from "react";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="p-6 bg-glass backdrop-blur-glass rounded-lg shadow-lg border border-white/10">
      <div className="flex items-center space-x-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
