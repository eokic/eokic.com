export default function googleFonts (params: {
  family: string[]
  weight?: string[]
  text?: string
}): string {
  const { family, weight, text } = params
  let url = `https://fonts.googleapis.com/css2?family=${family.join('|')}`
  if (weight?.length) url += `:wght@${weight.map(w => `${w}`).join(';')}`
  url += '&display=swap'
  if (text) url += `&text=${text}`
  return url
}
