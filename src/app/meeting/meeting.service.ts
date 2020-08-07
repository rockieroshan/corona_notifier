import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private locationUrl = 'https://api.opencagedata.com/geocode/v1/json?q=';

  constructor(private http: HttpClient) {}
  private dummyData = [
    {
      address: 'Elfenstraße Munich Germany 81739',
      date: ['Mon Aug 10 2020 10:31:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Lukas Müller'
    },
    {
      address: 'Berlin, Berlin Germany 83332',
      date: ['Tue Jul 12 2019 20:41:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Leon Schmidt'
    },
    {
      address: 'Heinrich Heine, Nortorf Germany 24583',
      date: ['Wed Jan 1 2020 14:21:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Finn Schneider'
    },
    {
      address: 'Ruschestrasse Grabow Germany 19297',
      date: ['Thur Feb 7 2020 1:31:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Julia Fischer'
    },
    {
      address: 'Messedamm Dresden Germany 81739',
      date: ['Fri Mar 5 2020 11:11:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Anna Weber'
    },
    {
      address: 'An der Schillingbrucke Königsbronn Germany 34554',
      date: ['Sat Apr 2 2020 10:54:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Julia Fischer'
    },
    {
      address: 'Budapester Straße Braunfels Germany 74455',
      date: ['Sun May 6 2020 09:33:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Tobias Schäfer'
    },
    {
      address: 'Kastanienallee Memmert Germany 34543',
      date: ['Mon Jun 15 2020 02:23:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Jonas Meyer'
    },
    {
      address: 'Spresstrasse Bielefeld Innenstadt Germany 34563',
      date: ['Tue Jul 1 2020 08:01:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Ben Wagner'
    },
    {
      address: 'Koenigstrasse Belvedere Germany 33442',
      date: ['Wed Aug 17 2020 10:31:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Elias Becker'
    },
    {
      address: 'Hans-Grade-Allee Behlendorf Germany 53423',
      date: ['Thur Sep 17 2020 10:2:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Hannah Bauer'
    },
    {
      address: 'Mühlenstrasse Regensburg Germany 32422',
      date: ['Fri Oct 18 2020 07:35:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Hannah Hoffmann'
    },
    {
      address: 'Halberstadt Ruschestrasse Germany 34234',
      date: ['Sat Nov 10 2020 09:01:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Elias Neumann'
    },
    {
      address: 'Schillerstrasse Egling Germany 42342',
      date: ['Sun Dec 16 2020 09:54:01', 'Thu Aug 13 2020 10:31:01'],
      name: 'Mia Zimmermann'
    }
  ];
  setFormDataLocal(formData: Array<any>) {
    if (formData[0]) {
      this.dummyData.unshift(formData[0]);
      localStorage.setItem('formData', JSON.stringify(this.dummyData));
    }
  }
  setPreviousData() {
    const retrievedObject = localStorage.getItem('formData');
    const previousData = JSON.parse(retrievedObject);
    if (previousData.length !== 0) {
      // this.dummyData.unshift(formData[0]);
      localStorage.setItem('formData', JSON.stringify(previousData));
    }
  }
  getGeoLocation(latitude: string, longitude: string): Observable<any> {
    return this.http.get(
      `${this.locationUrl}${latitude}+${longitude}&key=${environment.key}`
    );
  }
}
