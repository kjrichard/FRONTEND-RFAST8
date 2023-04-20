import { Component, OnInit } from '@angular/core';
import { InfanciaService } from 'src/app/services/infancia.service';

@Component({
  selector: 'app-infancia',
  templateUrl: './infancia.component.html',
  styleUrls: ['./infancia.component.scss']
})
export class InfanciaComponent implements OnInit {
  public infancia: any = [];
  public total = 0;
  public page = 1;
  public totalpage = 0;
  public itemperpage = 0;
  public islast = false;

  constructor( private infanciaService: InfanciaService) { }

  ngOnInit(): void {
    this.obtenerInfancia();
  }

  obtenerInfancia() {
    this.infanciaService.getInfancia().subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.infancia = res.data;
    console.log( res );

    }
    );
  }

  public pageSiguiente() {
    this.page = this.page + 1
    this.infanciaService.getInfancia(this.page).subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.infancia = res.data;

    }
    );
  }

  public pageAtras() {
    this.page = this.page - 1
    this.infanciaService.getInfancia(this.page).subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.infancia = res.data;

    }
    );
  }

}
