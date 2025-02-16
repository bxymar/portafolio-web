import { Component } from '@angular/core';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsComponent } from './forms/forms.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  activate: boolean = false;

  onChange( value: boolean ) {
    console.log( value );
  }
}
