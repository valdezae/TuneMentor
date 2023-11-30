import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlippableCardComponent } from './flippable-card.component';

describe('FlippableCardComponent', () => {
  let component: FlippableCardComponent;
  let fixture: ComponentFixture<FlippableCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlippableCardComponent]
    });

    fixture = TestBed.createComponent(FlippableCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card content input property', () => {
    expect(component.cardContent).toBeUndefined();
  });

  it('should flip the card when isFlipped is true', () => {
    component.isFlipped = true;
    fixture.detectChanges();

    const cardFront = fixture.nativeElement.querySelector('.card-front');
    const cardBack = fixture.nativeElement.querySelector('.card-back');

    expect(cardFront.style.transform).toEqual('rotateY(180deg)');
    expect(cardBack.style.transform).toEqual('rotateY(0deg)');
  });

  // Add more tests as needed for your specific component functionality.
});