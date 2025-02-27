import React from "react";

export default function DeliveryTable({ deliveries }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/20">
      <h2 className="text-lg font-semibold mb-4 text-white">📦 Liste des Livraisons</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="p-3">Tracking</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Délai</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Priorité</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.length > 0 ? (
              deliveries.map((delivery) => (
                <tr key={delivery.id} className="border-b border-white/10 hover:bg-white/20 transition">
                  <td className="p-3">{delivery.tracking_number}</td>
                  <td className="p-3">{delivery.destination}</td>
                  <td className="p-3">
                    {delivery.delay && typeof delivery.delay === "object" && "days" in delivery.delay 
                        ? `${delivery.delay.days} jours` 
                        : "0 jours"}
                  </td>                  
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded ${delivery.status === "Delayed" ? "bg-red-500" : "bg-green-500"}`}>
                      {delivery.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {delivery.priority_id === 1 && "🟢 Low"}
                    {delivery.priority_id === 2 && "🟠 Medium"}
                    {delivery.priority_id === 3 && "🔴 High"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-300">Aucune livraison trouvée.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
