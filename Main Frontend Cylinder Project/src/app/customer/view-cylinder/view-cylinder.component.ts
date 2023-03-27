import { Component, OnInit } from '@angular/core';
import { Cylinder } from 'src/app/Models/Cylinder';
import { SurrenderCylinder } from 'src/app/Models/surrenderCylinder';
import { CylinderService } from 'src/app/services/cylinder.service';
import { SurrenderCylinderService } from 'src/app/services/surrender-cylinder.service';

@Component({
  selector: 'app-view-cylinder',
  templateUrl: './view-cylinder.component.html',
  styleUrls: ['./view-cylinder.component.css']
})
export class ViewCylinderComponent implements OnInit {

  cylinders: Cylinder[] |any;
  constructor(private cylinderService:SurrenderCylinderService) { }

  ngOnInit() {
    
  this.cylinderService.showSurrenderCylinder()
  .subscribe(
    data => { this.cylinders = data;}, 
    err => {console.log(err)}
    );
  }
}
