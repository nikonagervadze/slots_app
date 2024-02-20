import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarContainerComponent } from './sidebar-container/sidebar-container.component';
import { SlotsMainContainerComponent } from './slots-main-container/slots-main-container.component';
import { SlotsFacade } from './+state/slots.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarContainerComponent,
    SlotsMainContainerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'slots-app';
  private readonly slotsFacade = inject(SlotsFacade);
  ngOnInit(): void {
    this.slotsFacade.init();
  }
}
