import { useEffect } from 'react'
import WebFont from 'webfontloader'

/**
 * A react hook that loads fonts from the web via `@font-face` CSS directive.
 * @param config Defines which fonts to load from each web font provider and gives you the option to specify callbacks for certain events.
 * 
 * @example
 * ```jsx
 * useWebFont({ google: { families: ['Roboto', 'Ubuntu'] } })
 * ```
 * 
 * ### Font Resources:
 * - [Adobe Edge Web Fonts](https://edgewebfonts.adobe.com/)
 * - [Custom](https://github.com/typekit/webfontloader#custom)
 * - [Fontdeck](http://fontdeck.com/)
 * - [Fonts.com Web Fonts](https://www.fonts.com/web-fonts)
 * - [Google Fonts](https://fonts.google.com/)
 * - [Adobe Typekit](https://fonts.adobe.com/)
 * 
 * ---
 * 
 * [GitHub](https://github.com/typekit/webfontloader) | [NPM](https://www.npmjs.com/package/webfontloader)
 */
export function useWebFont(config: WebFont.Config) {
  useEffect(() => {
    WebFont.load(config)
  }, [config])
}
