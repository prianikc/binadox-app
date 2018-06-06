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
  private filter: any = {};
  public query = '';
  public connected = false;
  public discovered = false;
  public used = false;

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
    const filter = {
      // email: '',
      // name: 'Mark'
      address: 'England'
    };
    let users = [{
      name: 'John',
      email: 'johnson@mail.com',
      age: 25,
      address: 'USA'
    },
    {
      name: 'Tom',
      email: 'tom@mail.com',
      age: 35,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }
    ];


    users = users.filter(function (item) {
      for (const key in filter) {
        if (item[key] === undefined || item[key] !== filter[key]) {
          return false;
        }
      }
      return true;
    });

    console.log(users);

    const filterConditionType = 'tree';
    const filterConditionColors = ['yellow', 'brown'];

    // A function which returns a function to be used for filtering.
    const includeType = (includedType) =>
      ({ type }) => type === includedType;
    // Another function which returns a function to also be used for filtering.
    const includeColors = (includedColors) =>
      ({ colors }) => colors.some(color => includedColors.includes(color));

    // This function takes any number of functions, and returns a function.
    // It returns a function that will "AND" together their return values of all the original functions
    const and = (...funcs) => (...innerArgs) => funcs.every(func => func(...innerArgs));

    // Create a filter which includes the type `filterConditionType`
    const treeFilter = includeType(filterConditionType);
    // Create a filter which includes the colors in `filterConditionColors`
    const colorsFilter = includeColors(filterConditionColors);
    // The array of test data
    const arr = [
      { id: 1, type: 'tree', colors: ['green', 'brown'] },
      { id: 2, type: 'animal', colors: ['yellow', 'green'] },
      { id: 3, type: 'tree', colors: ['yellow', 'brown'] }
    ];

    // Now do that actual filtering of the array.
    const filteredArray = arr.filter(and(treeFilter, colorsFilter));
    // And print it
    console.log(filteredArray);



    this.getServicesList();
  }
  filterConnected() {
    if (!this.connected) {
      this.connected = false;
      this.getServicesList();
      console.log(this.connected);
      return;
    } else {
      this.connected = true;
      this.getServicesList();
      console.log(this.connected);
    }
  }

  filterDiscovered() {
    if (!this.discovered) {
      this.discovered = false;
      this.getServicesList();
      console.log(this.discovered);
      return;
    } else {
      this.discovered = true;
      this.getServicesList();
      console.log(this.discovered);
    }
  }

  filterUsed() {
    if (!this.used) {
      this.used = false;
      this.getServicesList();
      console.log(this.used);
      return;
    } else {
      this.used = true;
      this.getServicesList();
      console.log(this.used);
    }
  }

  getServicesList() {
    this.adminService.getServices()
      .subscribe(data => {
        this.data = data;
        this.services = data.services;
        if (this.connected && this.discovered && this.used) {
          this.services = data.services;
          console.log(this.services);
          return;
        }
        if (this.connected && this.discovered) {
          console.log(this.services);
          return;
        }
        if (this.connected && this.used) {
          const filter = [ '1' ];
          const services = this.services;

          const result = [];

          for (let i = 0; i < services.length; i++) {
            for (const prop in filter) {

              if (services.hasOwnProperty(prop) && services[i][prop] === filter[prop]) {
                result.push(services[i]);
                console.log(result);
                console.log(prop);
              }
            }
          }
          this.services = result;
          console.log(this.services);
          return;

        }
        if (this.discovered && this.used) {
          console.log(this.services);
          return;
        }
        if (this.used) {
          return this.services = this.services.filter(it => it.used === 0);
        }
        if (this.connected) {
          return this.services = this.services.filter(it => it.connected === 1);
        }
        if (this.discovered) {
          return this.services = this.services.filter(it => it.connected === 0);
        } else {
          this.services = data.services;
        }
      });
  }
}
