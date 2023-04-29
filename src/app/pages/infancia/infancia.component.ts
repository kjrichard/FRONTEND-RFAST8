import { Component, OnInit } from '@angular/core';
import { InfanciaService } from 'src/app/services/infancia.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  public atendidos = 0;
  public noAtendidos = 0;
  public toggleButton: any;
  public paciente = {};
  public spinner = false;
  public arrayId = [];

  public isCollapsed = true;

  closeResult: string;

  constructor( private infanciaService: InfanciaService,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.obtenerInfancia();
    //this.toggleButton = sidebar.getElementsByClassName("sidebar-toggler")[0];
  }

  obtenerInfancia() {
    this.infanciaService.getInfancia().subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.infancia = res.data;
    this.atendidos = res.atendidos
    this.noAtendidos = res.noAtendidos
    this.spinner = true
    this.arrayId = [];
    console.log( res );

    }
    );
  }
  public buscarInfancia() {
    this.infanciaService.buscarInfancia(this.page, this.arrayId).subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.infancia = res.data;
    this.atendidos = res.atendidos
    this.noAtendidos = res.noAtendidos
    this.spinner = true
    this.arrayId = [];
    //console.log( res );

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
    this.arrayId = [];

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

   open(content) {
    this.modalService.open(content, {windowClass: 'modal-search'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  modalOpen( basicmodal:any, paciente ){
    this.modalService.open( basicmodal, { size: 'lg',  scrollable: true });
    this.paciente = paciente;
    console.log(this.paciente);

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public buscar(event: any) {
    let identificacion: string = event.target.value
    if(identificacion.includes(',')){
      console.log(identificacion.substring(0, identificacion.length-1));
      this.arrayId.push(identificacion.substring(0, identificacion.length-1));
      console.log(this.arrayId);
      event.target.value = ''

    }

  }

}
