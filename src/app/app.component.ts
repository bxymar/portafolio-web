import { Component } from '@angular/core';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  activate: boolean = false;

  onChange( value: boolean ) {
    console.log( value );
  }
}
