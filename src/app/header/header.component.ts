import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ModalService } from '../modalservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private modalService:ModalService) { 
  
  }

  ngOnInit() {
  }
  initLoginModal() {
    let inputs = {
      isMobile: false
    }
    console.log(this.modalService)
    this.modalService.init(LoginComponent, inputs, {});
  }
}
