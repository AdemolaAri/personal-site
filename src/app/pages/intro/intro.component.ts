import { Component, OnInit } from '@angular/core';
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
export class IntroComponent implements OnInit {
  readonly socials : { [key in string]: SocialDetails } = {};
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

  ngOnInit(): void {
    this.updateSocials();
  }

  private updateSocials() {
    for (const [key, value] of Object.entries(this.networks)) {
      this.socials[key] = {userInfo: value, logo: socialNetworkLinks[key]};
    }
  }
}
