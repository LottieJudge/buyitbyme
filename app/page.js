import React from "react";


const fetchCurrentTime = () => {
  return new Date().toLocaleString();
}

export default function theTime() {
  let currentTime = fetchCurrentTime();
  return (
    <div>
     <p>It's hammer time! but also: {currentTime}</p>
    </div>
  );
};
