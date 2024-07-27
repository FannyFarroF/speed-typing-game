import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { NgIf } from '@angular/common';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showGame = false;
  words: any = [];
  start = false;
  
  constructor(private wordsService: WordsService) { }

  ngOnInit(){
    this.getWords();
  }

  showWindowGame(){
    this.start = true;
    setTimeout(() => {
      this.showGame = true
    }, 3000);
  }

  getWords(){
    this.wordsService.getWords().subscribe(
      response => {
        this.words = response;
      }
    );
  }

}
