/**
 * Resolves the URL for the SVGs of popular icons using **Simple Icons**.
 * @param nameSlug The slug of the desired icon grabbed from https://simpleicons.org/.
 * @param defaultColor The color to use for the icon by default. Can be either hex or human-readable.
 * @param darkColor The color to use if the host operating system where the browser is running was in dark mode.
 * @returns The string URL of the CDN where the icon lives.
 * 
 * @example
 * ```jsx
 * <img src={resolveIconUrl('apple', 'red', 'ff0')} />
 * // Output: <img src="https://cdn.simpleicons.org/apple/red/ff0" />
 * ```
 */
export const resolveIconUrl = (nameSlug: string, defaultColor?: string, darkColor?: string) => {
  let url = `https://cdn.simpleicons.org/${nameSlug}`

  if (defaultColor) {
    url += `/${defaultColor}`

    if (darkColor) {
      url += `/${darkColor}`
    }
  }

  return url
}
