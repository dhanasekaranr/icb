import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from './movie-service';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [MovieService]

})

export class HomePage {

    movies: Array<any>;

    constructor(public navCtrl: NavController, private movieService: MovieService) {

    }

    searchMovieDB(event, key) {
        console.log(event.target.value);
        if (event.target.value.length > 2) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results;
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    }

    //itemTapped(event, movie) {
    //    this.navCtrl.push(MovieInfoPage, {
    //        movie: movie
    //    });
    //}
}
