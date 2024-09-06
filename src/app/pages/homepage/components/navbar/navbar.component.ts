import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() navItemClicked = new EventEmitter<string>();
  navitems: MenuItem[] | undefined;

  ngOnInit() {
    this.navitems = [
      {
        label: 'Home',
        command: () => this.navItemClicked.emit('home')
      },
      {
        label: 'About Us',
        command: () => this.navItemClicked.emit('about')
      },
      {
        label: 'Rhino',
        command: () => this.navItemClicked.emit('rhino')
      },
      {
        label: 'Join',
        command: () => this.navItemClicked.emit('join')
      },
      {
        label: 'Contact',
        command: () => this.navItemClicked.emit('contact')
      }
    ]
  }
}
