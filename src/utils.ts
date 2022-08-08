

export function contains(text: string, match: string, jumbled: boolean) {
  if (!jumbled) {
    return text.includes(match)
  }

  for (let i = 0; i < match.length; i++) {
    const c = match.charAt(i)
    if (!text.includes(c)) {
      return false
    }
  }
  return true
}
