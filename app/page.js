"use client"
import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello there</div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Click me</button>
    </main>
  )
}
