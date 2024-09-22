import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../servicios/contactos.service';
import { ContactoInterfaz } from '../../interfaz/contacto.interfaz';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';

@Component({
  selector: 'app-contactos-lista',
  standalone: true,
  imports: [],
  templateUrl: './contactos-lista.component.html',
  styleUrl: './contactos-lista.component.css'
})
export class ContactosListaComponent implements OnInit {

  contactosLista: ContactoInterfaz[]=[];
  constructor(private contactoServicio: ContactosService){}
  ngOnInit(): void {
      this.getContactos();
  }

  getContactos(){
    this.contactoServicio.getContactos().subscribe({
      next: (resultado)=>{
        this.contactosLista = resultado;
      },
      error: (er)=>{
        console.log(er)
      }
    })
  }

}
