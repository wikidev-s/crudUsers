import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { ButtonsComponent } from "../../share/buttons/buttons.component";

@Component({
  selector: 'app-user-card',
  imports: [ButtonsComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() miUser!: IUser;

}
