function whenLoading({ showElement, hideElement }) {
  showElement.hidden = false;
  hideElement.hidden = true;
}

function whenLoaded({ showElement, hideElement }) {
  showElement.hidden = false;
  hideElement.hidden = true;
}

export { whenLoading, whenLoaded }