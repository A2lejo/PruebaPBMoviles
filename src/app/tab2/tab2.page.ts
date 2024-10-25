import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fechaini: string;
  fechafin: string;
  dias: number | null = null;

  constructor() {
    this.fechaini = new Date().toISOString();
    this.fechafin = new Date().toISOString();
  }

  calcular() {
    if (this.fechaini && this.fechafin) {
      const fechaInicio = new Date(this.fechaini);
      const fechaFin = new Date(this.fechafin);
      const diferencia = fechaFin.getTime() - fechaInicio.getTime();
      this.dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    } else {
      this.dias = null;
    }
  }
}