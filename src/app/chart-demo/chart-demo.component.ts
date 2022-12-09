import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent {

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartData.push(1);
      this.chartData.push(2);
      this.chartData.push(3);
  
      this.chartDatalabels.push('A');
      this.chartDatalabels.push('B');
      this.chartDatalabels.push('C');
  
      this.ctx = document.getElementById('myChart');
      this.config = {
        type : 'bar',
        options : {
        },
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data',
            data: this.chartData,
            borderWidth: 5,
            borderColor: 'grey',
            backgroundColor: ['pink', 'yellow','red']
        }],
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    }

}
