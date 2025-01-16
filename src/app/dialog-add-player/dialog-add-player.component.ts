import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';




@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [CommonModule,MatDialogModule ,
    MatButtonModule,MatFormFieldModule,MatInputModule,FormsModule
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
 name: string = "";
  

}
