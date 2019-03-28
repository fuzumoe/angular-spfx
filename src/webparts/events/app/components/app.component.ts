import {Component, OnInit} from '@angular/core';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import styles from "../../EventsWebPart.module.scss";


@Component({
  selector: 'spfx-app',
  templateUrl:"/src/webparts/events/app/components/app.component.html"
})
export class AppComponent implements OnInit{
    public context: IWebPartContext;

    constructor(){

    }
    private AddAttendee(){
      return;
    }
    private UpdateAttendee(){
      return;
    }

    private DeleteAttendee(){
      return;
    }

    public ngOnInit(){

    }
}
