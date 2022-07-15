import { whenLoading, whenLoaded } from "./loaderControl.js"
import { loader, quoteContainer, quoteText, authorText } from "./DOMRefs.js"
import {
  updateCacheIfStale,
  getCachedQuotes,
  selectRandomQuote,
} from "./dataHandling.js"

async function renderQuote(quote) {
  if (!quote.author) {
    authorText.textContent = "Unknown"
  } else {
    authorText.textContent = quote.author
  }

  if (quote.text.length > 50) {
    quoteText.className = "long-quote"
  } else {
    quoteText.className = ""
  }
  quoteText.textContent = quote.text
}

export default async function renderNewQuote() {
  whenLoading({ showElement: loader, hideElement: quoteContainer })
  await updateCacheIfStale()
  const quotes = getCachedQuotes().payload
  const quote = selectRandomQuote(quotes)
  await renderQuote(quote)
  whenLoaded({ showElement: quoteContainer, hideElement: loader })
}
