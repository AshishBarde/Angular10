import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostExampleComponent } from './post.example.component';
  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent,PostExampleComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
exports:[
  PostExampleComponent
],
entryComponents:[
  PostExampleComponent
],
providers:[

],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PostModule { }