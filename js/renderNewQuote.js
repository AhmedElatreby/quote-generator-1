import { whenLoading, whenLoaded } from "./loaderControl.js"
import { loader, quoteContainer, quoteText, authorText, progressBar } from "./DOMElements.js"
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

function renderProgressBar() { 
  const progressBarInDom = document.getElementById("progress-bar")
  if(progressBarInDom) {
    progressBarInDom.parentElement.removeChild(progressBarInDom)
  }
  quoteContainer.appendChild(progressBar)
}

export default async function renderNewQuote() {
  whenLoading({ showElement: loader, hideElement: quoteContainer })
  await updateCacheIfStale()
  const quotes = getCachedQuotes().payload
  const quote = selectRandomQuote(quotes)
  await renderQuote(quote)
  renderProgressBar()
  whenLoaded({ showElement: quoteContainer, hideElement: loader })
}
