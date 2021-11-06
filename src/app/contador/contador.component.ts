import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  public numero = 3;
  public round = 1;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.numero++;
  }

  decrementar() {
    this.numero--;
  }

  reset() {
    this.numero = 3;
    this.round = 1;
  }

  next(){
    this.numero += 2;
    this.round += 1;
  }
}

