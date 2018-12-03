import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topbar',
  styleUrls: ['./topbar.component.css'],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {
  public items: MenuItem[];
  constructor() {
  }

  public ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      }
    ];
  }
}
