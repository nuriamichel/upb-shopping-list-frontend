export class Lista {
  constructor( nameList='', email='', principal = false, share = false) {
    this.nameList = nameList
    this.email = email
    this.principal = principal
    this.share = share


  }
  nameList!:string;
  email!:string;
  principal!:boolean;
  share!:boolean;

}
