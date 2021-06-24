import * as React from 'react'
import { useEffect, useState } from 'react'

export default function Index(): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Cliquez ici</button>
    </div>
  )
}
