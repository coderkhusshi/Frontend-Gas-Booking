import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cylinder } from 'src/app/Models/Cylinder';
import { SurrenderCylinder } from 'src/app/Models/surrenderCylinder';
import { SurrenderCylinderService } from 'src/app/services/surrender-cylinder.service';

@Component({
  selector: 'app-manage-cylinder',
  templateUrl: './manage-cylinder.component.html',
  styleUrls: ['./manage-cylinder.component.css']
})

export class ManageCylinderComponent implements OnInit {

  surrender: SurrenderCylinder[] |any;
  constructor(private cylinderService:SurrenderCylinderService,private router:Router) { }

  ngOnInit() {

  this.cylinderService.showSurrenderCylinder()
  .subscribe(
    data => { this.surrender = data;
   }, 
    err => {console.log(err)}
    );
}

deleteCylinder(surrenderId: number) {
  let candelete = confirm(`Are you Sure to Delete Booking with '${surrenderId}'`);
    if (candelete==true) {
      this.cylinderService.deleteSurrenderCylinder(surrenderId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.cylinderService.showSurrenderCylinder().subscribe(cyls => {
          this.surrender = cyls;
        });
      });
    } 
}
}