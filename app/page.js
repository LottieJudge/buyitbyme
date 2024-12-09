'use client'

import { useEffect, useState } from "react";

export default function Page() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    async function fetchShops() {
      const response = await fetch('/api/testing-database/shops');
      const data = await response.json();
      setShops(data);
    }

    fetchShops();
  }, []);

  return (
    <div>
      <h1>Shops</h1>
      <ul>
        {shops.map(shop => (
          <li key={shop.id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
}
