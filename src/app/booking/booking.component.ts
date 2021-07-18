import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BookingService } from 'src/services/booking.service';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
    displayedColumns: string[] = ['bookingId', 'name', 'bookingTime', 'streetAddress', 'bookingPrice'];
    dataSource: MatTableDataSource<any>;
    form: FormGroup;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    bookings: any;
    isLoading: boolean;

    constructor(
        private bookingService: BookingService,
        private router: Router,
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
    ) { 
        this.createForm()
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.bookingService.getAllBooking().subscribe(response => {
            this.bookings = response;
            this.loadDataSource(this.bookings)
        },
        (error) => {
            this.isLoading = false
            if (error.status == 401) {
                this.router.navigate(["/login"]);
                this.snackBar.open('No está autorizado.', '', {
                    duration: 3000
                })
            }
        })
    }

    loadDataSource(data: any) {
        setTimeout(() => {
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;    
        }, 0);
        

        this.isLoading = false;
    }

    createForm() {
        this.form = this.formBuilder.group({
            id: ["", []],
            price: ["", []],
            options: ["like", []],
        })
    }

    applyFilter() {
        const idFilter = this.form.get('id')?.value
        const priceFilter = this.form.get('price')?.value
        const filteredData = []

        if (idFilter === '' && priceFilter === '') {
            this.loadDataSource(this.bookings)
        }
        else {
            for (let i = 0; i < this.bookings.length; i++) {
                if (idFilter != '' && !this.optionsFilter('bookingId', this.bookings[i], idFilter)) {
                    continue;                    
                }
                if (priceFilter != '' && !this.optionsFilter('bookingPrice', this.bookings[i], priceFilter)) {
                    continue;
                }
                filteredData.push(this.bookings[i]);
            }
            this.loadDataSource(filteredData);
        }
        
    }

    optionsFilter(field: string, row: any, value: string)  {
        const optionsFilter = this.form.get('options')?.value
        if (optionsFilter === "like") {
            if (row[field].toString().includes(value)) {
                return true;
            }
        }
        else if (optionsFilter === "greaterThan") {
            if (row[field] >= value) {
                return true;
            }
        }
        else {
            if (row[field] <= value) {
                return true;
            }
        }
        return false
    }


}
