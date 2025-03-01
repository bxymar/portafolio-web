import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-presentation',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  
  private breatpointObserver = inject(BreakpointObserver);
  private isMovile$ = this.breatpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    )

  //CONVERTIR DE OBSERVABLE A SIGNAL
    isMovile = toSignal(this.isMovile$, {initialValue: false});
}
