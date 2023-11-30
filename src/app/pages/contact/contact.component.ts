import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataToCollect } from '../../../assets/user-data/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = 'Contact';
  userData = dataToCollect;
  messageInfo = {
    name: 'message',
    placeholder: 'Start typing...',
  };
}
