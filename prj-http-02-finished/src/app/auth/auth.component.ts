import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

// Depandancy of adding component dynamically
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../shared/alert/alert.component';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogInMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,

    private compFactResolver: ComponentFactoryResolver,
    private viewContRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  switchMode() {
    this.isLogInMode = !this.isLogInMode;
  }

  handleForm(fr: NgForm) {
    if (!fr.valid) {
      console.log('form is not valid!');
      return
    }
    const userName = fr.value.email;
    const password = fr.value.password;
    if (this.isLogInMode) {
      this.isLoading = true;
      this.authService.signin(userName, password).subscribe((resp) => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      }, (errMessage) => {
        console.log(errMessage);
        this.isLoading = false;
        this.error = errMessage;
        this.dynamicComponentHandler(errMessage);
      })
    } else {
      this.isLoading = true;
      this.authService.signup(userName, password).subscribe((resp) => {
        this.isLoading = false;
        console.log(resp);
        this.router.navigate(['/recipes']);
      }, (errMessage) => {
        this.isLoading = false;
        this.error = errMessage;
      })
    }
  }

  handleOnClose() {
    this.error = null;
  }

  dynamicComponentHandler(message: string) {
    const compFactory = this.compFactResolver.resolveComponentFactory(AlertComponent);

    const componentRef = this.viewContRef.createComponent(compFactory);

    componentRef.instance.message = message;
    componentRef.instance.onCloseModal.subscribe(() => {
      componentRef.destroy();
    })
    this.viewContRef.insert(componentRef.hostView);
  }
}
