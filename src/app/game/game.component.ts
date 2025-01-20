import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';

import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

import {MatDialogModule} from '@angular/material/dialog';
import { GameInfoComponent } from "../game-info/game-info.component";
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    DialogAddPlayerComponent,
    CommonModule,
    PlayerComponent,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GameInfoComponent,
    MatCardModule
],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})



export class GameComponent implements OnInit  {



  pickAnimationCard = false;
  currentCard? = '';
  game: Game;

  constructor(public dialog: MatDialog ){
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
      this.game.currentPlayers++;
    this.game.currentPlayers = this.game.currentPlayers % this.game.players.length
      console.log('new card',this.game);
                                                     //this.game.palyedCards.push(this.currentCard!);
     } else {
      console.error('currentCard is undefined');
     }
   }, 500);
  }
}

openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent, )
  
  dialogRef.afterClosed().subscribe( (name:string) =>  {
    
    if (name !== undefined) {
      this.game.players.push(name);
        }
  });
}



}


