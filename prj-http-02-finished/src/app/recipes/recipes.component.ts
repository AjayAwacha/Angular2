import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../serviceTest/logging.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.printLog('Test1');
  }

}
