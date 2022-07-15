# Quote Generator

This project is derived from the Quote Generator section of [Zero To Mastery's JavaScript Web Projects: 20 Projects to Build Your Portfolio
](https://zerotomastery.io/courses/javascript-projects/)

The base project covered:
- Querying, Manipulating the DOM
- Handling DOM events
- Fetch API
- Twitter API
- Font Awesome
- Google Fonts
- Favicons
- Animations
- Media Queries
- Pseudo Classes

I extended the project in the following ways:

### Data Caching 
Using the Local Storage API and JavaScripts built in Date object, the data is fetched from the API, only if there is no data previously cached in Local Storage, or the cached data has expired.

### Periodic Quote Rendering
Added a "progress bar" that periodically re-renders a quote when the specified animation time has elapsed. 

### Refactoring
I have tried to increase the modularity of the code by grouping related logic into ES6 modules and splitting logic up into smaller functions and using composition.
