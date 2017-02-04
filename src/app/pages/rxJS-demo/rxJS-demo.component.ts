/**
 * Created by yxzhang on 2/2/17.
 */
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'rxjs-demo',
  templateUrl: './rxJS-demo.component.html',
  styleUrls: ['./rxJS-demo.component.css']
})
export class RxJSDemoComponent implements OnInit {
  public personName: string;
  public people: Array<Person>;
  public subject: Subject<any>;

  constructor() {}

  ngOnInit() {
    this.people = [];
    this.subject = new Subject<Action>();
    this.subject.subscribe(action => this.processAction(action));
    this.subject.next(new Action(ActionType.ADD_PERSON, new Person('John', 3)));
    this.subject.next(new Action(ActionType.ADD_PERSON, new Person('Tom', 0)));
    this.subject.next(new Action(ActionType.ADD_PERSON, new Person('Lucy', 2)));
  }

  processAction(action: Action) {
    switch(action.actionType) {
      case ActionType.ADD_PERSON:
        this.people.push(action.person);
        break;
      case ActionType.DELETE_PERSON:
        var index = this.people.indexOf(action.person);
        this.people.splice(index, 1);
        break;
      case ActionType.ADD_GUEST:
        var index = this.people.indexOf(action.person);
        this.people[index].guests++;
        break;
      case ActionType.DELETE_GUEST:
        if(action.person.guests > 0) {
          var index = this.people.indexOf(action.person);
          this.people[index].guests--;
        }
        break;
      default:
        console.log('invalid action');
        break;
    }
  }

  addPerson() {
    if(this.personName) {
      this.subject.next(new Action(ActionType.ADD_PERSON, new Person(this.personName, 0)));
      this.personName = '';
    }
  }

  deletePerson(person) {
    this.subject.next(new Action(ActionType.DELETE_PERSON, person));
  }

  addGuest(person) {
    this.subject.next(new Action(ActionType.ADD_GUEST, person));
  }

  deleteGuest(person) {
    this.subject.next(new Action(ActionType.DELETE_GUEST, person));
  }
}

export enum ActionType {
  ADD_PERSON,
  DELETE_PERSON,
  ADD_GUEST,
  DELETE_GUEST
}

export class Action {
  public actionType: ActionType;
  public person: Person;

  constructor(actionType: ActionType, person: Person) {
    this.actionType = actionType;
    this.person = person;
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
