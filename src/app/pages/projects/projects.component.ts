import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../../assets/user-data/projects/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title = 'Project';
  projects = projects;
}
