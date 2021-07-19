import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isActive: boolean

    constructor(
        private router: Router
    ) {
        this.isActive = true;
        if (this.router.url.includes("/utc")) {
            this.isActive = false;
        }
    }

    ngOnInit(): void {
    }

    logout() {
        localStorage.removeItem("token");
        this.router.navigate(["/login"]);
    }

}
