import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginData: any;

  constructor(private router: Router, private route: ActivatedRoute) { 

    this.loginData = [
      {
        email: 'freya@gmail.com',
        password: 'f@123'
      },
      {
        email: 'abc@gmail.com',
        password: 'abc@123'
      }];
  
      localStorage.setItem("logindata",JSON.stringify(this.loginData));
      console.log(this.loginData);
      
  }
  

  ngOnInit(): void {
  }

  

  signin(){

    
    this.router.navigate(['customer-page'])
  }

}
