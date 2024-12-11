"use client"
import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('/api/shops', {
          method: 'GET',
        });
        if (!data.ok) {
          throw new Error(`HTTP error! Status: ${data.status}`);
        }
        const response = await data.json();
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      BuyItByMeBitch
    </div>
  );
}



