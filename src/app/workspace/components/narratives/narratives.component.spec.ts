import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativesComponent } from './narratives.component';

describe('NarrativesComponent', () => {
  let component: NarrativesComponent;
  let fixture: ComponentFixture<NarrativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarrativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarrativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
