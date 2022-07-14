import localQuotes from "./localQuotes.js"

export default async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes"
  let fetchedQuotes
  try {
    const response = await fetch(apiUrl)
    fetchedQuotes = await response.json()
    if (fetchedQuotes) {
      return fetchedQuotes
    }
    return localQuotes
  } catch (error) {
    console.error(error.message)
  }
}
