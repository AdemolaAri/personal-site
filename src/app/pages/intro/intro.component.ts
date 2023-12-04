import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Introduction, SocialDetails } from '../../types/intro.component.types';
import { socialNetworkLinks } from '../../../assets/user-data/intro/socials';

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

  networks: {[key in string]: string} = {
    github: 'https://www.github.com/AdemolaAri',
    linkedin: 'https://www.linkedin.com/in/ademolabuwo',
    twitter: 'https://www.twitter.com/ademolabuwo'
  };

  getSocials() {
    const socialsData: { [key in string]: SocialDetails } = {}
    for (const [key, value] of Object.entries(this.networks)) {
      socialsData[key] = {userInfo: value, logo: socialNetworkLinks[key]}
    }
    return socialsData;
  }
}
