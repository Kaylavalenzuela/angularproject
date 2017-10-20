import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "kayla's app";
  pets: Array<Pet> = [];

  constructor(){}

  ngOnInit() {
    this.pets = [
      {
        name: 'Rocksie',
        type: 'Dog',
        age: 7
      },
      {
        name: 'Minerva',
        type: 'Cat',
        age: 5
      },
      {
        name: 'Mu Shu',
        type: 'Dog',
        age: 2
      }
    ]
  }
}

export class Pet {
  name: string;
  type: string;
  age: number;
}
