import { Component } from '@angular/core';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent {

  panelOpenState = false;
  titles: string[] = ['Demon Slayer', 'Attack on titan', 'Juanpis la serie', 'Vikings', '12 monos', 'La casa de papel']

  description: string[] = ['Un demonio asesinó a la familia de Tanjiro, ahora con su hermana convirtiéndose en demonio.', 'En el siglo 800 unos titanes atacaron a la humanidad', 'La política colombiana y su humor negro', 'Vuelve antes de la edad media y vive los saqueos más sangrientos de la historia', 'Un virus mató a la mitad de la humanidad y ahora volverán en el tiempo para evitar que ocurra', 'Los robos más grandes de la historia!']

}
