import { RegistrationPageModule } from './registration.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

describe('Tab2Page', () => {
  let component: RegistrationPageModule;
  let fixture: ComponentFixture<RegistrationPageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationPageModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
