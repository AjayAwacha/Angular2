import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogTestComponent } from './log-test/log-test.component';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    LogTestComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LoggingService
  ]
})
export class LogTestModule { }
