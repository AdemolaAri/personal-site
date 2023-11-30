import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, outlet: 'home'},
    {path: '', component: FooterComponent, outlet: 'footer'},
];
