import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library',
  imports: [Book, CommonModule],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class Library {
  bookList: any[] = [
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "author": "Geoffrey Chaucer",
      "country": "England",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "author": "Anton Chekhov",
      "country": "Russia",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    }
  ]

  countries: string[] = [];
  
  isShowPage: boolean = false;
  filter: string = "All";

  constructor() {
    for (const book of this.bookList) {
      if (!this.countries.includes(book.country))
        this.countries.push(book.country);
    }
  }

  getStyle(book: any): any {
    const color: string = book.country == "Italy" ? "cyan" : "";

    return {
      "backgroundColor": color
    };
  }

  onChangeShowPage(): void {
    this.isShowPage = !this.isShowPage;
  }

  onChangeFilterCombo($event: Event): void {
    const selectElement: HTMLSelectElement = $event.target as HTMLSelectElement;
    this.filter = selectElement.value;
  }

  onClickBookTitle(book: any): void {
    this.bookList.splice(this.bookList.indexOf(book), 1);
  }

  onClickBookDelete($event: Event) {
    this.bookList.splice(this.bookList.indexOf($event), 1);
  }
}
