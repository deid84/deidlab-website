import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourColumnComponent } from './portfolio-four-column.component';

describe('PortfolioFourColumnComponent', () => {
  let component: PortfolioFourColumnComponent;
  let fixture: ComponentFixture<PortfolioFourColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioFourColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioFourColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
