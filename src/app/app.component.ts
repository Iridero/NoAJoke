import { Component, OnInit } from '@angular/core';
// importamos el servicio
import { MyJokeApiService } from './my-joke-api.service';
import { joke } from '../models/joke.model';
import { flags } from '../models/flags.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private apiService: MyJokeApiService){
    this.datos=new joke(true,'','','','','',new flags(false,false,false,false,false,false),false,0,'');
this.apiService.getRandomJoke().subscribe(data=>{
      this.datos=data;
      console.warn(this.datos);
    });
    
  }
  datos:joke;
  ngOnInit(): void {
    
    
    
  }
  title = 'NoAJoke';
}
