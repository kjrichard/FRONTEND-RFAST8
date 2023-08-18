import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { tap } from 'rxjs/operators';
import { CursoVidaService } from '../services/curso-vida.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  public id: number = +localStorage.getItem('id_usuario') ;
  constructor(private cursoVidaService: CursoVidaService, private router:Router  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    return this.cursoVidaService.validarToken( this.id )
        .pipe(
          tap(autenticado => {
            if (!autenticado) {
              this.router.navigateByUrl('/login')

            }
          })
        );
  }

}
