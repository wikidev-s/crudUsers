import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [RouterLink],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  @Input() myUser: IUser = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
    password: '',
}
  @Input() volver: Boolean = false

  deleteUser(id: string){

  }

}
