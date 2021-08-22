import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  Editar(){
    this.router.navigate(["Editar"]);
  }

  cargarUsuarios(): void {
    this.usuarioService.lista().subscribe(
      data=> {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
