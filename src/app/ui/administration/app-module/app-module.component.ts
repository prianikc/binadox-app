import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../admin.service';
import { multiFilter } from '../filter.pipe';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-app-module',
  templateUrl: './app-module.component.html',
  styleUrls: ['./app-module.component.scss']
})

export class AppModuleComponent implements OnInit {
  modalRef: BsModalRef;
  public query = '';
  public connected = false;
  public discovered = false;
  public unused = false;

  public data: {
    services: [
      {
        id: number,
        name: string,
        url: string,
        connected: boolean,
        unused: boolean,
        warning: boolean,
        installed: boolean
      }

    ]
  };
  public services: any = [];
  items = [
    'MONTH', 'Two', 3];
  constructor(
    private adminService: AdminService,
    private modalService: BsModalService
  ) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getServicesList();
  }

  filterConnected() {
    if (!this.connected) {
      this.connected = false;
      this.getServicesList();
      return;
    } else {
      this.connected = true;
      this.getServicesList();
      return;
    }
  }

  filterDiscovered() {
    if (!this.discovered) {
      this.discovered = false;
      this.getServicesList();
      return;
    } else {
      this.discovered = true;
      this.getServicesList();
      return;
    }
  }

  filterUnused() {
    if (!this.unused) {
      this.unused = false;
      this.getServicesList();
      return;
    } else {
      this.unused = true;
      this.getServicesList();
      return;
    }
  }

  getServicesList() {
    this.adminService.getServices()
      .subscribe(data => {
        this.data = data;
        this.services = data.services;
        if (this.connected && this.discovered && this.unused) {
          this.services = data.services;
          return;
        }
        if (this.connected && this.discovered) {
          const filters = {
            installed: [1],
            unused: [0, 1]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
        if (this.connected && this.unused) {
          const filters = {
            connected: [1, 0],
            unused: [0]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
        if (this.discovered && this.unused) {
          const filters = {
            connected: [0],
            unused: [0, 1]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
        if (this.unused) {
          const filters = {
            unused: [0],
            connected: [0]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
        if (this.connected) {
          const filters = {
            connected: [1]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
        if (this.discovered) {
          const filters = {
            unused: [1]
          };
          this.services = multiFilter(this.services, filters);
          return;
        }
      });
  }
}
