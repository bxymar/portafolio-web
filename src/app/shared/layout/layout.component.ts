import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TecnologyComponent } from '../../components/tecnology/tecnology.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, TecnologyComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

}
