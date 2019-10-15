import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RentalPage } from './rental.page';

describe('Tab3Page', () => {
  let component: RentalPage;
  let fixture: ComponentFixture<RentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentalPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
