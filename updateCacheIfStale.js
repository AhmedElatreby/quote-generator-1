import fetchQuotes from "./fetchQuotes.js"

function getCachedQuotes() {
  return JSON.parse(localStorage.getItem("quotes"))
}

function setCachedQuotes(quotes) {
  localStorage.setItem(
    "quotes",
    JSON.stringify({
      payload: quotes,
      dateCreated: Date.now(),
    })
  )
}

export default async function updateCacheIfStale() {
  const cachedQuotes = getCachedQuotes()
  const expiryTime = 1000 * 60 * 60 * 24

  if (!cachedQuotes || cachedQuotes.dateCreated + expiryTime < Date.now()) {
    const fetchedQuotes = await fetchQuotes()
    setCachedQuotes(fetchedQuotes)
  }
}

export { getCachedQuotes, updateCacheIfStale }