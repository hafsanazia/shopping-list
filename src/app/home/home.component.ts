import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'shopping-app';
  searchText = '';
  cartNumber: number = 0;
  passData = [];
  itemList = [
    {
      "id": 1,
      "name": "Sunglasses",
      "price": 175,
      "discount": 5,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoQKJ5DYXVqzYk-cVPiPmn4A9jwxDNSZsI878-3vrV6kpRmc5R6LdWKMGvEWTu22c3iqKefxU&usqp=CAc"
    },
    {
      "id": 2,
      "name": "Dress",
      "price": 190,
      "discount": 7,
      "img_url": "https://joanieclothing.com/media/catalog/product/cache/7f1b2d2cd52ba92fd9f4c19b356fe0dd/b/a/barb_foxes.jpg"
    },
    {
      "id": 3,
      "name": "Shirts",
      "price": 213,
      "discount": 20,
      "img_url": "https://images-na.ssl-images-amazon.com/images/I/71DBklVte9L._UL1200_.jpg"
    },
    {
      "id": 4,
      "name": "Pants",
      "price": 217,
      "discount": 18,
      "img_url": "https://www.iciw.com/bilder/artiklar/10392-001.jpg?m=1580485877"
    },
    {
      "id": 5,
      "name": "Phone",
      "price": 319,
      "discount": 31,
      "img_url": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2BM5mbkw0SlvTzun7hiQ6qaO5EpbIPK9eoKXJn4vuzE0FfqA82k8QuEjNTr-ek3CdhWT0A4LV_MdWg890hwtu2h3biaEYWUAXzRa6QritdulgT1ZsijC_Ug&usqp=CAE"
    },
    {
      "id": 6,
      "name": "Laptop",
      "price": 213,
      "discount": 20,
      "img_url": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4vz3wq-mTgeHmxySi5hsM8KZF0jp3qXnjDPA7k6OywadsDA5We8yuJ7E7ZpxZvEg9lra_IExLxRyDlCB9c-wrU0bMd-WXk0_fpt2rc1Nnm_jKq0YVwgBBSg&usqp=CAE"
    },
    {
      "id": 7,
      "name": "Watch",
      "price": 217,
      "discount": 18,
      "img_url": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ879RNLh38IysiMSPW6eKR0HYiNjzkxD5BoGGMAyE7BxnLXFc8RQwt00iDk_SjDh-dyjFTPm2pUkf2ASjA_8VUjbdjHTb75gfvcPnV78Ql&usqp=CAE"
    },
    {
      "id": 8,
      "name": "Jewellery",
      "price": 319,
      "discount": 31,
      "img_url": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRi2G_p0xq3tV-N43MpK-9NtNYEIsWgavHymstxTNxIEZM5X5MgB4a7lpsR7UOfMuwRzgCwtD2br4AO2km12hwhwxta0OPzNtIOf7xU9DIsbTYRtrS_piPJ&usqp=CAE"
    }
  ];

  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
  }


  addCart(item) {
    this.cartNumber = this.cartNumber + 1;
    this.passData.push(item);
  }

  goToCart() {
    this.router.navigate(['/cart'])
    this.sharedService.addToCart(this.passData);
  }

}
