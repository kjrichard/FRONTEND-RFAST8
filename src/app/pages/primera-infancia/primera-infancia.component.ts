import { PrimeraInfanciaService } from './../../services/primera-infancia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primera-infancia',
  templateUrl: './primera-infancia.component.html',
  styleUrls: ['./primera-infancia.component.scss']
})
export class PrimeraInfanciaComponent implements OnInit {
  public primeraInfancia: any = [];

  constructor(private primeraInfanciaService: PrimeraInfanciaService) { }

  ngOnInit(): void {
    this.obtenerPrimeraInfancia();
  }

  obtenerPrimeraInfancia() {
    this.primeraInfanciaService.getPrimeraInfancia().subscribe(( res: any ) =>{

      this.primeraInfancia = res.data;
      console.log( res );

    });
  }

}

export class ZeroConfigComponent {}
