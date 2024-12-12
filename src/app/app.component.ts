import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FireBaseService } from './services/fire-base.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private fireBaseService: FireBaseService ) {

  }  
}
