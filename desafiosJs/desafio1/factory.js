function creatBook(title, author, pages) {
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = creatBook('Atomic', 'James', 306) 
const book2 = creatBook('think', 'Napolean', 450) 

console.log(book1)
console.log(book2)