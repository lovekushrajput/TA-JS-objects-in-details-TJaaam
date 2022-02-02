// ## An object-oriented book-list!
class Book {
constructor(title,category,author,isRead=false,finishedDate="04/02/2022"){
this.Title = title,
this.Category = category,
this.Author = author,
this.isRead = isRead,
this.finishedDate = finishedDate
};
markBookAsRead(){
    this.isRead = true
    this.finishedDate=Date()
}
}

let book = new Book('400 Days','Mystery, Thriller','Chetan Bhagat',false)
console.group('Book')
console.log(book.Title)
console.log(book.Author)
console.log(book.Category)
console.log(book.isRead)
console.log(book.finishedDate)
book.markBookAsRead()
console.log(book.isRead)
console.log(book.finishedDate)
console.groupEnd()


// #### BookList should have the following properties:
class BookList {
    constructor(){
        this.bookArray = []
        this.index = 0
    };
    add(...array){
    this.bookArray.push(...array)
    };
    getCurrentBook(){
    return this.bookArray[this.index]
    };
    getNextBook(){
        return this.bookArray[this.index+1]
    };
    getPrevBook(){
        return this.bookArray[this.index--]
    };
    changeCurrentBook(ind){
        this.index = ind
        return this.index
    }
}

let listOfBook = new BookList()
console.group('BookList')
listOfBook.add(['Wings of fire'])
listOfBook.add(['Attitude is Everything'])
listOfBook.add(['My Jurney'])
listOfBook.add(['Making of New India'])
listOfBook.add(["A Passage to India"])
console.log(listOfBook)
console.log(listOfBook.getCurrentBook())
console.log(listOfBook.getNextBook())
console.log(listOfBook.getPrevBook())
console.log(listOfBook.changeCurrentBook(4))
console.log(listOfBook.getCurrentBook())
console.log(listOfBook.getPrevBook())
console.groupEnd()
