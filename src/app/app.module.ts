import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrarVehiculoComponent } from './components/registrarVehiculo/registrarVehiculo.component';
import { ForFilterPipe } from './pipes/forFilter.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { TotalPagoComponent } from './components/totalPago/totalPago.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarVehiculoComponent,
    TotalPagoComponent,
    AlertComponent,
    ForFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
