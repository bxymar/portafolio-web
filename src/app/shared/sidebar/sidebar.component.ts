import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  //VARIABLES
  private breatpointObserver = inject(BreakpointObserver);
  private isMovile$ = this.breatpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  //CONVERTIR DE OBSERVABLE A SIGNAL
  isMovile = toSignal(this.isMovile$, {initialValue: false});
}