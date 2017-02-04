/**
 * Created by yxzhang on 2/1/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular2-demo',
  templateUrl: './angular2-demo.component.html',
  styleUrls: ['./angular2-demo.component.css']
})
export class Angular2DemoComponent implements OnInit {
  public personName: string;
  public people: Array<Person>;

  constructor() {}

  ngOnInit() {
    this.people = [
      new Person('John', 0),
      new Person('Kris', 3),
      new Person('James', 1)
    ];
  }

  addPerson() {
    if(this.personName) {
      this.people.push(new Person(this.personName, 0));
      this.personName = '';
      console.log(this.people);
    }
  }

  deletePerson(person) {
    var index = this.people.indexOf(person);
    this.people.splice(index, 1);
    console.log(this.people);
  }

  addGuest(person) {
    person.guests++;
    console.log(this.people);
  }

  deleteGuest(person) {
    if(person.guests > 0) {
      person.guests--;
      console.log(this.people);
    }
  }
}

export class Person {
  public name: string;
  public guests: number;

  constructor(name, guests) {
    this.name = name;
    this.guests = guests;
  }
}
