import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { Router, RouterLink } from '@angular/router';
import { toast } from 'ngx-sonner';
import { UsersService } from '../../services/users.service';

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
};
  @Input() volver: Boolean = false;
  usersService = inject(UsersService);
  router = inject(Router);

  deleteUser(id: string){
    toast(`¿Deseas borrar al usuario ${this.myUser.first_name} ${this.myUser.last_name} ?`, {
      duration: 5000,
      action: {
        
        label: 'Aceptar',
        onClick: async () => {
          await this.usersService.delete(id)
          this.router.navigate(['/home'])
        },
      },
      cancel: {
        label: 'Cancelar',
        onClick: () => console.log('Cancelado'),
      },
    
      
    })

  }

}
