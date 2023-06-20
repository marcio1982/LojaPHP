import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Produto } from '../produto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  id!: number;
  produto!: Produto;
  form!: FormGroup;
  img!: File;
  selectedFile!: File;
  imageSrc:any = '';
  status:boolean = false

  constructor(
    public produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idProduto'];
    this.produtoService.find(this.id).subscribe((data: Produto)=>{
      this.produto = data;
      this.imageSrc = data['imagens'];
    });

    this.form = new FormGroup({
      titulo:  new FormControl('', Validators.required),
      descricao:  new FormControl('', Validators.required),
      imagens:  new FormControl('', Validators.required),
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
    
    this.produtoService.update(this.id, this.form.value).subscribe(res => {
         console.log('Produto atualizado com sucesso!');
         this.router.navigateByUrl('produto/index');
    })
  }

}


