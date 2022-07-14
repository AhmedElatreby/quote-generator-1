import { updateCacheIfStale } from "./updateCacheIfStale.js"
import renderFreshQuote from "./renderFreshQuote.js"
import tweetQuote from "./tweetQuote.js"
import { twitterBtn, newQuoteBtn } from "./domElements.js"

await updateCacheIfStale()
await renderFreshQuote()

newQuoteBtn.addEventListener("click", renderFreshQuote)
twitterBtn.addEventListener("click", tweetQuote)
