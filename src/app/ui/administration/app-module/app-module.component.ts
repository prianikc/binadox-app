import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-app-module',
  templateUrl: './app-module.component.html',
  styleUrls: ['./app-module.component.scss']
})

export class AppModuleComponent implements OnInit {
   public data: {
    services: [
      {
        id: number,
        name: string,
        url: string,
        connected: boolean,
        used: boolean,
        warning: boolean
      }

    ]
  };
  public services: any = [];
  constructor(private adminService: AdminService) { }


  ngOnInit() {
    this.getServicesList();
  }

  getServicesList() {
    this.adminService.getServices()
      .subscribe(data => {
        this.data = data;
        this.services = data.services;
        console.log(this.services);
      });
  }
}
