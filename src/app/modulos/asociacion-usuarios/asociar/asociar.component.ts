import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asociar',
  templateUrl: './asociar.component.html',
  styleUrls: ['./asociar.component.css']
})
export class AsociarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ListarUsuarios(){
    this.router.navigate(["Listar"]);
  }
}
