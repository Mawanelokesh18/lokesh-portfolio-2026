import { Component, HostListener } from '@angular/core';

import { MenubarModule, Menubar } from 'primeng/menubar';
import { SplitterModule, Splitter } from 'primeng/splitter';
import { CardModule, Card } from 'primeng/card';
import { ButtonModule, Button } from 'primeng/button';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [Menubar, Card, Button, Splitter],
})
export class Navbar {
 isMobile = false;

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 900;
  }

  items = [
    { label: 'ABOUT' },
    { label: 'EDUCATION' },
    { label: 'TECHNOLOGY & TOOLS' },
    { label: 'EXPERIENCE' },
    { label: 'CONTACT ME' }
  ];

}