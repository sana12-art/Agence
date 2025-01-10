import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // Méthode existante pour récupérer tous les posts
  getPosts = async (): Promise<Post[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Vérification du statut de la réponse
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des posts');
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      return []; // Retourne un tableau vide en cas d'erreur
    }
  }

  // Méthode existante pour récupérer un post par son ID
  getPostById = async (postId: number): Promise<Post | null> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      
      // Vérification du statut de la réponse
      if (!response.ok) {
        throw new Error('Post non trouvé');
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      return null; // Retourne null si l'erreur est capturée
    }
  }

  // Nouvelle méthode pour supprimer un post par son ID
  deletePost = async (postId: number): Promise<void> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
      });
      
      // Vérification du statut de la réponse
      if (!response.ok) {
        throw new Error('Erreur lors de la suppression du post');
      }
    } catch (error) {
      console.error(error);
      throw error; // On relance l'erreur après l'avoir loguée
    }
  }
}
