import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product';
import { Shipping } from './interfaces/shipping';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'cart-page-assessment';
 
  paymentForm = this.formBuilder.group({
    email: '',
    cardNumber:'',
    month:'',
    year:'',
    cvc:'',
    cardHolder:'',
    country:'',
    state:'',
    zip:''
  });

  
  products: Array<Product> = [
    {
      image: '/assets/images/product-1.jpg',
      title: "New Balance 57/40 Men's Sneakers - Mindful Grey",
      price: 129,
      discount: 189,
      size: '42 EU - 8.5 US',
    },
    {
      image: '/assets/images/product-2.jpg',
      title: "New Balance 997H Men's Sneakers - Mindful Grey",
      price: 119,
      discount: 179,
      size: '42 EU - 8.5 US',
    },
    {
      image: '/assets/images/product-3.jpg',
      title: "New Balance 57/40 Women\'s - Oyster - Grey",
      price: 149,
      discount: 259,
      size: '42 EU - 8.5 US',
    },
  ];

  shippingMethods: Array<Shipping> = [
    {
      image: '/assets/images/fedx.jpg',
      title: 'Fedex Delivery',
      price: 0,
      delivery: '2-3 days work'
    }
  ];

  InternationalShippinMethods: Array<Shipping> = [
    {
      image: '/assets/images/dhl.jpg',
      title: 'DHL Delivery',
      price: 12,
      delivery: '1-3 days work'
    }
  ];

  shippingMethod: Shipping = this.shippingMethods[0];

  paymentDetails = {
    products: this.products,
    shipping: this.shippingMethod,
    paymentDetail: {
      email: '',
      cardDetails: {
        cardNumber: '',
        cardHolder: '',
        month: '',
        year: '',
        cvc: '',
      },
      billingLocation: {
        country: '',
        state: '',
        zip:''
      },
      payment: {
        subtotal: 397,
        vat: 2.89,
        total: 399.89
      }
    }
  }
  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.shippingMethod = this.shippingMethods[0];
  }

  submit() {
    this.paymentDetails.shipping = this.shippingMethod;
    
    console.log(this.paymentDetails);    
  }
}
