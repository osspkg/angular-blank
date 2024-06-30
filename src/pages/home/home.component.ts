import { Component, OnInit } from '@angular/core';
import { RequestService } from '@onega-ui/core';
import { FormComponent } from '@shared/form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly req: RequestService) {
  }

  ngOnInit() {
    this.req.get('hello').subscribe(value => console.log(value));
  }
}
