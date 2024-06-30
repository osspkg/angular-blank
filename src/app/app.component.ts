import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from '@onega-ui/core';
import { MenuvModule } from '@onega-ui/kit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuvModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
