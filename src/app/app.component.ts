import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'upb-shopping-list-frontend';

  elem: HTMLElement

  sidebarOpened: boolean

  unsubscribe$ = new Subject()

  private SIDEBAR: HTMLElement | null

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private _sidebarService: SidebarService) {
    this.elem = this._elementRef.nativeElement
    this.SIDEBAR = null
    this.sidebarOpened = false
  }
  ngOnInit(): void {
    this.SIDEBAR = this.elem.querySelector('app-sidebar');
    this.listenSidebarAction();
    console.log('sidebar', this.sidebarOpened)
  }
  ngOnDestroy(): void {
    //this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
  listenSidebarAction() {
    this._sidebarService.sidebarAction$.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      if (this.sidebarOpened) {
        //cerrar sidebar
        this._renderer.setStyle(this.SIDEBAR, 'transform', 'translateX(calc(-1 * (400px))')
        this._renderer.removeStyle(this.SIDEBAR, 'z-index')
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar)')
        this.sidebarOpened = false
      } else {
        //abrir
        // this._renderer.setStyle(this.SIDEBAR,'width','var(--width-sidebar-large)')
        this._renderer.setStyle(this.SIDEBAR, 'transform', 'translateX(0)')
        this._renderer.setStyle(this.SIDEBAR, 'z-index', '1')
        this.sidebarOpened = true
        console.log('sidebar', this.sidebarOpened)
      }
    })
  }
}
