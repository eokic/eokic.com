const STANDARD_RATIOS = [
  '1/1',
  '1/2', '2/1',
  '1/3', '3/1',
  '1/4', '4/1',
  '1/5', '5/1',
  '2/3', '3/2',
  '2/5', '5/2',
  '3/4', '4/3',
  '3/5', '5/3',
  '4/5', '5/4',
  '5/7', '7/5',
  '5/8', '8/5',
  '9/16', '16/9',
  '9/17', '17/9',
  '9/21', '21/9',
  '10/16', '16/10',
]

function rawRatio (
  width: number,
  height: number,
): string {
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  const divisor = gcd(width, height)
  return `${width / divisor}/${height / divisor}`
}


export default function aspectRatio (
  width: number,
  height: number,
  forceStandardRadio = true,
): string {

  // Will return a raw & unpredictable ratio e.g. 320/101
  if (!forceStandardRadio)
    return rawRatio(width, height)

  // Will return a standardized ratio
  return STANDARD_RATIOS.reduce((closest, ratio) => {
    const [numerator, denominator] = ratio.split('/').map(Number)
    const [closestNumerator, closestDenominator] = closest.split('/').map(Number)
    const difference = Math.abs((numerator / denominator) - (width / height))
    const closestDifference = Math.abs((closestNumerator / closestDenominator) - (width / height))
    return difference < closestDifference ? ratio : closest
  })
}
