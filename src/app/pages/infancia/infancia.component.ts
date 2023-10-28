import { Component, OnInit } from '@angular/core';
import { InfanciaService } from 'src/app/services/infancia.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CursoVidaService } from 'src/app/services/curso-vida.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infancia',
  templateUrl: './infancia.component.html',
  styleUrls: ['./infancia.component.scss']
})

export class InfanciaComponent implements OnInit {
  public cursoVidaData: any = [];
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
  public isSearch = false;
  public codigo: number = 1601;
  public edadInicial: number = 6;
  public edadFinal: number = 11;
  public excelData = [];
  public data = [];
  public excel = "";
  public baseUrl: string = "http://127.0.0.1:3000/exportar-excel1/";


  public isCollapsed = true;

  closeResult: string;

  constructor( private cursoVidaService: CursoVidaService,
    private modalService: NgbModal, private http: HttpClient, private router: Router ) {
      this.excel = `${this.baseUrl}${this.codigo}/${this.edadInicial}/${this.edadFinal}`
    }

  ngOnInit(): void {
    this.obtenerCursoVida();
    this.spinner;

  }

  obtenerCursoVida() {
    this.cursoVidaService.obtenerCursoVida(this.page, this.codigo, this.edadInicial, this.edadFinal).subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.cursoVidaData = res.data;
    this.spinner = true
    this.arrayId = []
    });
  }
  public buscarCursoVida1() {
    this.cursoVidaService.buscarCursoVida(this.page, this.arrayId, this.codigo, this.edadInicial, this.edadFinal).subscribe( ( res: any ) => {
    this.total = res.total
    this.itemperpage = res.itemperpage
    this.totalpage = res.totalpage
    this.islast = res.islast
    this.cursoVidaData = res.data;
    this.spinner = true
    this.isSearch = true

    }, (error) => {
      if (error.status === 404) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Este Documento: ',
          text: `${this.arrayId}, No Pertenece a este Curso de Vida`,
          showConfirmButton: false,
          timer: 6500
        })

      }

    }

    );
  }


  public pageSiguiente() {
    this.page = this.page + 1


    if(this.isSearch){
        this.buscarCursoVida1()
    }else{
      this.cursoVidaService. obtenerCursoVida(this.page, this.codigo, this.edadInicial, this.edadFinal).subscribe( ( res: any ) => {
        this.total = res.total
        this.itemperpage = res.itemperpage
        this.totalpage = res.totalpage
        this.islast = res.islast
        this.cursoVidaData = res.data;
        this.arrayId = [];
        this.spinner = true

        }
        );
    }


  }

  public pageAtras() {
    this.page = this.page - 1
    if(this.isSearch){
      this.buscarCursoVida1()
    }else{
      this.cursoVidaService. obtenerCursoVida(this.page, this.codigo, this.edadInicial, this.edadFinal).subscribe( ( res: any ) => {
        this.total = res.total
        this.itemperpage = res.itemperpage
        this.totalpage = res.totalpage
        this.islast = res.islast
        this.cursoVidaData = res.data;
        this.arrayId = [];
        this.spinner = true

        }
        );
    }

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
      this.arrayId.push(identificacion.substring(0, identificacion.length-1));
      event.target.value = ''

    }

  }

  reloadPage() {
    // Obtiene la URL actual
    const currentUrl = this.router.url;

    // Navega a la misma URL para recargar la página
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}
