import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';
import { ButtonsComponent } from "../../share/buttons/buttons.component";

@Component({
  selector: 'app-user-view',
  imports: [ButtonsComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {

  @Input() idUser: string = "";
  elUser: IUser = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
    password: '',
  }
  usersService = inject(UsersService);
  router = inject(Router);

  async ngOnInit(){
    
    let id = this.idUser

    try{
      this.elUser = await this.usersService.getById(id)
      console.log('el user', this.elUser)
  
      if(!this.elUser._id){
        toast.error(String(this.elUser.error))
        this.router.navigate(['/home'])
      }
    } catch{}
  } 
}
