import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errors = {
    name:null,
    email:null,
    password:null,
    endereco:null,
    bairro:null,
    cidade:null,
    uf:null,
    cep:null,
    telefone:null,
  }
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    const endereco = form.value.endereco;
    const bairro = form.value.bairro;
    const cidade = form.value.cidade;
    const uf = form.value.uf;
    const cep = form.value.cep;
    const telefone = form.value.telefone;

    this.auth.register(name,email,password,password_confirmation,endereco, bairro,cidade,uf,cep,telefone).subscribe((res)=>{
       // redirect to checkout
       this.router.navigate(['/login']);
    },
    (err)=>{
      this.errors = err.error.errors;
      // console.log(err.error.errors);
    })
  }

}
