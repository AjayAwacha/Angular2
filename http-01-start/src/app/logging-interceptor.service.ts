import {  HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any> , next: HttpHandler) {
        console.log('request is on the way');
        console.log(req.headers);
        return next.handle(req).pipe(tap((res) => console.log('inside interceptor', res)));
    }
}