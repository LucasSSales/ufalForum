import { Component } from '@angular/core';
import { ActivatedRoute, NavigationCancel, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ufalClassroom';
  isLogged=false;
  constructor(private route:ActivatedRoute, private router:Router){
    if(localStorage.getItem("username")!=null){
      this.isLogged = true
    }
  }


}
