import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent {
  @Output() enviarClicked = new EventEmitter<void>();
  cardContent: string | undefined;

  enviar() {
    this.enviarClicked.emit();
  }
}








