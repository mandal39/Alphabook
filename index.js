fetch('book.json')
    .then(res => res.json())
    .then(data=>{
        let types = document.querySelectorAll(".single-type");
        types.forEach(type =>{
            console.log(type.innerHTML);
        })
        data.books.forEach(book=>{
            let a = `
                <div class="book">
                    <img class = "bookimg" src="books/${book.title}.jpeg" alt="${book.title}.jpeg">
                    <h3 class="book-name">${book.title}</h3>
                    <span class="book-price">${book.price}</span>
                </div>`
            types.forEach(type =>{
                let h2 = type.querySelector("h2");
                const text = h2.textContent;
                let typeBooks = type.querySelector(".type-books")
                console.log(text);
                console.log(book.category);
                if(text==book.category){
                    console.log(a);
                    typeBooks.innerHTML += a
                    console.log(typeBooks.innerHTML);
                }
            })
        })
    });