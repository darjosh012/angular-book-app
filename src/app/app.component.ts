import { Component, OnInit } from '@angular/core';

import { FormBook } from './form-book'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor() { }
 
  ngOnInit() {

  }

  title = 'Book Store';

  addForm: FormBook = {
    name: '',
    author: '',
    year_released: ''
  }

 editForm = {
    id: '',
    name: '',
    author: '',
    year_released: ''
  }
  
  selected_book = 'none'

  books: any[] = [{
    id: 1,
    name: 'Harry Potter Book 1',
    author: 'secret',
    year_released: '2000'
  }, {
    id: 2,
    name: 'Harry Potter Book 2',
    author: 'none',
    year_released: '2003'
  }];

  ctr = this.books.length

  addBook() {
    if (!this.addForm) return
    this.ctr++
    this.books.push({id: this.ctr, ...this.addForm}) //so will not mutate
    this.clearForm()
  }

  deleteBook(id) {
    console.log('passed, id: ', id)
    let processedBooks = this.books.filter((book)=>{
      return book.id != id
    })

    this.books = processedBooks
  }

  selectBook(id) {
    let selectedBook = this.books.find((book)=>{
      return book.id == id
    })

    this.editForm = {...selectedBook}

  }

  editBook() {
     let processedBooks = this.books.filter((book)=>{
      if (book.id == this.editForm.id) book = {...this.editForm}
      console.log(book, 'book loop')
      return book
    })
     
    this.books = {...processedBooks}
    console.log(processedBooks, 'edited')
    console.log(this.books, 'edited')
  }

  clearForm() {
    this.clearAddForm()
    this.clearEditForm()
  }

  clearAddForm() {
    this.addForm = {
      name: '',
      author: '',
      year_released: ''
    }
  }
  clearEditForm() {
    this.editForm = {
      id: '',
      name: '',
      author: '',
      year_released: ''
    }
  }
}
