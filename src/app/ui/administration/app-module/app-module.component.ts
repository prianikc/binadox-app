import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-app-module',
  templateUrl: './app-module.component.html',
  styleUrls: ['./app-module.component.scss']
})

export class AppModuleComponent implements OnInit {
  public query = '';
  public connected = false;
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
      });
  }
}
