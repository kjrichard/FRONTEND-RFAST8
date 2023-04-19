import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
/*import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";*/
import { PrimeraInfanciaComponent } from "src/app/pages/primera-infancia/primera-infancia.component";
import { InfanciaComponent } from "src/app/pages/infancia/infancia.component";
import { AdolecenciaComponent } from "src/app/pages/adolecencia/adolecencia.component";
import { JuventudComponent } from "src/app/pages/juventud/juventud.component";
import { AdultezComponent } from "src/app/pages/adultez/adultez.component";
import { VejezComponent } from "src/app/pages/vejez/vejez.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  /*{ path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },*/
  { path: "primera-infancia", component: PrimeraInfanciaComponent },
  { path: "infancia", component: InfanciaComponent },
  { path: "adolecencia", component: AdolecenciaComponent },
  { path: "juventud", component: JuventudComponent },
  { path: "adultez", component: AdultezComponent },
  { path: "vejez", component: VejezComponent },
  // { path: "rtl", component: RtlComponent }
];
