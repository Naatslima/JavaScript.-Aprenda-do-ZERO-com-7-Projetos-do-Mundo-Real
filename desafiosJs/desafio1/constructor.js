function CreatBook(title, author, pages) {

    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
     
}
const book1 = creatBook('Atomic', 'James', 306) 

console.log(book1)

// não precisa retornar um valor igual a factory 
// não precisa nomear o objeto 
// ele usa pascal (primeira e segunda palavra com letra maiuscula)