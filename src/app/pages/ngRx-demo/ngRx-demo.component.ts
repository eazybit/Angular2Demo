/**
 * Created by yxzhang on 2/1/17.
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ACTION_ADD_PERSON, ACTION_DELETE_PERSON, ACTION_ADD_GUEST, ACTION_DELETE_GUEST } from './people.reducer';

@Component({
  selector: 'ngrx-demo',
  templateUrl: './ngRx-demo.component.html',
  styleUrls: ['./ngRx-demo.component.css']
})
export class NgRxDemoComponent implements OnInit {
  public personName: string;
  public people;

  constructor(private store: Store<any>) {
    store.select('people')
      .subscribe(people => {
        this.people = people
      });
  }

  ngOnInit() {
    // this.people = [
    //   { name: 'John', guests: 0 },
    //   { name: 'Kris', guests: 3 },
    //   { name: 'James', guests: 1 }
    // ];
    this.store.dispatch({
      type: ACTION_ADD_PERSON,
      payload: {
        name: 'Damon',
        guests: 5
      }
    });
    this.store.dispatch({
      type: ACTION_ADD_PERSON,
      payload: {
        name: 'Derek',
        guests: 2
      }
    });
    this.store.dispatch({
      type: ACTION_ADD_PERSON,
      payload: {
        name: 'John',
        guests: 3
      }
    });
  }

  addPerson() {
      this.store.dispatch({
        type: ACTION_ADD_PERSON,
        payload: {
          name: this.personName,
          guests: 0
        }
      });
  }

  deletePerson(person) {
    this.store.dispatch({
      type: ACTION_DELETE_PERSON,
      payload: person
    });
  }

  addGuest(person) {
    this.store.dispatch({
      type: ACTION_ADD_GUEST,
      payload: person
    });
  }

  deleteGuest(person) {
    this.store.dispatch({
      type: ACTION_DELETE_GUEST,
      payload: person
    });
  }
}
