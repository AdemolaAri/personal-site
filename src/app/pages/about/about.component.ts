import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
 
const aboutMeLink ='assets/user-data/about/about-me.txt';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  summary: string[] | undefined;
  summaryCount: number | undefined;

  ngAfterViewInit(): void {
    this.readFile();
  }

  constructor(private http: HttpClient) {}

  private readFile(): void {
    this.http
        .get(aboutMeLink, { responseType: 'text' })
        .subscribe((fileContent: string) => {
          this.summary = fileContent.split('\n').filter((paragraph) => paragraph);
          this.summaryCount = fileContent.split(' ').length;
        });
  }
}
