import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  roots: string = '';

  constructor() {}

  calculateRoots() {
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      this.roots = `Raíces reales y diferentes: ${root1} y ${root2}`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      this.roots = `Raíz real y única: ${root}`;
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      this.roots = `Raíces complejas: ${realPart} + ${imaginaryPart}i y ${realPart} - ${imaginaryPart}i`;
    }
  }
}