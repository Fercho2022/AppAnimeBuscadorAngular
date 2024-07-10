import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {

  searchTerm: string = '';
  constructor(private _serviceAnime:AnimeService) { }

  ngOnInit(): void {
  }

  Search(){

    this._serviceAnime.getAnime(this.searchTerm).subscribe(result=>{
      console.log(result);
      this._serviceAnime.addResultAnime(result.data);
      this.searchTerm='';

    })

  }
}
