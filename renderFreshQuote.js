import { whenLoading, whenLoaded } from "./loaderControl.js"
import { loader, quoteContainer } from "./domElements.js"
import { updateCacheIfStale, getCachedQuotes } from "./updateCacheIfStale.js"
import selectRandomQuote from "./selectRandomQuote.js"
import renderQuote from "./renderQuote.js"


export default async function renderFreshQuote() {
  whenLoading({ showElement: loader, hideElement: quoteContainer })
  await updateCacheIfStale()
  const quotes = getCachedQuotes().payload
  const quote = selectRandomQuote(quotes)
  renderQuote(quote)
  whenLoaded({ showElement: quoteContainer, hideElement: loader })
}
