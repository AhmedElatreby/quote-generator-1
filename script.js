import { twitterBtn, newQuoteBtn } from "./domElements.js"

import getAndDisplayQuote from "./getAndDisplayQuote.js"
import tweetQuote from "./tweetQuote.js"

newQuoteBtn.addEventListener("click", getAndDisplayQuote)
twitterBtn.addEventListener("click", tweetQuote)

// on load...
getAndDisplayQuote()