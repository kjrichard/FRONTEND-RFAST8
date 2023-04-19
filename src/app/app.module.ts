import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { InfanciaComponent } from './pages/infancia/infancia.component';
import { PrimeraInfanciaComponent } from './pages/primera-infancia/primera-infancia.component';
import { AdolecenciaComponent } from './pages/adolecencia/adolecencia.component';
import { JuventudComponent } from './pages/juventud/juventud.component';
import { AdultezComponent } from './pages/adultez/adultez.component';
import { VejezComponent } from './pages/vejez/vejez.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, InfanciaComponent, PrimeraInfanciaComponent, AdolecenciaComponent, JuventudComponent, AdultezComponent, VejezComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
