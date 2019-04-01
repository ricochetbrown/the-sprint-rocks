import { Component } from '@angular/core';
import { role } from './models/role';
import { player } from './models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TheSprint';
  roles: role[] = 
    [{
      "Id": 1,
      "Role": "The Duke",
      "Team": "OD"
    },
    {
      "Id": 2,
      "Role": "Level III Dev",
      "Team": "OD"
    },
    {
      "Id": 3,
      "Role": "IntelleWater",
      "Team": "OD"
    },
    {
      "Id": 4,
      "Role": "Remote Dev",
      "Team": "OD"
    },
    {
      "Id": 5,
      "Role": "Sniper",
      "Team": "OS"
    },
    {
      "Id": 6,
      "Role": "Bad Billy",
      "Team": "OS"
    },
    {
      "Id": 7,
      "Role": "Level II Dev",
      "Team": "OS"
    }];
  players: player[] = 
    [
      {
        "PlayerName": "John",
        "RoleId": null
       },
      {
        "PlayerName": "Dave",
        "RoleId": null
       },
      {
        "PlayerName": "Mike",
        "RoleId": null
       },
      {
        "PlayerName": "Derrick",
        "RoleId": null
       },
      {
        "PlayerName": "Kevin",
        "RoleId": null
       },
      {
        "PlayerName": "Brian",
        "RoleId": null
       },
      {
        "PlayerName": "Nick",
        "RoleId": null
       }
    ]
}
