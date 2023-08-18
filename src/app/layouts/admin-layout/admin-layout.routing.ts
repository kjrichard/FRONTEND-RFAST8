import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { PrimeraInfanciaComponent } from "src/app/pages/primera-infancia/primera-infancia.component";
import { InfanciaComponent } from "src/app/pages/infancia/infancia.component";
import { AdolecenciaComponent } from "src/app/pages/adolecencia/adolecencia.component";
import { JuventudComponent } from "src/app/pages/juventud/juventud.component";
import { AdultezComponent } from "src/app/pages/adultez/adultez.component";
import { VejezComponent } from "src/app/pages/vejez/vejez.component";
import { LoginGuard } from "src/app/guard/login.guard";
import { UserComponent } from "../../pages/user/user.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [LoginGuard] },
  { path: "primera-infancia", component: PrimeraInfanciaComponent, canActivate: [LoginGuard] },
  { path: "infancia", component: InfanciaComponent, canActivate: [LoginGuard] },
  { path: "adolecencia", component: AdolecenciaComponent, canActivate: [LoginGuard] },
  { path: "juventud", component: JuventudComponent, canActivate: [LoginGuard] },
  { path: "adultez", component: AdultezComponent, canActivate: [LoginGuard] },
  { path: "vejez", component: VejezComponent, canActivate: [LoginGuard] },
  { path: "user", component: UserComponent, canActivate: [LoginGuard] }
];
