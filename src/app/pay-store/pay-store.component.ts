import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService} from '../payment.service';

@Component({
  selector: 'app-pay-store',
  templateUrl: './pay-store.component.html',
  styleUrls: ['./pay-store.component.css']
})
export class PayStoreComponent implements OnInit{

  amount = 0;

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

  constructor(private router: Router, private payment: PaymentService){

  }

  ngOnInit(): void {
    this.amount = this.payment.totalAmount;
      window.paypal.Buttons(
        {
          style: {
            layout: 'horizontal',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount:{
                    value: this.amount.toString(),
                    currency_code: 'USD'
                  }
                }
              ]
            })
          },
          onApprove: (data: any, actions:any) => {
            return actions.order.capture().then((details: any) => {
              console.log(details);
            });
          },
          onError: (error: any) => {
            console.log(error);
          }
        }
    ).render(this.paymentRef.nativeElement);
  }

  cancel(){
    this.router.navigate(['cart']);
  }
}
