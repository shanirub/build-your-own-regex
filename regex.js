function matchOne(pattern, text) {
    if (!pattern) return true // empty pattern is true
    if (!text) return false // non-empty pattern and empty text is false
    if (pattern === '.') return true // any text matches the wildcard
    return pattern === text // one char pattern equals one char text?
}

function search(pattern, text) {

}

function match(pattern, text) {
}


module.exports = {
  matchOne,
  match,
  search
}