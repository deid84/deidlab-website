import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeColumnComponent } from './portfolio-three-column.component';

describe('PortfolioThreeColumnComponent', () => {
  let component: PortfolioThreeColumnComponent;
  let fixture: ComponentFixture<PortfolioThreeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioThreeColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
