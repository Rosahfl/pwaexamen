import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,              // 👈 importante
  imports: [RouterOutlet],       // 👈 permite renderizar rutas hijas
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']   // 👈 ojo: es styleUrls (plural)
})
export class Layout {}


