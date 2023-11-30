import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../../assets/user-data/projects/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  title = 'Project';
  projects = projects;
}
