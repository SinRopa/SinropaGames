import { Component } from '@angular/core';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent {

  games:GameInformation[] = 
  [
    {
      name: "Focus",
      desc: "Infinite auto battler",
    },
    {
      name: "LoanShark",
      desc: "Loan banking sim with offline progress",
    },
    {
      name: "Merger",
      desc: "Active incremental tile merging",
    },
    
  ];
}

export interface GameInformation
{
  name: string,
  desc: string,
}