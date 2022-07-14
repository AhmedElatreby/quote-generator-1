import { quoteText, authorText } from "./domElements.js"

export default function renderQuote(quote) {
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
