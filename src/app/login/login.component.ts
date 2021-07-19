import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';
import { User } from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: User;
    form: FormGroup
    isLoading: boolean

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private snackBar: MatSnackBar,
    ) {
    }

    ngOnInit(): void {
        this.createForm();
    }
    
    createForm() {
        this.form = this.formBuilder.group({
            user: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required]
        })
    }

    login() {
        this.isLoading = true
        this.user = new User();
        this.user.user = this.form.value.user;
        this.user.pass = this.form.value.password;
        console.log(this.user)
        this.loginService.login(this.user).subscribe(response => {
            localStorage.setItem("token", response.sessionTokenBck)
            this.isLoading = false
            this.router.navigate(["/bookings"]);
        },
        (error) => {
            this.isLoading = false
            if (error.status == 400) {
                this.snackBar.open('Credenciales inválidas.', '', {
                    duration: 3000
                })
            }
        })
        
    }
}
