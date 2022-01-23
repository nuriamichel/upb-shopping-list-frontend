import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Output() btnClick = new EventEmitter<string>()

  formList: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formList = this._fb.group({
      item: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    });
  }

  ngOnInit(): void {
  }

  sendForm() {
    const valid = this.formList.valid;
    if (valid) {
      console.log('FORM VALUE: ', this.formList.value);
      this.formList.reset();
    } else {
      this.formList.markAllAsTouched();
    }
    this.formList.reset();
  }

}
