import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtcService } from 'src/services/utc.service';
import timezones from 'src/assets/json/timezones.json';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-utc',
    templateUrl: './utc.component.html',
    styleUrls: ['./utc.component.css']
})
export class UtcComponent implements OnInit {
    form: FormGroup;
    timezones: any[];
    time: string;
    timezone: string;
    UTCconverter: string;
    isLoading: boolean;
    
    constructor(
        private utcService: UtcService,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
    ) { 
        this.timezones = [];
        this.createForm();
    }

    ngOnInit(): void {
        this.timezones = timezones
    }

    createForm() {
        this.form = this.formBuilder.group({
            time: ["", Validators.required],
            timezone: ["", Validators.required],
        })
    }

    calculate() {
        this.isLoading = true;
        this.time = this.form.get("time")?.value;
        this.timezone = this.form.get("timezone")?.value.toString();
        this.utcService.utcCalculate(this.time, this.timezone).subscribe(response => {
            this.UTCconverter = response.response.time + " UTC";
            this.isLoading = false;
        },
        (error) => {
            this.isLoading = false
            this.snackBar.open('Error en la solicitud.', '', {
                duration: 3000
            })

        })
    }

}
