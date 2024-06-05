import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  data = {
    titulo: 'Demo DSW',
    description: 'Desarrollo de Software'
  }
  nombreTitular = 'Nombre titular';
  nombreAula = 'Nombre aula';

  OnKeyUp(input: string, field: string) {
    if (field === 'titulo') {
      this.nombreTitular = input;
    } else if (field === 'aula') {
      this.nombreAula = input;
    }
  }
}
