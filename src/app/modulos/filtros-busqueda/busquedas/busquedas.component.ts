import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ListarUsuarios(){
    this.router.navigate(["Listar"]);
  }

}
