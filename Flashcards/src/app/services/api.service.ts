import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Buffer } from "buffer";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  CLIENT_ID: string = 'df9c7714a0d0452db91c9d4098f53c8f'
  CLIENT_SECRET: string = '01a9168ac47b41f7a4a20d780a9c3ac9'
  REDIRECT_URL: string = 'http://localhost:4200/dashboard'
  URL: string = 'https://accounts.spotify.com/api/token'
  token: any
  constructor(private http: HttpClient) { }

  public credentials = {
    accessToken: ''
  }
  public getToken(){

    const HEADERS = { 'Content-Type': 'application/x-www-form-urlencoded','Authorization':'Basic '+(Buffer.from(this.CLIENT_ID + ':' + this.CLIENT_SECRET).toString('base64'))}
    let body = 'grant_type=client_credentials'
    this.token = this.http.post(this.URL, body, {headers : HEADERS})
    return this.token;
  }

  public getRecommendations(seedArtist: string, seedTracks: string) {
    const url: string = `https://api.spotify.com/v1/recommendations?seed_artists=${seedArtist}&seed_tracks=${seedTracks}`;
    const headers = {'Authorization' : 'Bearer '+this.credentials.accessToken}

    return this.http.get(url, {headers});
  }

}
