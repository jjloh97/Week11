import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actormovie',
  templateUrl: './actormovie.component.html',
  styleUrls: ['./actormovie.component.css']
})
export class ActormovieComponent implements OnInit {

  private actorsDB: any[] = [];
  private moviesDB: any[] = [];
  private movieActor: any[] = [];
 
  title: string = "";
  year: number = 0;
  movieId: string = ""; 
  actorsName:string="";
  actorsId: string = "";

constructor(private dbService: DatabaseService, private router: Router) {}

  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  //Get all Movies
  onGetMovies(){
    return this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
        });
      }

      //Update movie
      onUpdateMovie() {
        if (this.actorsId != ""){
          this.movieActor.push(this.actorsId);
        }
        let obj = { title: this.title, year: this.year ,actors:this.movieActor};
        this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
          this.onGetMovies();
        });
      }

  //Saving Actor Name and ID
  onSelectActor(item) {	 
    this.actorsName = item.name;
    this.actorsId = item._id;
  }

//Saving movie title, year and id
onSelectUpdate(item) {
  this.title = item.title;
  this.year = item.year;
  this.movieId = item._id;
  this.movieActor = item.actors;
}

  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

}
