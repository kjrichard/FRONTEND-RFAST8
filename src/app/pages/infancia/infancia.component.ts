import { Component, OnInit } from '@angular/core';
import { InfanciaService } from 'src/app/services/infancia.service';

@Component({
  selector: 'app-infancia',
  templateUrl: './infancia.component.html',
  styleUrls: ['./infancia.component.scss']
})
export class InfanciaComponent implements OnInit {
  public infancia: any = [];

  constructor( private infanciaService: InfanciaService) { }

  ngOnInit(): void {
    this.obtenerInfancia();
  }

  obtenerInfancia() {
    this.infanciaService.getPrimeraInfancia().subscribe( ( res: any ) => {

      
       this.infancia = res.data[0];
       console.log( res );
       
    }
    );
  }

}
