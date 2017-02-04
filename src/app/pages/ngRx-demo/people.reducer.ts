/**
 * Created by yxzhang on 2/2/17.
 */
import { Person } from './person.model';
import { Action } from '@ngrx/store';

export const ACTION_ADD_PERSON = 'ADD_PERSON';
export const ACTION_DELETE_PERSON = 'DELETE_PERSON';
export const ACTION_ADD_GUEST = 'ADD_GUEST';
export const ACTION_DELETE_GUEST = 'DELETE_GUEST';

export const peopleReducer = (state: Array<Person> = [], action:Action) => {
  switch(action.type) {
    case ACTION_ADD_PERSON:
          return [ ...state, action.payload];
    case ACTION_DELETE_PERSON:
    {
      let index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    }
    case ACTION_ADD_GUEST:
    {
      let index = state.indexOf(action.payload);
      state[index].guests++;
      return state;
    }
    case ACTION_DELETE_GUEST:
    {
      let index = state.indexOf(action.payload);
      if(state[index].guests > 0) {
        state[index].guests--;
      }
      return state;
    }
    default:
      break;
  }
};
