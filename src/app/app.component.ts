import {Component} from '@angular/core';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: { name: string; id: number }[] = [
    {
      id: 1,
      name: 'Foo (id = 1)'
    },
    {
      id: 1,
      name: 'Banana Test (id = 1)'
    },
    {
      id: 2,
      name: 'Apple Test (id = 2)'
    },
    {
      id: 3,
      name: 'Lemon Test (id = 3)'
    },
    {
      id: 4,
      name: 'Grape Test (id = 4)'
    },
  ];

  public groupBy({item, index}): number {
    return item.name;
  }
}
