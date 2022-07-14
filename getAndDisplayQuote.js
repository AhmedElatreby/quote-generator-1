import getQuotes from "./getQuotes.js"
import selectRandomQuote from "./selectRandomQuote.js"
import renderQuote from "./renderQuote.js"

export default async function getAndDisplayQuote() {
  const quotes = await getQuotes()
  const quote = selectRandomQuote(quotes)
  renderQuote(quote)
}
