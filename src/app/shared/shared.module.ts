
// Core Modules
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Components
import { LeftPanelComponent } from './left-panel/left-panel-component';
import { HeaderComponent } from './header/header-component';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    
  ],
  declarations: [
    LeftPanelComponent,
    HeaderComponent,
  ],
  exports: [
    LeftPanelComponent,
    HeaderComponent,
  ],
  entryComponents: [
   
  ],
  providers: [
   
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {

}
