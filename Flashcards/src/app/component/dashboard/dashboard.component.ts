import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FlippableCardComponent } from 'src/app/flippable-card/flippable-card.component';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChildren(FlippableCardComponent)
  flippableCards!: QueryList<FlippableCardComponent>;

  cardContent: string = '';
  data: any = {};
  tracks: any[] = [];
  album: any = {};
  images: any[] = [];
  seedArtist: string = '7FBcuc1gsnv6Y1nwFtNRCb';
  seedTrack: string = '16Fp67kTFhH0XK5Cl6Oz7r';
  flipCardsFlag: boolean = false;
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.getAuthToken()

  }

  getAuthToken(){
    this.apiService.getToken().subscribe((token: any) => {
      this.data = token;
      this.apiService.credentials.accessToken = this.data.access_token
    })
  }

  getRecommendationsShow(){
    this.apiService.getRecommendations(this.seedArtist, this.seedTrack).subscribe((data: any) => {
      this.data = data;
      this.tracks = data.tracks

    })
    let i = 0
    this.flippableCards.forEach((card) => {
      card.cardContentback = `#${i+1}`
      i = i + 1
    });

    this.flipCardsFlag = true
  }

  enviar() {
    // Update the card content and trigger card flips
    let i = 0
    this.flippableCards.forEach((card) => {
      card.cardContent = this.tracks[i].name;
      card.cardImageURL = this.tracks[i].album.images[0].url;
      card.artistName = this.tracks[i].album.artists[0].name;
      card.spotifyURL = this.tracks[i].external_urls.spotify;
      card.flipCard();
      i = i + 1
    });
  }

}

