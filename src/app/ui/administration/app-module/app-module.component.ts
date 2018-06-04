import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-module',
  templateUrl: './app-module.component.html',
  styleUrls: ['./app-module.component.scss']
})

export class AppModuleComponent implements OnInit {
  public checkConnetion: boolean;
  public checkDiscovered: boolean;
  public checkUsed: boolean;
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
    // this.getServicesList();
  }
  takeConnetedServices() {
    if (this.checkConnetion === true) {
      this.checkConnetion = false;
      this.getServicesList();
    } else {
      this.checkConnetion = true;
      this.getServicesList();
    }
  }
  takeDiscoveredServices() {
    if (this.checkDiscovered) {
      this.checkDiscovered = false;
      this.getServicesList();
    } else {
      this.checkDiscovered = true;
      this.getServicesList();
    }
  }
  takeUnusedServices() {
    if (this.checkUsed) {
      this.checkUsed = false;
      this.getServicesList();
    } else {
      this.checkUsed = true;
      this.getServicesList();
    }
  }
  getServicesList() {
    this.adminService.getServices()
      .subscribe(data => {
        this.data = data;
        const services = data.services;
        console.log(this.services);
        if (this.checkConnetion) {
          console.log(this.checkConnetion);
          const connected = services.filter(item => item.connected === 1);
          console.log(connected);
          this.services = connected;
        }  if (this.checkDiscovered) {
          const discovered = services.filter(item => item.connected === 0);
          this.services = discovered;
        }  if (this.checkUsed) {
          const unused = services.filter(item => item.used === 0);
          this.services = unused;
        }  if (this.checkConnetion && this.checkDiscovered) {
          const connected = services.filter(item => item.connected === 1);
          const discovered = services.filter(item => item.connected === 0);

          this.services = connected.concat(discovered);
          console.log(this.services);
        } else {
          this.services = [];
        }
      });
  }
}
