import { Component } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  firstName: string = 'Ariana';

  message: string = 'Congrats! You are almost done with Unit 1!';
  messageColor: string = 'seagreen';

  words: string[] = ['JavaScript', 'Angular', 'TypeScript', 'Java', 'Spring Boot'];

  items: Item[] = [
    { name: 'book', imageFile: 'book.png' },
    { name: 'laptop', imageFile: 'laptop.png' },
    { name: 'lamp', imageFile: 'lamp.png' },
    { name: 'pens', imageFile: 'pens.png' },
  ]

  selectedItem: Item = this.items[0];

  selectItem(selected: Item): void {
    this.selectedItem = selected;
  }
}
