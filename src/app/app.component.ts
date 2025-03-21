import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavComponent } from './share/home-nav/home-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudUsers';
}
