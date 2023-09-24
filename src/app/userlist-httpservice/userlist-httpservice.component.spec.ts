import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistHttpserviceComponent } from './userlist-httpservice.component';

describe('UserlistHttpserviceComponent', () => {
  let component: UserlistHttpserviceComponent;
  let fixture: ComponentFixture<UserlistHttpserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlistHttpserviceComponent]
    });
    fixture = TestBed.createComponent(UserlistHttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
