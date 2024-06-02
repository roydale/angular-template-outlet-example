import { NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, inject, Injector, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetActions } from '../widget-actions.service';
import { WidgetState } from '../widget-state.service';

@Component({
	selector: 'weather-widget',
	standalone: true,
	imports: [NgTemplateOutlet],
	templateUrl: './weather-widget.component.html',
	styleUrls: ['./weather-widget.component.css'],
	providers: [WidgetActions, WidgetState]
})
export class WeatherWidgetComponent implements AfterViewInit {

	@Input() headerTemplate!: TemplateRef<any>;
	@Input() actionTemplate!: TemplateRef<any>;
	@Input() contentTemplate!: TemplateRef<{ $implicit: WidgetState }>;

	state = inject(WidgetState);
	actions = inject(WidgetActions);
	injector = inject(Injector);

	//@ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
	//@ViewChild('dateToday') dateTodayLabel!: TemplateRef<any>;

	ngAfterViewInit(): void {
		//this.container.createEmbeddedView(this.dateTodayLabel);
	}

	getDateToday(): string {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();

		const dateToday = mm + '/' + dd + '/' + yyyy;
		return dateToday;
	}
}
