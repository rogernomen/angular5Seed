import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {CoreModule} from '@app/core/core.module';
import {NotifierModule} from '@app/shared/notifier/notifier.module';
import {SharedModule} from '@app/shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        NotifierModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  describe('template', () => {
    it('should have a notifier component', () => {
      expect(el.nativeElement.querySelector('dgl-notifier')).not.toBeNull();
    });

    it('should have a router outlet component', () => {
      expect(el.nativeElement.querySelector('router-outlet')).not.toBeNull();
    });
  });
});
