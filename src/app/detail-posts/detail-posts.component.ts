import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-posts.component.html',
  styleUrls: ['./detail-posts.component.scss']
})
export class DetailPostsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  postId = -1;
  postDetail: Post | null = null;

  constructor() {
    this.postId = Number(this.route.snapshot.params['postId']);
    this.postsService.getPostById(this.postId).then((post: Post | null) => {
      if (post) {
        this.postDetail = post; // Assigner post si ce n'est pas null
      } else {
        console.error('Post non trouvé');
        // Gestion de l'absence de post (par exemple, afficher un message)
      }
    }).catch(error => {
      console.error('Erreur lors de la récupération du post:', error);
    });
  }
}
