// objeto + função 

const book = {
    bookTitle: 'Atomic Habits',
    bookAuthor: 'James Clear',
    bookPages: 306,
    bookChapters: {
        chap1: 'Fudamentals',
        chap2: '1st law'
    }, 
    printBook: function() {
        console.log('Printing...')
    }
}

book.printBook()

// Outra forma de criar a função, porem por fora!!
// function printBook() {
//     console.log('Printing...')
// }
 
// printBook()