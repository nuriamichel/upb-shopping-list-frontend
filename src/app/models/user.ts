export class User {
  constructor(id= 0, email='', photo='',firstname='') {
    this._id = id
    this.email = email
    this.photo = photo
    this.firstname = firstname
  }

  _id!:number;
  email!:string;
  photo!:string;
  firstname!:string;
}
