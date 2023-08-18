import { Component, OnInit } from "@angular/core";
import { CursoVidaService } from "src/app/services/curso-vida.service";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },

  {
    path: "/primera-infancia",
    title: "primera Infancia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-bold",
    class: ""
  },
  {
    path: "/infancia",
    title: "Infancia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-controller",
    class: "",
  },
  {
    path: "/adolecencia",
    title: "Adolescencia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-user-run",
    class: ""
  },
  {
    path: "/juventud",
    title: "Juventud",
    rtlTitle: "قائمة الجدول",
    icon: "icon-trophy",
    class: "",
  },
  {
    path: "/adultez",
    title: "Adultez",
    rtlTitle: "قائمة الجدول",
    icon: "icon-single-02",
    class: ""

  },
  {
    path: "/vejez",
    title: "Vejez",
    rtlTitle: "قائمة الجدول",
    icon: "icon-sound-wave",
    class: ""
  },
  {
    path: "/user",
    title: "Usuarios",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-align-center",
    class: ""
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public users: any;
  public user: any = { perfil_id: 1 }
  constructor( private cursoVidaService: CursoVidaService ) {}

  ngOnInit() {
    //this.menuItems = ROUTES.filter(menuItem => menuItem);


    this.users = this.cursoVidaService.USUARIO;
    let listaPermisos = [];

    const menu = this.users[0].permisos.map( ( permiso: any ) => {
      listaPermisos.push({
        path: permiso.path,
        title: permiso.title,
        rtlTitle: "ملف تعريفي للمستخدم",
        icon: permiso.icon,
        class: permiso.class
      })

      return listaPermisos;
    });

    this.menuItems = listaPermisos.filter( menuItem => menuItem);

  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

