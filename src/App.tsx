import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { resolveIconUrl as icon } from 'src/utils'
import WebFont from 'webfontloader';

const font = 'Ubuntu'
WebFont.load({
  google: {
    families: [font],
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 {...stylex.props(styles.red)}>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <img width={32} height={32} src={icon('apple', 'grey')} />
    </>
  )
}

const styles = stylex.create({
  red: {
    color: '#F00',
    fontFamily: font
  },
})

export default App
