import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  perfil: any;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: "",
    perfil: [1, 2]
  },

  {
    path: "/primera-infancia",
    title: "primera Infancia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-bold",
    class: "",
    perfil: [1]
  },
  {
    path: "/infancia",
    title: "Infancia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-controller",
    class: "",
    perfil: [1]
  },
  {
    path: "/adolecencia",
    title: "Adolescencia",
    rtlTitle: "قائمة الجدول",
    icon: "icon-user-run",
    class: "",
    perfil: [1]
  },
  {
    path: "/juventud",
    title: "Juventud",
    rtlTitle: "قائمة الجدول",
    icon: "icon-trophy",
    class: "",
    perfil: [1]
  },
  {
    path: "/adultez",
    title: "Adultez",
    rtlTitle: "قائمة الجدول",
    icon: "icon-single-02",
    class: "",
    perfil: [1]
  },
  {
    path: "/vejez",
    title: "Vejez",
    rtlTitle: "قائمة الجدول",
    icon: "icon-sound-wave",
    class: "",
    perfil: [1, 2]
  },
  {
    path: "/user",
    title: "Usuarios",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-align-center",
    class: "",
    perfil: [1, 2]
  },

];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  public user: any = {perfil_id: 1}
  constructor() {}

  ngOnInit() {
   /*  this.menuItems = ROUTES.filter(menuItem => menuItem); */
  this.user = JSON.parse(localStorage.getItem('id_perfil'))
  console.log(this.user);
  this.menuItems = ROUTES.filter(menuItem => {
    for (let i = 0; i < menuItem.perfil.length; i++) {
      const item = menuItem.perfil[i];
      if (item === this.user) {
        return item;
      }

    }
  })

  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
