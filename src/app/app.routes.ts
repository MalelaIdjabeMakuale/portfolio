import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';


export const routes: Routes = [
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: HomeComponent },
  { path: 'works', component: WorksComponent },

];
