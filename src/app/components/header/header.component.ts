import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    const doc = this.prompt?.nativeElement;
    const typewriter = this.getTextAnimation(doc, ['Welcome!'], 800, 250);
    typewriter.start();
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
