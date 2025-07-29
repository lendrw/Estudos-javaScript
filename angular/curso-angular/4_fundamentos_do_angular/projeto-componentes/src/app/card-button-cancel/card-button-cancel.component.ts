import { Component } from '@angular/core';

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  //styleUrls: ['./card-button-cancel.component.scss']
  styles: [
    `
      .card-cancel-button {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin-top: 10px;
        border-radius: 25px;
        background-color: white;
        padding: 10px;
      }
    `,
  ],
})
export class CardButtonCancelComponent {}
