import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { MatPaginator } from '@angular/material/paginator';

import { ClaimDialog } from './dashboard-claim';
import { UnclaimDialog } from './dashboard-unclaim';
import { DeviceDialog } from './dashboard-device';
import { ErrorDialog } from './dashboard-error';


import { ConnectorService } from '../connector.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface DeviceElement {
  mac: string;
  model: string;
  serial: string;
  connected: boolean;
  type: string;
  deviceprofile_name: string;
  height: Int16Array;
  map_id: string;
  map_name: string;
  name: string;
  orientation: Int16Array;
  site_id: string;
  site_name: string;
  x: Int16Array;
  y: Int16Array;
  isLocating: boolean;
}

export interface MistDevices {
  results: DeviceElement[];
  total: number;
  limiit: number;
  page: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {


  headers = {};
  cookies = {};
  host = '';
  self = {};
  search = "";
  orgs = [];
  sites = [];
  maps = [];
  org_id: string = "";
  site_name: string = "__any__";
  map_id: string = "__any__";
  device_type: string = ""
  me: string = "";

  claimButton: string = "To Site";

  topBarLoading = false;
  loading = false;


  filteredDevicesDatase: MatTableDataSource<DeviceElement> | null;
  devices: DeviceElement[] = []

  resultsLength = 0;
  displayedColumns: string[] = ['mac', 'name', 'type', 'model', 'serial',  'connected', 'site_name', 'action']

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http: HttpClient, private _appService: ConnectorService, public _dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._appService.headers.subscribe(headers => this.headers = headers)
    this._appService.cookies.subscribe(cookies => this.cookies = cookies)
    this._appService.host.subscribe(host => this.host = host)
    this._appService.self.subscribe(self => this.self = self || {})
    this._appService.org_id.subscribe(org_id => this.org_id = org_id)
    this._appService.site_name.subscribe(site_name => this.site_name = site_name)
   
    this.getMaps();
    this.getDevices();
  }


  getDevices() {
    var body = null
    if (this.site_name == "__any__") {
      body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, full: true, type: this.device_type }
    } else if (this.site_name) {
      body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: this.site_name, full: true, type: this.device_type }
    }
    if (body) {
        this.loading = true;
        this._http.post<DeviceElement[]>('/api/devices/', body).subscribe({
          next: data => {
            console.log(data)
              var tmp: DeviceElement[] = []
              data["results"].forEach(element => {
                if (element.site_name == this.site_name && (this.map_id == "__any__" || element.map_id == this.map_id)){
                  tmp.push(element)
                }
              });
              this.filteredDevicesDatase = new MatTableDataSource(tmp);
            
            this.filteredDevicesDatase.paginator = this.paginator;
            this.loading = false;
          },
          error: error => {
            var message: string = "There was an error... "
            if ("error" in error) { message += error["error"]["message"] }
            this.openError(message)
          }
        })

    }
  }

  getMaps() {
    this.topBarLoading = true;
    this._http.post<any>('/api/maps/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: this.site_name }).subscribe({
      next: data => this.parseMap(data),
      error: error => {
        var message: string = "There was an error... "
        if ("error" in error) {
          message += error["error"]["message"]
        }
        this.topBarLoading = false;
        this.openError(message)
      }
    })
  }
  parseMap(data) {
    if (data.maps.length > 0) {
      this.maps = this.sortList(data.maps, "name");    
    }
    this.topBarLoading = false;
    this.map_id = "__any__";
  }


  changeMap() {
    if (this.map_id == "__any__") {
      this.claimButton = "To Site";
    } else {
      this.claimButton = "To Map";
    }
    this.getDevices()
  }

  locate(device:DeviceElement): void{
    if (device.isLocating == true) {
      this._http.post<any>('/api/devices/unlocate/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, device_mac: device.mac }).subscribe({
        next: data => device.isLocating = false,
        error: error => {
          var message: string = "There was an error... "
          if ("error" in error) {
            message += error["error"]["message"]
          }
          this.openError(message)
        }
      })
    } else {
      this._http.post<any>('/api/devices/locate/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, device_mac: device.mac }).subscribe({
        next: data => device.isLocating = true,
        error: error => {
          var message: string = "There was an error... "
          if ("error" in error) {
            message += error["error"]["message"]
          }
          this.openError(message)
        }
      })
    }
  }

  // COMMON
  sortList(data, attribute) {
    return data.sort(function (a, b) {
      var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
      var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredDevicesDatase.filter = filterValue.trim().toLowerCase();

    if (this.filteredDevicesDatase.paginator) {
      this.filteredDevicesDatase.paginator.firstPage();
    }
  }


  // DIALOG BOXES
  // ERROR
  openError(message: string): void {
    const dialogRef = this._dialog.open(ErrorDialog, {
      data: message
    });
  }




  // CREATE DIALOG
  openClaim(): void {
    var body = {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      org_id: this.org_id,
      site_name: this.site_name,
      map_id: this.map_id,
      claim_codes: null
    }

    const dialogRef = this._dialog.open(ClaimDialog, {
      data: { body: body }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      console.log(this.site_name)
      this.getDevices()
    })
  }
  // EDIT DEVICE
  openEdit(device: DeviceElement): void {
    console.log(device)
    var body = {
      host: this.host,
      cookies: this.cookies,
      headers: this.headers,
      org_id: this.org_id,
      site_name: this.site_name,
      map_id: this.map_id
    }
    const dialogRef = this._dialog.open(DeviceDialog, {
      data: { sites: this.sites, body: body, device: device, editing: true }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        var body = {
          host: this.host,
          cookies: this.cookies,
          headers: this.headers,
          org_id: this.org_id,
          device: result.device,
          device_mac: result.device_mac
        }
        this._http.post<any>('/api/devices/provision/', body).subscribe({
          next: data => {
            this.getDevices()
            this.openSnackBar("Device " + result.mac + " successfully provisioned", "Done")
          },
          error: error => {
            var message: string = "Unable to save changes to Device " + device.mac + "... "
            if ("error" in error) { message += error["error"]["message"] }
            this.openError(message)
          }
        })
      }
    })
  }

  // DELETE DIALOG
  openDelete(device: DeviceElement): void {
    const dialogRef = this._dialog.open(UnclaimDialog, {
      data: device
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var body = {
          host: this.host,
          cookies: this.cookies,
          headers: this.headers,
          org_id: this.org_id,
          site_name: this.site_name,
          map_id: this.map_id,
          device_mac: device.mac

        }
        this._http.post<any>('/api/devices/unclaim/', body).subscribe({
          next: data => {
            this.getDevices()
            this.openSnackBar("Device " + device.mac + " successfully unclaimed", "Done")
          },
          error: error => {
            var message: string = "Unable to unclaim the device " + device.mac + "... "
            if ("error" in error) { message += error["error"]["message"] }
            this.openError(message)
          }
        })
      }
    });
  }

  // SNACK BAR
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}

