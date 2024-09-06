import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

interface ImageObject {
  src: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.css'
})

export class GalleriaComponent implements OnInit {
  images: ImageObject[] = [];

  ngOnInit() {
    // Dynamically generate images from CAR0 to CAR11
    this.images = [
      {
        src: "/galleriaAssets/CAR12.gif",
        alt: "Car Pic12",
        title: "Rhino Image 12"
      }];
    for (let i = 0; i <= 11; i++) {
      this.images.push({
        src: `/galleriaAssets/CAR${i}.jpg`,
        alt: `Car Pic${i}`,
        title: `Rhino Image ${i}`
      });
    }
  }
}
