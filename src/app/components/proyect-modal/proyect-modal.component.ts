import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-proyect-modal',
  imports: [MatDialogContent, MatIconModule],
  templateUrl: './proyect-modal.component.html',
  styleUrl: './proyect-modal.component.scss',
  standalone: true
})
export class ProyectModalComponent {

  private dialogRef = inject(MatDialogRef<ProyectModalComponent>);

  cerraModal(): void{
    this.dialogRef.close();
  }
}