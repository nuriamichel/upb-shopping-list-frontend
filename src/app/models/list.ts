export class List {
  constructor(email= '', lista='', principal=false,share=false) {
    this.email = email
    this.lista = lista
    this.principal = principal
    this.share = share
  }

  email!:string;
  lista!:string;
  principal!:boolean;
  share!:boolean;
}
