export default function pxToEm (
  basePx: number,
  targetPx: number,
  withUnit = false
): number | string {
  return withUnit
    ? `${(targetPx / basePx).toFixed(2)}em`
    : (targetPx / basePx).toFixed(2)
}
