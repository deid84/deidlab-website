import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoColumnComponent } from './portfolio-two-column.component';

describe('PortfolioTwoColumnComponent', () => {
  let component: PortfolioTwoColumnComponent;
  let fixture: ComponentFixture<PortfolioTwoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioTwoColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioTwoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
