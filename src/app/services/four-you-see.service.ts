import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { MediaData } from '../model/media-data';

@Injectable()
export class FourYouSeeService {

  public httpHeader: Headers;
  protected serviceUrl: string = 'https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline';

  constructor(private http: HttpClient) { 
      this.httpHeader = new Headers();
  }

  public getListOfAllMediaData() {
      return this.http.get<Array<MediaData>>(this.serviceUrl);
  }

}
