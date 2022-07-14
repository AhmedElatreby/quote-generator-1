const apiUrl = "https://type.fit/api/quotes"

export default async function fetchQuotes() {
  try {
    const response = await fetch(apiUrl)
    return await response.json()
  } catch (error) {
    console.error(error.message)
  }
}
