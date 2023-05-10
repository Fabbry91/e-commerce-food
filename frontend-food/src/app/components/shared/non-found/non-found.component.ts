import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-found',
  templateUrl: './non-found.component.html',
  styleUrls: ['./non-found.component.css']
})
export class NonFoundComponent implements OnInit {

  @Input() visible = false;

  @Input() notFoundMessage = "Nothing Found!";

  @Input() resetLinkText = "Reset";

  @Input() resetLinkRoute = "/";


  constructor() { }

  ngOnInit(): void {
  }

}
