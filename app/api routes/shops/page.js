"use client";

import React, { useEffect, useState } from "react";

export default function Shops() {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/shops");

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        setShops(data);
      } catch (err) {
        console.error("Error fetching shops:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shops</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : shops.length > 0 ? (
        <ul>
          {shops.map((shop) => (
            <li key={shop.id}>{shop.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading shops...</p>
      )}
    </div>
  );
}
