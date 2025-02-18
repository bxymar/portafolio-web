import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { TecnologyComponent } from '../../components/tecnology/tecnology.component';
import { ProyectsComponent } from '../../components/proyects/proyects.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-layout',
  imports: [SidebarComponent, PresentationComponent, TecnologyComponent, ProyectsComponent, AchievementsComponent, AboutMeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {

  @ViewChild('presentation') presentationSelection!: ElementRef;
  @ViewChild('tecnology') tecnologySelection!: ElementRef;
  @ViewChild('proyects') proyectsSelection!: ElementRef;
  @ViewChild('achievements') achievementsSelection!: ElementRef;
  @ViewChild('aboutMe') aboutMeSelection!: ElementRef;

  srollToSection(section: string){
    let element: ElementRef | undefined;

    switch(section){

      //PRESENTACION
      case 'presentation':
        element = this.presentationSelection;
        break;

      //TECNOLOGIAS
      case 'tecnology':
        element = this.tecnologySelection;
        break;

      //PROYECTOS
      case 'proyects':
        element = this.proyectsSelection;
        break;

      //LOGROS  
      case 'achievements':
        element = this.achievementsSelection;
        break;

      //SOBRE MI
      case 'aboutMe':
        element = this.aboutMeSelection;
        break;
    }

    if (element){
      element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
