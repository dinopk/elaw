import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent, ModalIcon, ModalTheme } from 'src/app/shared/components/alert-modal/alert-modal.component';
import { CreateProductsComponent } from 'src/app/shared/components/create-products/create-products.component';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public product: any = {
      name: 'Camiseta',
      value: 'R$35,00',
      model: 'Gola V',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe vero est alias accusantium ducimus autem odit commodi. Expedita ducimus aliquam, obcaecati possimus ipsam voluptate debitis quod odio quasi autem.'
  }

  public productList: any;

  constructor(
    public dialog: MatDialog,
    private $product: ProductService
  ) { }

  ngOnInit(): void {
    this.$product.setProducts(this.product);
    this.getProducts();
  }

  public getProducts(): void {
    this.$product.products.subscribe((res) => {
      this.productList = res;
    });
  }

  public openDialogDeleteProducts(value): void {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '350px',
      autoFocus: false,
      disableClose: true,
      data: {
        theme: ModalTheme.DELETE,
        icon: ModalIcon.DELETE,
        buttonCancelText: 'não',
        buttonSuccessText: 'sim',
        title: 'Você tem certeza que<br/> deseja excluir este produto?',
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.$product.deleteProducts(value);
      }
    });
  }

  public openDialogCreateProducts(): void {
    const dialogRef = this.dialog.open(CreateProductsComponent, {
      width: '450px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.$product.setProducts(result);
      }
    });
  }

  public openDialogEditProducts(value): void {
    const dialogRef = this.dialog.open(CreateProductsComponent, {
      width: '450px',
      autoFocus: false,
      data: value
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.$product.deleteProducts(value);
        this.$product.setProducts(result);
      }
    });
  }

}
