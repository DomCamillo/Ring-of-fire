import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent,MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})



export class GameComponent implements OnInit  {
  pickAnimationCard = false;
  currentCard? = '';
  game: Game;

  constructor(){
    this.game = new Game()
    
  }

  ngOnInit(): void{
    this.newGame()
  }

  newGame(){
    
    console.log(this.game);
    
  }

  takeCard(){
    if (!this.pickAnimationCard) {
      
   this.currentCard = this.game.stack.pop()
   this.pickAnimationCard = true;
   console.log(this.currentCard);

  
   setTimeout(() => {
    this.pickAnimationCard = false;
    if (this.currentCard) {
      this.game.palyedCards.push(this.currentCard);
      console.log('new card',this.game);
                                                     //this.game.palyedCards.push(this.currentCard!);
     } else {
      console.error('currentCard is undefined');
     }
   }, 500);
  }
}



}


