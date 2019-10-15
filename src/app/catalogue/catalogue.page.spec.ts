import { CataloguePageModule } from './catalogue.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

describe('Tab2Page', () => {
  let component: CataloguePageModule;
  let fixture: ComponentFixture<CataloguePageModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CataloguePageModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CataloguePageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
