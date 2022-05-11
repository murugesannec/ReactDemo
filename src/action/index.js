export const addBook = (id) => {
    console.log('id: ' + id)
    return {
        type: 'BOOK_ADDED',
        bookInfo: {
            id: id + 1,
            bookName: 'Head First NODE - ' + (id + 1),
            authorName: 'someOtherAuthor - ' + (id + 1)
        }
    }
}

export const removeBook = (id) => {
    return {
        type: 'BOOK_REMOVED',
        bookInfo: {
            id
        }
    }
}