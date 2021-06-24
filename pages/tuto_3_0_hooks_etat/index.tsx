import * as React from 'react'
import { useState } from 'react'

export default function Index(): JSX.Element {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  )
}
