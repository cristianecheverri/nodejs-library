import sql from '../../config/database.js';

export async function getAllBooks() {
    const books = await sql`
      select
        *
      from books;
    `;
    return books;
}

export async function getBookById(id) {
    const book = await sql`
      select
        *
      from books WHERE id_book = ${id};
    `;
    return book;
}

export async function storeNewBook(book) {
    const new_book = await sql`
        insert into books ${sql(book, 'book_name')};`;
    return new_book;
}

export async function updateBook(id, book) {
  const update_book = await sql `
  update books set ${sql(book, 'book_name')} where id_book = ${ id };`;
  return update_book;
}