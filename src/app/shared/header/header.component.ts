import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';

@Component({
  selector: 'app-header',
  imports: [SidebarComponent, PresentationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
