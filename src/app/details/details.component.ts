import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Models/movie';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private mS : MoviesService, private location:Location) { }

  movie : Movie;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movie = this.mS.getById(id);    
  }

  back = function()
  {
    this.location.back();
  }

}
