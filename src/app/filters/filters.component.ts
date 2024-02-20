import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { SlotsFacade } from '../+state/slots.facade';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements AfterViewInit {
  private readonly slotsFacade = inject(SlotsFacade);
  readonly providers$ = this.slotsFacade.getProviders();
  readonly categories$ = this.slotsFacade.getCategories();

  allProvidersShown = false;
  selectedIndex = -1;
  selectedCategoryIndex = -1;

  ngAfterViewInit(): void {}

  toggleAllProvidersShown(): void {
    this.allProvidersShown = !this.allProvidersShown;
  }

  handleClick(provider: any, index: number) {
    console.log(this.allProvidersShown);
    this.selectedCategoryIndex = -1;
    this.selectedIndex = index;
    this.slotsFacade.fetchProviderGames(provider.provider);
  }

  handleCategory(category: any, index: number) {
    console.log(category);
    this.selectedIndex = -1;
    this.selectedCategoryIndex = index;
    console.log(category.category);
    this.slotsFacade.getCategoryGames(category.category);
  }
}
