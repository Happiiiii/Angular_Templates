import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  photo = [
    {
    title:"Fully Responsive Design",
    content:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    foto:"url('assets/img/bg-showcase-1.jpg')"
  },
  {
    title:"Updated For Bootstrap 4",
    content:"Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!",
    foto:"url('assets/img/bg-showcase-2.jpg')"
  },
  {
    title:"Easy to Use & Customize",
    content:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    foto:"url('assets/img/bg-showcase-3.jpg')"
  }
  ];

  constructor() { 
   
  }

  ngOnInit() {
  }

}
