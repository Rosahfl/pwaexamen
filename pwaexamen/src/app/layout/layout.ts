import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,              // 👈 standalone correcto
  imports: [RouterOutlet], // 👈 añade RouterLink y RouterLinkActive
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']   // 👈 ojo: es styleUrls (plural)
})
export class Layout {}


