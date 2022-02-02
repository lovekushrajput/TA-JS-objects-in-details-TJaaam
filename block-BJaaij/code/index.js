// ## An object-oriented book-list!
class Book {
constructor(title,category,author){
this.Title = title,
this.Category = category,
this.Author = author,
this.isRead = false,
this.finishedDate = null;
};
markBookAsRead(){
    this.isRead = true
    this.finishedDate=Date()
}
}

let book1 = new Book('400 Days','Mystery, Thriller','Chetan Bhagat')
let book2 = new Book('Wings of fire','A P J Abdul Kalam, Arun Tiwari','Autobiography')
let book3 = new Book ('	Murder!','Crime','Arnold Bennett')
let book4 = new Book('The Open Boat','Classic','Stephen Crane')
let book5 = new Book('The Hostage','Adventure','C. S. Forester')
console.group('Book')
console.log(book1.Title)
console.log(book1.Author)
console.log(book1.Category)
console.log(book1.isRead)
console.log(book1.finishedDate)
book1.markBookAsRead()
console.log(book1.isRead)
console.log(book1.finishedDate)
console.groupEnd()


// #### BookList should have the following properties:
class BookList {
    constructor(){
        this.bookArray = []
        this.index = 0
    };
    add(...books){
    this.bookArray.push(...books)
    };
    getCurrentBook(){
    return this.bookArray[this.index]
    };
    getNextBook(){
        this.index = this.index+1
        return this.bookArray[this.index]
    };
    getPrevBook(){
        this.index = this.index-1
        return this.bookArray[this.index]
    };
    changeCurrentBook(ind){
        this.index = ind
        return this.index
    }
}

let listOfBook = new BookList()
listOfBook.add(book1,book2,book3,book4,book5)

