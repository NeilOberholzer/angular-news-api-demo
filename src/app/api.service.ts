import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = '214e27078aa24e4a8f28f506fdd08134';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=214e27078aa24e4a8f28f506fdd08134');
  }
}
