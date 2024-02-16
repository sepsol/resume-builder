import { useEffect } from "react"
import WebFont from "webfontloader"

export function useWebFont(config: WebFont.Config) {
  useEffect(() => {
    WebFont.load(config)
  }, [config])
}
