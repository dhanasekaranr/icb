import { SettingsPageModule } from './settings.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

describe('Tab2Page', () => {
  let component: SettingsPageModule;
  let fixture: ComponentFixture<SettingsPageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsPageModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
