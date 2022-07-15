const newQuoteBtn = document.getElementById("new-quote")
const twitterBtn = document.getElementById("twitter")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const quoteContainer = document.getElementById("quote-container")
const loader = document.getElementById("loader")

const progressBar = document.createElement("DIV")
progressBar.classList.add("progress-bar", "show-progress")
progressBar.id = "progress-bar"

export { newQuoteBtn, twitterBtn, quoteText, authorText, quoteContainer, loader, progressBar }
