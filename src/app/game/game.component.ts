import { Component, model } from '@angular/core';
import { WordsService } from '../words.service';
import { FormControl, FormsModule } from '@angular/forms';
import { ResultsComponent } from '../results/results.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule, ResultsComponent, NgIf],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  list = ['primera', 'nuestro', 'marina', 'número', 'lejano', 'placa']
  word = 'nuestro';
  written_word = '';
  score = 0;
  time = 0;
  intervalo: any;

  ngOnInit(): void{
    this.loadWords();
    this.temporizador()
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
  
  loadWords(): void{
    const word = this.list[Math.floor(Math.random() * this.list.length)]
    this.word = word;
  }

  temporizador(): void{
    this.intervalo = setInterval(() =>{
      if (this.time > 0) {
        this.time--;
      }else{
        this.written_word = "";
        clearInterval(this.intervalo)
      }
    }, 1000)
  }

  onKeyDown(event: KeyboardEvent){
    const char = event.key;
    const nextCharIndex = this.written_word.length;

    if (char === 'Backspace' || char === 'ArrowLeft' || char === 'ArrowRight' || char === 'Delete')
      return;

    if (char !== this.word[nextCharIndex])
      event.preventDefault();
  }

  compare_word(){
    if (this.word === this.written_word) {
      this.score += 1;
      this.written_word = '';
      this.loadWords();
    }
  }
  
}
