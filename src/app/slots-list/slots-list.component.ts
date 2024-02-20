import { Component, inject } from '@angular/core';
import { SlotItemComponent } from '../slot-item/slot-item.component';
import { SlotsFacade } from '../+state/slots.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slots-list',
  standalone: true,
  imports: [SlotItemComponent, CommonModule],
  templateUrl: './slots-list.component.html',
})
export class SlotsListComponent {
  private readonly slotsFacade = inject(SlotsFacade);
  readonly providerGames$ = this.slotsFacade.getProviderGames();
}
