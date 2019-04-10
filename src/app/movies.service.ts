import { Injectable } from '@angular/core';
import {Movie} from './Models/movie'



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies : Movie[] = [
    {id : 0, title : 'The Shawshank Redemption', pictureName : 'shawshank', year : 1994, description : 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'},
    {id : 1, title : 'The Godfather', pictureName : 'godfather', year : 1972, description : 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'},
    {id : 2, title : 'Pulp Fiction',  pictureName : 'pulpfiction', year : 1994, description : "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."}
  ];

  getAll() : Movie[]
  {
    return this.movies;
  }
    
  getById(id : number) : Movie
  {
    return this.movies[id];
  }
  constructor() { }
}
