import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IResponse } from '../interfaces/iresponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private httpClient = inject(HttpClient);
  private baseUrl: string = "https://peticiones.online/api/users";

  getAll(url: string){
    url = (url === "") ? this.baseUrl : url
    return lastValueFrom(this.httpClient.get<IResponse>(url))
  }

}
