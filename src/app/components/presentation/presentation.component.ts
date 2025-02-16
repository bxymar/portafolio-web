import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-presentation',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  protected name: string = "soy Beymar";
  protected description: string = "Software Developer";
  protected content: string = "transformando ideas en realidad a través de codigo y soluciones innovadoras";
  protected achievements: string = "Técnico en Sistemas Informáticos";
  protected email: string = "beymar@gmail.com"

}
