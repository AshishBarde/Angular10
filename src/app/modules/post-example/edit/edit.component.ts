import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post/post';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
    
  id: number;
  post: Post;
  form: FormGroup;
  
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
    
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
   
}