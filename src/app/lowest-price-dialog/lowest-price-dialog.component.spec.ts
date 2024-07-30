import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestPriceDialogComponent } from './lowest-price-dialog.component';

describe('LowestPriceDialogComponent', () => {
  let component: LowestPriceDialogComponent;
  let fixture: ComponentFixture<LowestPriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowestPriceDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowestPriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
