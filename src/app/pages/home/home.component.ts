import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  color = 'green';

  getMessage(event: any) {
    console.log('evento al padre', event)
  }
  
}
