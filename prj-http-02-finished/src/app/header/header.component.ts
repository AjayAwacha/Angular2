import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';

import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router
    ) {}
  
  isAuthenticated = false;
  userSub: Subscription;

  ngOnInit(): void {
   this.userSub = this.authService.user.subscribe((user) => {
    this.isAuthenticated = !!user;
   })
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
