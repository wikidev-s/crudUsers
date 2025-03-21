import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { IResponse } from '../../interfaces/iresponse.interface';
import { UserCardComponent } from "../../components/user-card/user-card.component";

@Component({
  selector: 'app-home',
  imports: [UserCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  arrUsers:IUser[] = [];
  usersService = inject(UsersService);

  ngOnInit(){
    this.cargaUsers();
  }

  async cargaUsers(url:string = "") {
    try {
      let response: IResponse = await this.usersService.getAll(url);
      this.arrUsers = response.results
      console.log('this.arrUsers', this.arrUsers)
    } catch(error){
      console.log(error)
    }
  }
}
