export default function formatingTemp(temp) {
  if (temp === 0) {
    return 0
  }
  return temp > 0 ? `+${temp}` : `${temp}`
}