import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req=req.clone({
            setHeaders:{
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		        "x-rapidapi-key": "762d79cb7fmsh8eafd21973a2feap127fe6jsn61d532e24cfd",
            },
            setParams:{
                key:'c06e3b099a8549399d1040c4c980c594'
            }
        });
        return next.handle(req);
    }
}