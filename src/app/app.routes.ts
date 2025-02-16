import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () =>  import('./shared/layout/layout.component'),
        children: [
            //DEMAS COMPONENTES
        ]
    }

];
