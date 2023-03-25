import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [countInt, setCountInt] = useState(0);

  const onIncrement = () => {
    setCountInt(countInt + 1)
    console.log(`Count = ${countInt}`)
  }

  return (
    <button onClick={onIncrement}>
      Increment {countInt}
    </button>
  )
}
