import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StructureOfShortUrl } from './structureOfShortUrl';

@Injectable()
export class UrlHandlerService {
private urlLink = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

getTinyUrl(originalUrl) {
  console.log('**********', originalUrl);
return this.http.post<any>('http://localhost:3000/getShort',  { originalUrl });
}

openWebsiteViaShortUrl(id) {
  return this.http.get<any>(this.urlLink + id, {responseType: 'json'});
}

login(username, password) {
  return this.http.post<any>('http://localhost:3000/login', {username, password});
}

getListOFTinyUrlsCreated() {
return this.http.get<any>('http://localhost:3000/redirect/getList');
}
}
