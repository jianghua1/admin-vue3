export function darken(color: string, rate: number) {
  const rgb = hexToRgb(color)
  if (!rgb) {
    throw new Error(`无效的颜色：${color}`)
  }
  const newRgb = {
    r: Math.max(0, Math.min(255, Math.round(rgb.r - rgb.r * rate))),
    g: Math.max(0, Math.min(255, Math.round(rgb.g - rgb.g * rate))),
    b: Math.max(0, Math.min(255, Math.round(rgb.b - rgb.b * rate)))
  }
  const adjustedColor = rgbToHex(newRgb)
  return adjustedColor
}

// Helper function to convert hex to RGB
function hexToRgb(hex: any) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

// Helper function to convert RGB to hex
function rgbToHex(rgb: any) {
  return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b
    .toString(16)
    .padStart(2, '0')}`
}
