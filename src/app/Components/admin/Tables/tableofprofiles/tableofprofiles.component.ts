import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/Interfaces/IProfile';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tableofprofiles',
  templateUrl: './tableofprofiles.component.html',
  styleUrls: ['./tableofprofiles.component.scss']
})
export class TableofprofilesComponent implements OnInit {
  isLoaded:boolean = false;
  profileList: IProfile[] = [];

  tableHeaderColumns: string[] = [
    'Id',
    'Role',
    'Image',
    'Firstname',
    'Lastname',
    'Address',
    'Phone',
    'E-mail',
    'Update',
    'Delete',
  ]
  
  constructor(private service: SharedService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.profileList = res;
      if (this.profileList != null) {
        this.isLoaded = true;
      }
      //console.log(this.profileList);
    });
  }

  deleteUser(id: number){
    //console.log(id);
     this.service.deleteUser(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();      
    });
    
  }

}
