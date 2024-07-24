import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showGame = false;
  showWindowGame(){
    setTimeout(() => {
      this.showGame = true
    }, 3000);
  }
}
