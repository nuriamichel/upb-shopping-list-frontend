import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  elem: HTMLElement
  sidebarOpened: boolean
  unsubscribe$ = new Subject()
  private SIDEBAR: HTMLElement | null

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private _sibarService: SidebarService,) {
    this.elem = this._elementRef.nativeElement
    this.SIDEBAR = null
    this.sidebarOpened = false
  }

  ngOnDestroy(): void {
    //this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  ngOnInit(): void {
    this.SIDEBAR = this.elem.querySelector('app-sidebar');
    this.listenSidebarAction()
  }

  listenSidebarAction() {
    this._sibarService.sidebarAction$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (this.sidebarOpened) {
        //cerrar sidebar
        this._renderer.setStyle(this.SIDEBAR, 'transform', 'translateX(-400px)')
        this._renderer.removeStyle(this.SIDEBAR, 'z-index')
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar)')
        this.sidebarOpened = false

      } else {
        //abrir
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar-large)')
        this._renderer.setStyle(this.SIDEBAR, 'transform', 'translateX(0)')
        this._renderer.setStyle(this.SIDEBAR, 'z-index', '1')
        this.sidebarOpened = true
      }
    })
  }

}
