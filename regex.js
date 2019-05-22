
// checking a one char pattern and a one char text
function matchOne(pattern, text) {
    if (!pattern) return true // empty pattern is true
    if (!text) return false // non-empty pattern and empty text is false
    if (pattern === '.') return true // any text matches the wildcard
    return pattern === text // one char pattern equals one char text?
}

function search(pattern, text) {

}


function match(pattern, text) {
    if (pattern === '') return true // base case for recursion: when the pattern is empty every text fits it
    if (pattern === '$' && text === '') return true //  additional base case for the $ char
    else return matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice[1])
}


export default {
  matchOne,
  match,
  search
}