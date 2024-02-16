export const resolveFontUrl = (fontFamilyName: string) => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${fontFamilyName}`
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
  return fontFamilyName
}
