import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    oldLof = '';

    printLog(message) {
        console.log('Incoming Log', message);
        console.log('Previous Log', this.oldLof);
        this.oldLof = message;
    }
}