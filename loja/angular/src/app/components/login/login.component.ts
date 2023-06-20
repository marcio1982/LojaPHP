import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router, private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    const endereco = form.value.endereco;
    

    this.auth.login(email, password).subscribe((res:any)=>{
      
      localStorage.setItem('user', JSON.stringify(res))
      // redirect to checkout
      this.router.navigate(['/checkout']);
    },
    err=>{
      console.log(err);
    })

  }

}
