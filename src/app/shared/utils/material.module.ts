import { NgModule } from '@angular/core';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatListModule }  from '@angular/material/list';
import { MatIconModule }  from '@angular/material/icon';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatTableModule }  from '@angular/material/table';
import { MatInputModule }  from '@angular/material/input';
import { MatPaginatorModule }  from '@angular/material/paginator';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatSelectModule }  from '@angular/material/select';
import { MatDialogModule }  from '@angular/material/dialog';
import { MatProgressBarModule }  from '@angular/material/progress-bar';
import { MatTabsModule }  from '@angular/material/tabs';
import { MatSlideToggleModule }  from '@angular/material/slide-toggle';
import { MatTooltipModule }  from '@angular/material/tooltip';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { MatCardModule }  from '@angular/material/card';
import { MatExpansionModule }  from '@angular/material/expansion';
import { MatMenuModule  }  from '@angular/material/menu';
import { MatProgressSpinnerModule }  from '@angular/material/progress-spinner';
import { MatRadioModule }  from '@angular/material/radio';
import { MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatSidenavModule, MatButtonModule, MatGridListModule,
        MatListModule, MatIconModule, MatFormFieldModule, 
        MatTableModule, MatInputModule, MatPaginatorModule,
        MatCheckboxModule, MatSelectModule, MatDialogModule,
        MatTooltipModule, MatProgressBarModule,MatTabsModule,
        MatSlideToggleModule,MatTooltipModule, MatProgressBarModule,
        MatDatepickerModule, MatNativeDateModule, MatCardModule, MatExpansionModule,
        MatMenuModule, MatProgressSpinnerModule, MatRadioModule, MatSnackBarModule, MatAutocompleteModule,
        MatToolbarModule
    ],
    exports: [
        MatSidenavModule, MatButtonModule, MatGridListModule,
        MatListModule, MatIconModule, MatFormFieldModule, 
        MatTableModule, MatInputModule, MatPaginatorModule,
        MatCheckboxModule, MatSelectModule, MatDialogModule,
        MatTooltipModule, MatProgressBarModule,MatTabsModule,
        MatSlideToggleModule, MatDatepickerModule,
        MatNativeDateModule, MatCardModule, MatExpansionModule,
        MatMenuModule, MatProgressSpinnerModule, MatRadioModule,
        MatSnackBarModule, MatAutocompleteModule, MatToolbarModule
    ],
})
export class MaterialModule { }