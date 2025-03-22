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
  page:number = 0; 
  totalPages: number = 0;
  linkPrev: string = "";
  linkNext: string = "";
  baseUrl: string = "https://peticiones.online/api/users";

  ngOnInit(){
    this.cargaUsers();
  }

  async cargaUsers(url:string = "") {
    try {
      let response: IResponse = await this.usersService.getAll(url);
      this.arrUsers = response.results
      this.page = Number(response.page);
      this.totalPages = Number(response.total_pages);
      if (this.page < this.totalPages ) {
        this.linkNext = `${this.baseUrl}?page=${this.page+1}`
      }
      if (this.page > 1 ) {
        this.linkPrev = `${this.baseUrl}?page=${this.page-1}`
      }
      console.log('this.linNext', this.linkNext)
    } catch(error){
      console.log(error)
    }
  }

  async gotoNext(){
    this.cargaUsers(this.linkNext)
  }

  async gotoPrev(){
    this.cargaUsers(this.linkPrev)
  }
}
