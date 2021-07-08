import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   activeButton: boolean = true;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:

   addItem(itemName: object, itemMass: number): boolean {
     this.cargoHold.push(itemName)
     this.cargoMass += itemMass
     return this.maximumAllowedMass - this.cargoMass <= 200
     
   }

  //  disableButton(itemObject: number) {
  //   console.log(itemObject);
  //   console.log(this.equipmentItems[itemObject]['mass']);
  //   if (this.cargoHold.length === this.maxItems) {
  //     // || this.maximumAllowedMass - this.cargoMass >= (this.equipmentItems[itemObject]['mass'])
  //     console.log('return true')
  //     return true
  //   } else {
  //     console.log('return false')
  //     return false
  //   }
  //  }

   nearMax() {
    if (this.cargoMass + 200 >= this.maximumAllowedMass) {
      return true
    } else {
      return false
    }
   }

   emptyHold() {
     this.cargoHold = [];
     this.cargoMass = 0;
     

     return true
   }
   
}
