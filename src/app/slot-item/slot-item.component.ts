import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-slot-item',
  standalone: true,
  imports: [],
  templateUrl: './slot-item.component.html',
  styleUrl: './slot-item.component.scss',
})
export class SlotItemComponent {
  @Input() slotdata: any;
}
