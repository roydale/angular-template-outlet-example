import { Component } from '@angular/core';
import { WeatherCustomActionComponent } from './widgets/weather-custom-action/weather-custom-action.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [WeatherWidgetComponent, WeatherCustomActionComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
}
