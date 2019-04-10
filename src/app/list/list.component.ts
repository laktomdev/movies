import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies : Movie[];

  constructor(private mS : MoviesService) { }

  ngOnInit() {
    this.movies = this.mS.getAll();
    console.table(this.movies);
  }

}
