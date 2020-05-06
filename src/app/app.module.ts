import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalEditAddComponent } from './modalEditAdd/modalEditAdd.component';
import { FormsModule } from '@angular/forms';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormatoModelosPipe } from './formato-modelos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalEditAddComponent,
    ModalEliminarComponent,
    FormatoModelosPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalEditAddComponent]
})
export class AppModule { }
