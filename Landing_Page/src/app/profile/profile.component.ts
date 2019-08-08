import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profiles=[
  {
    foto:"assets/img/testimonials-1.jpg",
name:"Margaret E.",
content:"This is fantastic! Thanks so much guys!"

  }, 
  {
    foto:"assets/img/testimonials-2.jpg",
    name:"Fred S.",
    content:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    
  },
  {
    foto:"assets/img/testimonials-3.jpg",
  name:"Sarah W.",
    content:"Thanks so much for making these free resources available to us!"
    
  },
];
  constructor() { }

  ngOnInit() {
  }

}
