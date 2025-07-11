import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEntryComponent } from './date-entry.component';

describe('DateEntryComponent', () => {
  let component: DateEntryComponent;
  let fixture: ComponentFixture<DateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
