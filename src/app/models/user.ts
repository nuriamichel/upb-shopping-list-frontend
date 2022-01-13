export class User {
  constructor(_id='', email='') {
    this._id = _id
    this.email = email
  }

  _id!:string;
  email!:string;
}
