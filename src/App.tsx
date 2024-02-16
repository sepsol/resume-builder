import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 {...stylex.props(styles.red)}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

const styles = stylex.create({
  red: {
    color: '#F00',
  },
})

export default App
