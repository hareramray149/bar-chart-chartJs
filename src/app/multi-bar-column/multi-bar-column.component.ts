import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-multi-bar-column',
  templateUrl: './multi-bar-column.component.html',
  styleUrls: ['./multi-bar-column.component.css']
})
export class MultiBarColumnComponent {

  ctx : any;
  config : any;
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartDatalabels.push('A');
      this.chartDatalabels.push('B');
      this.chartDatalabels.push('C');
  
      this.ctx = document.getElementById('myChart');

      this.config = {
        type : 'bar',
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data 1',
            data: [10,2,3],
            borderWidth: 5,
            borderColor: 'grey',
            backgroundColor:'pink'
          },
          { 
            label: 'Chart Data 2',
            data: [5,4,6],
            borderWidth: 5,
            borderColor: 'blue',
            backgroundColor: 'yellow'
          },
        { 
          label: 'Chart Data 3',
          data: [12,5,9],
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: 'red'
        }
      ],
        options : {
          scales: {
            x: {
                grid: {
                  offset: true
                }
            },
            y: {
              grid: {
                offset: true
              }
          }
        }
        }
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    }


}
