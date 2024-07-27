import { Component, ElementRef, Input, afterRender, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultsComponent } from '../results/results.component';
import { NgIf, NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule, ResultsComponent, NgIf, NgFor, NgClass],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  @Input() words = [];
  written_word   = '';
  word: string   = '';
  score          = 0;
  time           = 60;
  result         = '';
  intervalo: any;
  letterStates: string[] = [];

  constructor(elementRef: ElementRef){
    afterRender(()=>{
      elementRef.nativeElement.querySelector('input')?.focus();
    });
  }

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
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.word = this.word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    this.letterStates = new Array(this.word.length).fill('');
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

    if (char !== this.word[nextCharIndex]){
      event.preventDefault();
      this.letterStates[nextCharIndex] = 'correct';
    }else{
      this.letterStates[nextCharIndex] = 'incorrect';
    }
  }

  compare_word(){
    if (this.word === this.written_word) {
      this.score += 1;
      this.written_word = '';
      this.loadWords();
    }
  }
  
}
