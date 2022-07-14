import localQuotes from "./localQuotes.js"
let fetchedQuotes
const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")

newQuoteBtn.addEventListener("click", getQuotes)

function renderQuote(quotes) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  
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

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes"

  try {
    const response = await fetch(apiUrl)
    fetchedQuotes = await response.json()

    if (fetchedQuotes) {
      renderQuote(fetchedQuotes)
    }
  } catch (error) {
    console.log(error)
    renderQuote(localQuotes)
  }
}

// On Load
getQuotes()
