import { useState } from 'react'
import * as stylex from '@stylexjs/stylex'
import { resolveIconUrl as icon } from 'src/utils'
import { useWebFont } from 'src/hooks'

function App({ font = 'Ubuntu' }) {
  const [count, setCount] = useState(0)

  useWebFont({ google: { families: [font] } })

  return (
    <>
      <h1 {...stylex.props(styles.red, styles.font(font))}>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <img width={32} height={32} src={icon('apple', 'grey')} />
      <a href="https://google.com/">Google</a>
    </>
  )
}

const styles = stylex.create({
  font: (fontName: string) => ({
    fontFamily: fontName,
  }),
  red: {
    color: '#F00',
    backgroundColor: {
      ':hover': '#FFA',
    },
  },
})

export default App
