import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCrudComponent } from './json-crud.component';

describe('JsonCrudComponent', () => {
  let component: JsonCrudComponent;
  let fixture: ComponentFixture<JsonCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonCrudComponent]
    });
    fixture = TestBed.createComponent(JsonCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
