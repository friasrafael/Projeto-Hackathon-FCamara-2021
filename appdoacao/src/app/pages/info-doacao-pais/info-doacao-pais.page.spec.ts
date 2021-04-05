import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoDoacaoPaisPage } from './info-doacao-pais.page';

describe('InfoDoacaoPaisPage', () => {
  let component: InfoDoacaoPaisPage;
  let fixture: ComponentFixture<InfoDoacaoPaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDoacaoPaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDoacaoPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
