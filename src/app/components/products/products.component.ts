import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CatalogueService } from "../../services/catalogue.service";
import {Product  } from "../../models/Product";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  size:number = 5;
  currentPage:number = 0;
  totalPages: number;
  produits :Product[]
  pages : Array<number>;
  currentKeyword: string = "";
  constructor(private catalogueService:CatalogueService) { }

  ngOnInit(): void {

  }

  onGetProducts(){
    this.catalogueService.getResource("produits",this.currentPage,this.size).subscribe(data=>{
     this.produits = data;
    this.totalPages = data['page'].totalPages
    this.pages = new Array<number>(this.totalPages);
    },err=>{
      console.log(err)
    })

  }
  onPageProduct(i){
    this.currentPage = i;
   this.chercherProduits()
  }
  onChercher(form :any){
      this.currentPage = 0;
      this.currentKeyword = form.keyword;
      this.chercherProduits()
  }

  chercherProduits(){
  
    this.catalogueService.getResourceByKeyword("produits",this.currentPage,this.size,this.currentKeyword).subscribe(data=>{
      this.produits = data;
     this.totalPages = data['page'].totalPages
     this.pages = new Array<number>(this.totalPages);
     },err=>{
       console.log(err) 
     })

  }
  onDeleteProduct(url){
    if(confirm('Etes vous sur de vouloir supprimer ce produit ?')){
    this.catalogueService.deleteResource('produits',url).subscribe(data=>{
      this.chercherProduits();
    },err=>{
      console.log(err)
    })
    }
     
  }  
}
