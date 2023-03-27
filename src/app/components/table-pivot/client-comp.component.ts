import { Component, OnInit } from '@angular/core';
import { map } from 'jquery';
import { from, reduce } from 'rxjs';


interface Clients {
  id: number;
  nombre: string;
  cantDev: number;
  otro1: string;
  otro2: string;
}

@Component({
  selector: 'app-client-comp',
  templateUrl: './client-comp.component.html',
  styleUrls: ['./client-comp.component.scss']
})
export class ClientCompComponent implements OnInit {


  name = 'Angular';
  listClient: Clients[] = [
    {
      id: 1,
      nombre: 'pepe1',
      cantDev: 0,
      otro1:"",
      otro2:"true",
    },
    {
      id: 2,
      nombre: 'pepe2',
      cantDev: 0,
      otro1:"",
      otro2:"true",
    },
    {
      id: 3,
      nombre: 'pepe3',
      cantDev: 0,
      otro1:"",
      otro2:"true",
    },
  ];

  opciones: any[] = [];
  seleccionados: any[] = [];
  amountByPatient: number[] = [];
  amountStockSelect: number = 10;

  constructor() {
    this.amountByPatient = this.addValueToSelect(this.amountStockSelect || 0);
    
  }
  ngOnInit(): void {
    console.log(this.amountByPatient);
    this.loadData(this.listClient);
  }

  loadData(listClient: Clients[]) {
    this.opciones = listClient.map((m:Clients,index)=>{
      
      return {
        id: m.id,
        nombre: m.nombre,
        cantDev: m.cantDev,
        flag: index ==0 ? true : false,
      } 
    })
  }

  


  get getTotalAmount():number {
    
    if (this.seleccionados.length !=0) {
      return this.seleccionados.map(m=> {
        if (m) {
         return  m.cantDev
        }
        return 0;
      }).reduce((a,b)=>{return a+b});
    }
    return 0;

  }


  addValueToSelect(result: number): number[] {
    let arr: number[] = [];
    let count: number = 0;
    while (count <= result) {
      arr.push(count);
      count++;
    };
    return arr;
  }

  changeAmountFromPatient(event: any, indexFather: number) {
    let value = + event.srcElement.value;
    console.log(value);
    if (value >=0) {
      this.seleccionados[indexFather].cantDev = value;
    }
  }

  selectingPatient(indexFather: number) {
    if (this.seleccionados[indexFather]) {
      this.seleccionados[indexFather].cantDev = 0;
    }
  }


  recalcAmount() {
    this.amountByPatient = this.addValueToSelect(this.amountStockSelect);
    this.seleccionados = [];
  }

  addRowListPatiente(indexFather:number){
    if (this.opciones[indexFather+1]) {
      this.opciones[indexFather+1].flag=true;
    }
  }

  removeRow(indexFather:number){
  
      if (this.opciones[indexFather+1] && !this.opciones[indexFather+1].flag) {
        
        this.opciones[indexFather].flag=false;
        this.seleccionados.pop();
      }else if (indexFather+1 == this.opciones.length) {
        
        this.opciones[indexFather].flag=false;
        this.seleccionados.pop();
      }
  
  }

  save() {
    
    console.log(this.seleccionados);
    for (let i = 0; i < this.listClient.length; i++) {
      const element = this.listClient[i];
      let count = this.seleccionados.length;
      let flag = false;
      console.log(typeof element);
        
        while (count--) {
          if (typeof this.seleccionados[count] == 'object' &&  this.seleccionados[count].id == element.id ) {
            element.cantDev= this.seleccionados[count].cantDev || 0;
            flag = true;
            continue;
          }
        }
        //not fount , reset
        if (!flag) {
          element.cantDev= 0;
        }
      
    }
    console.log("Saved");
    console.log(this.listClient);

  }

  cancel(){
    console.log("Canceled");
    console.log(this.listClient);
  }



}
