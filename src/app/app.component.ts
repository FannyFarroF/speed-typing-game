import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'speed-typing-game';
}
