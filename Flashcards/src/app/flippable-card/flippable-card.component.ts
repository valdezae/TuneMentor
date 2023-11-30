import { Component, Input } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-flippable-card',
  templateUrl: './flippable-card.component.html',
  styleUrls: ['./flippable-card.component.css'],
})
export class FlippableCardComponent {
  @Input() cardContent!: string;
  cardContentback: string = 'Click "Generate Recommendations"';
  isFlipped: boolean = true;
  cardImageURL: string = ''
  artistName: string = ''
  spotifyURL: string = ''
  constructor(private apiService: ApiService) {
  }

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
