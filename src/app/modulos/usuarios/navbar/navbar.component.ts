import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Listar(){
    this.router.navigate(["Listar"]);
  }

  Nuevo(){
    this.router.navigate(["Agregar"]);
  }

  Asociar(){
    this.router.navigate(["Asociar"]);
  }

  Busquedas(){
    this.router.navigate(["filtros-busquedas"]);
  }

}
