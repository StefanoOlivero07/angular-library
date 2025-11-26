import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  @Input() book!: any;
  @Input() isShowPage!: boolean;
  @Output() bookToDelete: EventEmitter<any> = new EventEmitter<any>();

  onClickBookTitle(book: any): void {
    this.bookToDelete.emit(book);
  }
}
