import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

import { LocalStorageService  } from './local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService) { }

    intercept(request, next) {
    const requestWithToken = request.clone({
        headers: request.headers.set(
            'Authorization', `Bearer ${this.localStorage.getToken()}`
        )
    });
    return next.handle(requestWithToken);
    }
}