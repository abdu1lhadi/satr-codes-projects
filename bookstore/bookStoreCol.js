function Books (book){
    function delbook(del){
        let books = book.splice(del,1)
        return books;
    }

    function editbook(indexbooks,indexbook,update){
        let books = book[indexbooks]
        let updatebooks = books.splice(indexbook,1,update)
        return updatebooks;
    }

    function search(serbook){
        let searchbook = []
        for(let i = 0 ; i < book.length ; i++){
            if (book[i].indexOf(serbook) === -1)
                continue
            searchbook.push(book[i]);    
        }
        if(searchbook * 2 === 0)
            return 'sorry ,, can\'t find'
        return searchbook;
    }

    function invoice(nameBook, money , qutBook){
        if(search(nameBook) === "sorry ,, can't find")
            return "sorry this book is not here"
        else{
            let newBook = search(nameBook)
            if(newBook[0][3] < money){
                return "you don't have money"
            }else if(newBook[0][4] < qutBook){
                return "sorry this book is finsh"
            }else{
                newBook[0][4]-= qutBook
                return `The book has been successfully purchased: ${newBook[0][1]} ${newBook[0][3]}$ ${qutBook}`;
            }          
        }   
    }

    return invoice("ds", 15 , 1);
    
}
console.log(Books([
    [1,'sports', 'hadi', 15 ,17],
    [2,'medicine', 'ahmed', 12 ,5],
    [3,'Programming', 'ali', 10 ,2]]
))


