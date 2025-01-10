import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import des modules nécessaires
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent {
  postList: Post[] = [];
  selectedPost: Post | null = null;

  constructor(private postsService: PostsService) {
    this.loadPosts();
  }

  // Méthode pour charger les posts
  async loadPosts() {
    this.postList = await this.postsService.getPosts();
  }

  // Méthode pour afficher les détails d'un post
  showDetails(post: Post) {
    this.selectedPost = this.selectedPost === post ? null : post;
  }

  // Méthode pour supprimer un post
  async deletePost(postId: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce post ?')) {
      try {
        await this.postsService.deletePost(postId);
        this.postList = this.postList.filter(post => post.id !== postId);
        alert('Post supprimé avec succès !');
      } catch (error) {
        console.error('Erreur lors de la suppression du post :', error);
        alert('Une erreur est survenue lors de la suppression du post.');
      }
    }
  }
}
