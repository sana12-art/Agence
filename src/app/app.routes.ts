import { Routes } from '@angular/router';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailPostsComponent } from './detail-posts/detail-posts.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';


export const routes: Routes = [{
    path: '',
    component: HomepageComponent,
    title: 'Home page'
},{
    
    path: 'posts',
    component: ListPostsComponent,
    title: 'List posts page'
},{
    path: 'posts/new',
    component: NewPostsComponent,
    title: 'New post page'
},{
    path: 'posts/:postId/detail',
    component: DetailPostsComponent,
    title: 'detail post page'
},{
    path: 'todos',
    component: ListTodoComponent,
    title: 'List todos page'

},{
    path: 'posts/:postId/edit',
    component: EditPostComponent,  // Assure-toi d'avoir créé ce composant
    title: 'Edit post page'
}];
