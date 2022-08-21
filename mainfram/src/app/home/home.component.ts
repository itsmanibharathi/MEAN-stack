import { Component, OnInit } from '@angular/core';
import { MyserveService } from '../myserve.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
id:any
  constructor(public myservice:MyserveService ) { }
  async deleteproduct(id:any) {
    this.id=id
    this.myservice.delproduct(id)
    // window.location.reload();
    
  }

  ngOnInit(): void {
    this.myservice.getproduct()
        .subscribe(data => this.products= data )
  }

}
