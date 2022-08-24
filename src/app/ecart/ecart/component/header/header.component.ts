import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  actiontype:string='signin'
  constructor() { }

  ngOnInit(): void {
  }
 
  
  handleAction(){
    this.actiontype='signin'

  }
}
