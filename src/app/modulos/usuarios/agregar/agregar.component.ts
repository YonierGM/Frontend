import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ListarUsuarios(){
    this.router.navigate(["Listar"]);
  }

}
