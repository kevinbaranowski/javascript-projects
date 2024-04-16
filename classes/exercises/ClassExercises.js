// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, isDiscarded) {
        this.title = title,
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.ISBN = ISBN,
        this.numPages = numPages,
        this.numCheckedOut = numCheckedOut,
        this.isDiscarded = isDiscarded
    }
    checkOut(timesCheckedOutSinceLastUpdate = 1) {
        this.numCheckedOut += timesCheckedOutSinceLastUpdate;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, isDiscarded);
    }
    discardManual(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.isDiscarded = true;
        } else {
            this.isDiscarded = false;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, isDiscarded) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, isDiscarded);
    }
    discardNovel() {
        if (this.numCheckedOut > 100) {
            this.isDiscarded = true;
        } else {
            this.isDiscarded = false;
        }
    }
}

// const manual = new Manual('kb', 'kevin', 2018, '578419', 432, 89, false)
// manual.discardManual(2024);
// console.log(manual)
// manual.discardManual(2020);
// console.log(manual)

// Declare the objects for exercises 2 and 3 here:
const novel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, false)
const manual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false)
novel.discardNovel()
console.log(novel)
manual.discardManual(2024)
console.log(manual)
novel.checkOut(5);
console.log(novel)
// Code exercises 4 & 5 here: