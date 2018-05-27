module.exports = class DataBase {
    constructor() {
        this.books = [
            {
                id: 1,
                name: "book1",
                author: "author1",
                genre: "genre1",
                shortDesc: "shortDesc1",
                desc: "desc1",
                price: "100"
            },
            {
                id: 2,
                name: "book2",
                author: "author2",
                genre: "genre2",
                shortDesc: "shortDesc2",
                desc: "desc2",
                price: "200"
            },
            {
                id: 3,
                name: "book3",
                author: "author3",
                genre: "genre3",
                shortDesc: "shortDesc3",
                desc: "desc3",
                price: "300"
            },
            {
                id: 4,
                name: "book4",
                author: "author4",
                genre: "genre4",
                shortDesc: "shortDesc4",
                desc: "desc4",
                price: "400"
            },
            {
                id: 5,
                name: "book5",
                author: "author5",
                genre: "genre5",
                shortDesc: "shortDesc5",
                desc: "desc5",
                price: "500"
            },
            {
                id: 6,
                name: "book6",
                author: "author6",
                genre: "genre6",
                shortDesc: "shortDesc6",
                desc: "desc6",
                price: "600"
            },
            {
                id: 7,
                name: "book7",
                author: "author7",
                genre: "genre7",
                shortDesc: "shortDesc7",
                desc: "desc7",
                price: "700"
            },
            {
                id: 8,
                name: "book8",
                author: "author8",
                genre: "genre8",
                shortDesc: "shortDesc8",
                desc: "desc8",
                price: "800"
            },
            {
                id: 9,
                name: "book9",
                author: "author9",
                genre: "genre9",
                shortDesc: "shortDesc9",
                desc: "desc9",
                price: "900"
            }
        ];
    }

    getBookById(id) {
        for (let index in this.books) {
            if (this.books[index].id == id) {
                return this.books[index];
            }
        }
    }

    getBooks() {
        return this.books;
    }

    getAuthors() {
        let authors = [];
        this.books.map(function(item) {
            if (!authors.includes(item.author)) {
                authors.push(item.author);
            }
        });
        return authors;
    }

    getGenres() {
        let genres = [];
        this.books.map(function(item) {
            if (!genres.includes(item.genre)) {
                genres.push(item.genre);
            }
        });
        return genres;
    }
};
