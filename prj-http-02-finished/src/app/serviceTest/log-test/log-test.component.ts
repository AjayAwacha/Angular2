import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.loggingService.printLog('data from component');
  }

}
