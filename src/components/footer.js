'use client';

// importing the router and then adding it as an object re CodeCademy 
import { useRouter } from "next/navigation";

export default function Footer(){
  const router = useRouter();

  function goHome(){
    router.push('/home')
  }

  return (
    <footer>
      <button onClick={router.back}>Back</button>
      <button onClick={goHome}>Home</button>
    </footer>
  )
}