export class User {
  constructor(id= 0, email='', photo='',firstname='') {
    this.id = id
    this.email = email
    this.photo = photo
    this.firstname = firstname
  }

  id!:number;
  email!:string;
  photo!:string;
  firstname!:string;
}
