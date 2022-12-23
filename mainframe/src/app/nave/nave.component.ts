import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  constructor() { }
  mylogo:any="../../assets/logo.png"
  loginstatus:any="login"
  ngOnInit(): void {
  }

}
