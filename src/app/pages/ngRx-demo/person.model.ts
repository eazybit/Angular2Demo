/**
 * Created by yxzhang on 2/2/17.
 */
export class Person {
  public name: string;
  public guests: number;

  constructor(person) {
    this.name = person.name;
    this.guests = person.guests;
  }
}
