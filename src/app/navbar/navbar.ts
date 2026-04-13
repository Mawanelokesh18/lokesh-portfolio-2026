import { Component } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, SplitterModule, CardModule, ButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  items = [
  { label: 'ABOUT' },
  { label: 'EDUCATION' },
  { label: 'TECHNOLOGY & TOOLS' },
  { label: 'EXPERIENCE' },
  { label: 'CONTACT ME' }
];
}