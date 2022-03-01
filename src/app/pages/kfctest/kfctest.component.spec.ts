import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfctestComponent } from './kfctest.component';

describe('KfctestComponent', () => {
  let component: KfctestComponent;
  let fixture: ComponentFixture<KfctestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KfctestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KfctestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
