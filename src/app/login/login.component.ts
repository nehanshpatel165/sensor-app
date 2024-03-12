import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route:ActivatedRoute, private router:Router){}
  onClick(){
    this.router.navigateByUrl('/dashboard')
  }
}
