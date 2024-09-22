import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  API_URL = "http://localhost/apirestcontactos/views/contacto.php";
  constructor(private httpClient: HttpClient) { }

  getContactos(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
