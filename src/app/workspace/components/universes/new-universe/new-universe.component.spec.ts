import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUniverseComponent } from './new-universe.component';

describe('NewUniverseComponent', () => {
  let component: NewUniverseComponent;
  let fixture: ComponentFixture<NewUniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUniverseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
