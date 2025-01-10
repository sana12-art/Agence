import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-posts.component.html',
  styleUrl: './new-posts.component.scss'
})
export class NewPostsComponent {
  postForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log(this.postForm.value);
    }
  }
}
