export default function selectRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
