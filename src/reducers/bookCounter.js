export function bookCounter(state = 0, action) {
    switch (action.type) {
        case "BOOK_ADDED":
            return ++state
        case "BOOK_REMOVED":
            return --state
        default:
            return state
    }
}