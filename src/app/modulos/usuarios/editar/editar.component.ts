import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ListarUsuarios(){
    this.router.navigate(["Listar"]);
  }

}
