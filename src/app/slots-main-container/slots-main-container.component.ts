import { Component } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { SlotsListComponent } from '../slots-list/slots-list.component';

@Component({
  selector: 'app-slots-main-container',
  standalone: true,
  imports: [FiltersComponent, SlotsListComponent],
  templateUrl: './slots-main-container.component.html',
})
export class SlotsMainContainerComponent {}
