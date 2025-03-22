import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavComponent } from './share/home-nav/home-nav.component';
import { toast, NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeNavComponent, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudUsers';
}
