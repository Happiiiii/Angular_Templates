import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features = [
    {
      title: "Fully Responsive",
     content:"This theme will look great on any device, no matter the size!",
     icon: "icon-screen-desktop m-auto text-primary"
    },
    {
      title: "Bootstrap 4 Ready",
      content:"Featuring the latest build of the new Bootstrap 4 framework!",
      icon: "icon-layers m-auto text-primary"
    },
    {
      title: "Hard to Use",
      content:"Ready to use with your own content, or customize the source files!",
      icon: "icon-check m-auto text-primary"
    },
   
  ];

  constructor() { }

  ngOnInit() {
  }

}
