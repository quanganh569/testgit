import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels: string[] = ['Tuần 1', 'Tuần 2 ', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6', 'Tuần 7','Tuần 8','Tuần 9','Tuần 10','Tuần 11'];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;
    rsApi:any=[{
		'value':[123, 234, 456, 789, 912, 123, 234, 362, 456, 789,912]
	},{
		'value':[123, 234, 456, 789, 912, 123, 234, 362, 456, 789,912]
	},
	{
		'value':[123, 234, 456, 789, 912, 123, 234, 362, 456, 789,912]
	},
];
	public barChartData: any[] = [
		{data: this.rsApi[0].value, label: 'Like bài viết'},
		{data: this.rsApi[1].value, label: 'Share bài viết'},
		{data: this.rsApi[2].value, label: 'Share bài viết'}
		
	];

	constructor () { }

	ngOnInit () {
	}

	// events
	chartClicked (e: any): void {
	}

	chartHovered (e: any): void {
	}

}
