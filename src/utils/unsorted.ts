/* -----------------------------------------------------------------------------------
  ID Generators
------------------------------------------------------------------------------------*/
export function ID (): string {
  return 'xxxxxxxx'.replace(/[x]/g, c => {
    const r = Math.random() * 16 | 0; const
      v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function UUID (): string {
  return 'xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, c => {
    const r = Math.random() * 16 | 0; const
      v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
