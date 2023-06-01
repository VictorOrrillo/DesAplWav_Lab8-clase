import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo!: number;
  @Input() maximo!: number;
  actual!: number;
  constructor() { }
  ngOnInit() {
    this.actual = this.minimo;
  }
  incrementar() {
    if(this.actual<this.maximo)
      this.actual++;
  }
  decrementar() {
    if(this.actual>this.maximo)
      this.actual--;
  }
  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}