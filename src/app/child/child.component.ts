import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/interfaces/item'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() item: Item = { name: '', imageFile: '' };

  constructor() { }

  ngOnInit(): void {
  }

  buildURL(imageFileName: string): string {
    return `../../../../assets/images/${imageFileName}`;
  }
}
