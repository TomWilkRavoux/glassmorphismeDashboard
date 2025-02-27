import React, { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "./StatCard";
import DeliveryTable from "./DeliveryTable";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalDeliveries: 0,
    averageDelay: "0 days",
    priorities: [],
  });
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const total = await axios.get("http://localhost:5000/total-deliveries");
        const delay = await axios.get("http://localhost:5000/average-delay");
        const priority = await axios.get("http://localhost:5000/priority-count");
        const allDeliveries = await axios.get("http://localhost:5000/deliveries");

        setStats({
          totalDeliveries: total.data.total_in_progress || 0,
        //   averageDelay: delay.average_delay.days ? `${delay.average_delay.days} days` : "0 days",
          priorities: priority.data,
        });
        
        setDeliveries(allDeliveries.data);
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <div className="grid grid-cols-3 gap-4 my-6">
        <StatCard title="Total Deliveries" value={stats.totalDeliveries} icon="📦" />
        <StatCard title="Average Delay" value={stats.averageDelay} icon="⏳" />
        <StatCard title="High Priority" value={stats.priorities.find(p => p.level === 'High')?.total || 0} icon="⚠️" />
      </div>
      <DeliveryTable deliveries={deliveries} />
    </div>
  );
}
