import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produto-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  imageSrc:any = '';
  status:boolean = false

  constructor(
    public produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      titulo:  new FormControl('', Validators.required),
      descricao:  new FormControl('', Validators.required),
      preco:  new FormControl('', Validators.required),
      precoPromocional:  new FormControl(''),
      estoque:  new FormControl('', Validators.required),
      altura:  new FormControl('', Validators.required),
      largura:  new FormControl('', Validators.required),
      comprimento:  new FormControl('', Validators.required),
      peso:  new FormControl('', Validators.required),
    });

  }

  get f(){
    return this.form.controls;
  }


  onFileChange(event:any) {
    
    this.status = false;
    const file = event.target.files[0];
    this.status = event.target.files.length>0?true:false
    if(this.status==true){
       const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = () => {
          this.imageSrc = reader.result;          
       }
    }
  }
 
  submit(){
    
    if(this.imageSrc){
      this.form.value['imagens'] = this.imageSrc ;
    } else {
      this.form.value['imagens'] = "";
    }
    this.produtoService.create(this.form.value).subscribe(res => {
         console.log('Produto criado com successo!');
         this.router.navigateByUrl('produto/index');
    })
  }

}
