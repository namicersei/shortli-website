import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageService } from '../core/local-storage.service';
import { UrlHandlerService } from '../core/url-handler.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

token: String;
registeredUser = true;
  constructor(private router: Router , private urlhandler: UrlHandlerService, private localstorage: LocalStorageService) { }

  ngOnInit() {
  }

  login(username, password) {
  this.urlhandler.login(username, password).subscribe((response) => {
    if (response.token) {
      console.log(response);
      this.localstorage.setToken(response.token);
      const details = jwt_decode(response.token);
      this.router.navigate(['/home']);
    } else {
this.registeredUser = false;
    }
});
  }

}
