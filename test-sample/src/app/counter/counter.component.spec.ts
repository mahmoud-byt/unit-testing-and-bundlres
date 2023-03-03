/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.counter).toBe(0)
  });
  it("click increse",()=>{
    // btn
    let btn= fixture.debugElement.queryAll(By.css("button"))[0]
    // act
    btn.triggerEventHandler("click")
    // assert
    expect(component.counter).toBe(1)
  })
});
