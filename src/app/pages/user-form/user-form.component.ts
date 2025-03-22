import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() idUser: string = "";
  userForm: FormGroup = new FormGroup({
    _id: new FormControl(""),
    first_name: new FormControl("",[]),
    last_name: new FormControl("",[]),
    email: new FormControl("",[]),
    image: new FormControl(null,[]),
  },[])
  user: IUser = {
    _id: '',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    image: '',
    password: '',
  }
  usersService = inject(UsersService);
  title: string = "NUEVO USUARIO";
  router = inject(Router);

  async ngOnInit(){
    console.log('idUser', this.idUser)
    if(this.idUser){
      try {
        this.user = await this.usersService.getById(this.idUser);
        this.title = 'ACTUALIZAR USUARIO'
        if(!this.user._id){
        toast.error(String(this.user.error))
        this.router.navigate(['/home'])
      }
      } catch(msg: any){

      }
    }

    this.userForm = new FormGroup({
      _id: new FormControl(this.idUser, []),
      first_name: new FormControl(this.user.first_name,[
        Validators.required,
        Validators.minLength(3)
      ]),
      last_name: new FormControl(this.user.last_name,[
        Validators.required,
        Validators.minLength(2)
      ]),
      email: new FormControl(this.user.email,[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]),
      image: new FormControl(this.user.image,[
        Validators.required,
        Validators.pattern(/^(https?:\/\/(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i)
      ]),
    })
  }

  async getDataForm(){
    
    let response: IUser | any;

    try{
      if (this.userForm.value._id){
        response = await this.usersService.update(this.userForm.value)
        this.router.navigate(['/home'])
        toast.success(`Usuario ${this.user.username} actualizado correctamente`)
      } else {
        
      }
    } catch{

    }

  }

  checkControl(controlName: string, errorName: string): boolean | undefined {
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched
  }

}
