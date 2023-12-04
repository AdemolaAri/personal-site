import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typewriter from '../../utils/Typewriter';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('prompt') prompt?: ElementRef;
  
  navBarItems: string[] = ['about', 'projects', 'contact', 'blog'];
  welcomeMessages = [
    'Welcome!', // English
    'Káàbọ̀!',   // Yoruuba
    'Nnọọ!',    // Igbo
    'Barka da Zuwa!', // Hausa
  ];
  
  private displayTypewritingTexts = true;

  ngAfterViewInit() {
    const doc = this.prompt?.nativeElement;

    if (this.displayTypewritingTexts) {
      const typewriter = this.getTextAnimation(doc, this.welcomeMessages, 800, 250);
      typewriter.start();
    }
  }

  private getTextAnimation(
      htmlElement: HTMLElement,
      displayedTexts: string[],
      pauseTime: number,
      deleteTime: number
  ): Typewriter {
    const typewriter = new Typewriter(htmlElement, {
      loop: true,
      typingSpeed: 200,
      deletingSpeed: 15,
    });

    displayedTexts.forEach((text) => {
      typewriter.typeString(text).pauseFor(pauseTime).deleteAll(deleteTime);
    });

    return typewriter;
  }
}
