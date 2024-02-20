import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsMainContainerComponent } from './slots-main-container.component';

describe('SlotsMainContainerComponent', () => {
  let component: SlotsMainContainerComponent;
  let fixture: ComponentFixture<SlotsMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotsMainContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotsMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
