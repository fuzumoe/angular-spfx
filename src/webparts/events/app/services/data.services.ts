
import { IEvent, IDataService } from '../models/events.model';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { Injectable } from '@angular/core';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { Title } from '@angular/platform-browser';

@Injectable
export class DataService implements IDataService {
  private context: IWebPartContext;

  private _eventItems: IEvent[] = [
    {
      ID: 1,
      Title: 'Company Event 1',
      FirstName: 'Clark',
      LastName: 'Kent',
      TotalAttendees: 3,
      Email: 'ckent@justiceleague.com',
      EventName: 'Compnay Event 1'
    },
    {
      ID: 2,
      Title: 'Company Event 2',
      FirstName: 'Diana',
      LastName: 'Prince',
      TotalAttendees: 3,
      Email: 'dprince@justiceleague.com',
      EventName: 'Compnay Event 2'
    },
    {
      ID: 3,
      Title: 'Company Event 3',
      FirstName: 'Arthur',
      LastName: 'Curry',
      TotalAttendees: 3,
      Email: 'acyrry@justiceleague.com',
      EventName: 'Compnay Event 3'
    },
    {
      ID: 4,
      Title: 'Company Event 4',
      FirstName: 'John',
      LastName: 'Jones',
      TotalAttendees: 4,
      Email: 'jjons@justiceleague.com',
      EventName: 'Compnay Event 4'
    }
  ];

  private _eventChoices: String[] = [
    'Company Event 1',
    'Company Event 2',
    'Company Event 3',
    'Company Event 4'

  ];

  private nextEventId: number = 5;

  constructor() {
    this.context = window["webPartContext"];
  }

 // for test environment
  private _testGetEvents(showpastevents?: boolean): Promise<IEvent[]> {
    return null;
  }

  private _testGetEventChoices(): Promise<String[]> {
    return null;
  }

  private _testAddEvent(event: IEvent): Promise<{}> {
    return null;
  }

  private _testUpdateEvent(event: IEvent): Promise<{}> {
    return null;
  }

  private _testDeleteEvent(event: IEvent): Promise<{}> {
    return null;
  }

 // for production environment


   private _prodGetEvents(showpastevents?: boolean): Promise<IEvent[]> {
    return null;
  }

  private _prodGetEventChoices(): Promise<String[]> {
    return null;
  }

  private _prodAddEvent(event: IEvent): Promise<{}> {
    return null;
  }

  private _prodUpdateEvent(event: IEvent): Promise<{}> {
    return null;
  }

  private _prodDeleteEvent(event: IEvent): Promise<{}> {
    return null;
  }

  public GetEventsAsync(showpastevents?: boolean): Promise<IEvent[]>{
     if(Environment.type === EnvironmentType.Local){
      return this._testGetEvents(showpastevents);
     }
     if(Environment.type === EnvironmentType.SharePoint){
      return this._testGetEvents(showpastevents);
     }

  }

  public GetEventsChoicesAsync(): Promise<String[]>{
    if(Environment.type === EnvironmentType.Local){
      return this._prodGetEventChoices();
    }
    if(Environment.type === EnvironmentType.SharePoint){
      return this._testGetEventChoices();
    }

  }

  public AddEventAsync(event: IEvent): Promise<{}>{
    if(Environment.type === EnvironmentType.Local){
      return this._testAddEvent(event);
    }
    if(Environment.type === EnvironmentType.SharePoint){
      return this._prodAddEvent(event);
    }

  }

  public UploadEventAsync(event: IEvent): Promise<{}>{
    if(Environment.type === EnvironmentType.Local){
      return this._testUpdateEvent(event);
    }
    if(Environment.type === EnvironmentType.SharePoint){
      return this._prodUpdateEvent(event);
    }
  }

  public DeleteEventAsync(event: IEvent): Promise<{}>{
    if(Environment.type === EnvironmentType.Local){
      return this._testDeleteEvent(event);
    }
    if(Environment.type === EnvironmentType.SharePoint){
      return this._prodDeleteEvent(event);
    }

  }

}
