import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WordsService {
  words: any =[]; 
  // words = ['alana', 'marino', 'supremo', 'lanas', 'jarabe', 'colina', 'eludir'];

  constructor(private httpClient: HttpClient) { }

  getWords(): Observable<any> {
    return this.httpClient.get('https://clientes.api.greenborn.com.ar/public-random-word?c=80&l=6');
  }
}
