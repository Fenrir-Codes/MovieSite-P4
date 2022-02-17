import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/Interfaces/IProfile';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { UpdateUserComponent } from '../../Actions/UpdateUser/update-user/update-user.component';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';

@Component({
  selector: 'app-tableofprofiles',
  templateUrl: './tableofprofiles.component.html',
  styleUrls: ['./tableofprofiles.component.scss'],
})
export class TableofprofilesComponent implements OnInit {
  //#region Local variables
  isLoaded: boolean = false;
  filter: string = '';
  profileList: IProfile[] = [];
  user: any;
  userId: any;
  //#endregion

  //#region Table header columns array
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
  ];
  //#endregion

  constructor(
    private service: SharedService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private tokenService: Tokenservice,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getAllUsers();
  }

  //#region Get all users function
  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.profileList = res;
      if (this.profileList != null) {
        this.isLoaded = true;
      }
      //console.log(this.profileList);
    });
  }
  //#endregion

  //#region Delete user by id function
  deleteUser(id: number) {
    //console.log(id);
    this.service.deleteUser(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }
  //#endregion

  //#region filter function
  applyFilter(event: any) {
    //console.log(event);
    this.filter = event;
  }
  //#endregion

  //#region Open dialog function
  //dialog for update user profile
  openDialog(id: any) {
    this.service.getUserById(id).subscribe((data) => {
      this.user = data;
      console.log(this.user);

      this.dialog.open(UpdateUserComponent, {
        disableClose: true,
      });

      this.tokenService.enCryptKey('userUpdateToken', this.user);
    });
  }
  //#endregion




}
