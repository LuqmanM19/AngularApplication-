import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlevelService } from '../data-table/flevel.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.css']
})
export class DatatableComponent {
  
  dataArr: any = [];
  dataSource: any = [];
  chart: any = [];

  constructor(
    private route:ActivatedRoute,private flevelservice: FlevelService
    ) {}

  ngOnInit(){

    this.getData();

    this.flevelservice.getLevel()
      .subscribe(res => {
        
        let normal = res['stations'].map(res => res.normal)
        let alert = res['stations'].map(res => res.alert)
        let warning = res['stations'].map(res => res.warning)
        let danger = res['stations'].map(res => res.danger)

        let station = res['stations'].map(res => res.station)
        

        this.chart = new Chart('canvas',{
          type: 'line',
          data: {
            labels: station,
            datasets: [
              {
                data: normal,
                borderColor: '#45ff33',
                fill: false
              },
              {
                data: alert,
                borderColor: '#c6ff33',
                fill: false
              },
              {
                data: warning,
                borderColor: '#f3ff33',
                fill: false
              },
              {
                data: danger,
                borderColor: '#ff3333',
                fill: false
              },

            ]
          },
          options:{
            legend: {
              display: false
            },
            scales:{
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })

      })
  }

  getData()
  {
    this.flevelservice.getData().subscribe(
      data =>{
      this.dataArr = data;
      console.log(this.dataArr);
    })
  }


}
