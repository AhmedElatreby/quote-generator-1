import localQuotes from "./localQuotes.js"
let fetchedQuotes

function newQuote(quotes) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  console.log(quote)
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes"  
  
  try {
    const response = await fetch(apiUrl)
    fetchedQuotes = await response.json()
    
    if(fetchedQuotes) {
      newQuote(fetchedQuotes)
    }
  } catch (error) {
    console.log(error)
    newQuote(localQuotes)
  }
}

// On Load
getQuotes()
