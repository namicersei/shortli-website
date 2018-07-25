import { Component, OnInit } from '@angular/core';
import { UrlHandlerService } from '../core/url-handler.service';

import { LocalStorageService } from '../core/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: String;
  listOfUrls = [];
  shortUrl: String;

  constructor(private urlhandler: UrlHandlerService, private localstorage: LocalStorageService, private router: Router) { }

  getList() {
    this.urlhandler.getListOFTinyUrlsCreated().subscribe((response) => {
      if (response) {
        console.log(response);
        this.listOfUrls = response;
      }
    });
  }
  ngOnInit() {
    this.getList();
  }

  sendUrl() {
    // this.isDataLoaded = false;
    this.urlhandler.getTinyUrl(this.value).subscribe((response) => {
      this.getList();
    });
    // console.log(this.listOfUrls);
  }

  checkShortUrl(returnedShortUrl) {
    console.log(returnedShortUrl);
    const res = returnedShortUrl.split('/').pop();
    this.urlhandler.openWebsiteViaShortUrl(res).subscribe((response) => {
      console.log(response);
    });
  }

  logOut() {
    this.localstorage.clearToken();
    this.router.navigate(['/login']);
  }

}
