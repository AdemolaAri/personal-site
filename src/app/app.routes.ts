import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './pages/intro/intro.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, outlet: 'home'},
    {path: '', component: IntroComponent, outlet: 'intro'},
    {path: '', component: FooterComponent, outlet: 'footer'},
];
