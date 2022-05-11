let currentId = 0
export function reducer(state = [], action) {
    switch (action.type) {
        case 'BOOK_ADDED':
            return [
                ...state,
                {
                    id: ++currentId,
                    bookName: action.bookInfo.bookName,
                    authorName: action.bookInfo.authorName
                }
            ]
        case 'BOOK_REMOVED':
            return state.filter((book) => book.id !== action.bookInfo.id)
        default:
            return state
    }
}