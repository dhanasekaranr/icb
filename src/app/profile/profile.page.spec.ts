import { ProfilePageModule } from './profile.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

describe('Tab2Page', () => {
  let component: ProfilePageModule;
  let fixture: ComponentFixture<ProfilePageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
