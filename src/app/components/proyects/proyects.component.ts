import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ProyectModalComponent } from '../proyect-modal/proyect-modal.component';

@Component({
  selector: 'app-proyects',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {

  private dialog = inject(MatDialog);

  abrirModal(): void{
    const dialogRef = this.dialog.open(ProyectModalComponent, { 

    })
  }
}