import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Introduction, Networking } from '../../types/intro.component.types';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  readonly intro: Introduction = {
    greeting: 'Hi there',
    name: 'Ademola',
    message: 'A full-stack engineer who writes, secures, and ships code.',
  };

  networks = {
    github: 'https://www.github.com/AdemolaAri',
    linkedin: 'https://www.linkedin.com/in/ademolabuwo',
    twitter: 'https://www.twitter.com/ademolabuwo'
  }
}
