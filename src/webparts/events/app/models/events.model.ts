export interface IEvent{
  ID: Number;
  Title: string;
  FirstName: string;
  LastName:String;
  TotalAttendees: number;
  Email: String;
  EventName: string;
}

export interface IDataService{
  GetEventsAsync(showpastevents?: boolean): Promise<IEvent[]>;
  GetEventsChoicesAsync(): Promise<String[]>;
  AddEventAsync(event: IEvent): Promise<{}>;
  UploadEventAsync(event: IEvent): Promise<{}>;
  DeleteEventAsync(event: IEvent): Promise<{}>;
}
