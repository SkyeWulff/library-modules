// write your code here to make the tests pass
var Library = function() {
    var books = [];
    return {
        addBook: function(book) {
            if(!books.includes(book)) {
                books.push(book);
            } else {
                console.log('It looks like this library already has this book')
            }
        },
        checkOutBook: function(book) {
            if(books.includes(book) && book.getAttribute('checkedOut') === false) {
                book.setAttribute('checkedOut', true);
            } else {
                if(!books.includes(book)) {
                    console.log('This book does not exist in this library');
                } else {
                    console.log('This book has already been checked out');
                }
                
            }
        },
        returnBook: function(book) {
            if(books.includes(book) && book.getAttribute('checkedOut') === true) {
                book.setAttribute('checkedOut', false);
            } else {
                console.log('It looks like you brought this book back to the wrong library');
            }
        }
    };

};

var Book = function(title, author) {
    var attributes = {
        title: title,
        author: author,
        checkedOut: false
    }

    return {
        getAttribute: function(attribute) {
            if(attributes.hasOwnProperty(attribute)) {
                return attributes[attribute];
            } else {
                console.log(`The ${attribute} attribute doesn't exist for this book`);
            }
        },
        setAttribute: function(attribute, value) {
            if(attributes.hasOwnProperty(attribute)) {
                attributes[attribute] = value;
            } else {
                console.log(`The ${attribute} attribute doesn't exist for this book`);
            }
        }
    };
};
