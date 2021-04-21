import { CatalogueService } from "../../services/catalogue.service";
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  }
  onSaveProduct(value){
      this.catalogueService.addResource("produits",value).subscribe(data=>{
console.log(data)
      },err=>{
        console.log(err)
      })
  }

}
