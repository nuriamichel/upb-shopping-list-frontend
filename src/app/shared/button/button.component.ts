import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

interface IButton {
  color: string;
  text: string;
  icon?: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  @Input() buttonCnf: IButton
  @Output() btnClick = new EventEmitter<string>()
  @Input() firstIcon: boolean
  title: string = 'Titulo'


  constructor() {
    // console.log('constructor')
    this.buttonCnf = {
      color: 'blue',
      text: 'Buscar'
    }
    this.firstIcon = false
  }

  ngOnDestroy(): void {
    // console.log('ondestroy')
  }

  ngOnInit(): void {
    // console.log('init')

  }
  ngDoCheck(): void {
    // console.log('Do check')
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes',changes)
    if (changes['buttonCnf'] && !changes['buttonCnf'].firstChange) {
      //solo cuando ocurra un cambio despues del inicial
    }
  }



  sendOutput() {
    this.btnClick.emit(this.buttonCnf.text)
  }

}
