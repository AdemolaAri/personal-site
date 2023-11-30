import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './pages/intro/intro.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent, outlet: 'home'},
    {path: '', component: IntroComponent, outlet: 'intro'},
    {path: '', component: AboutComponent, outlet: 'about-skills'},
    {path: '', component: ProjectComponent, outlet: 'projects'},
    {path: '', component: ContactComponent, outlet: 'contact'},
    {path: '', component: FooterComponent, outlet: 'footer'},
];
