import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MeetingService } from '../meeting.service';
import { AddMeetingComponent } from './add-meeting.component';

describe('AddMeetingComponent', () => {
  let component: AddMeetingComponent;
  let fixture: ComponentFixture<AddMeetingComponent>;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [AddMeetingComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(AddMeetingComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('meetingForm invalid when empty', () => {
    expect(component.meetingForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    // tslint:disable-next-line:no-string-literal
    const name = component.meetingForm.controls['name'];
    expect(name.valid).toBeFalsy();

    // name field is required
    errors = name.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeTruthy();

    // Set name to something correct
    name.setValue('test');
    errors = name.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeFalsy();
  });

  it('date field validity', () => {
    let errors = {};
    // tslint:disable-next-line:no-string-literal
    const date = component.meetingForm.controls['date'];
    expect(date.valid).toBeFalsy();

    // date field is required
    errors = date.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeTruthy();

    // Set date to something correct
    date.setValue('test');
    errors = date.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeFalsy();
  });

  it('address field validity', () => {
    let errors = {};
    // tslint:disable-next-line:no-string-literal
    const address = component.meetingForm.controls['address'];
    expect(address.valid).toBeFalsy();

    // address field is required
    errors = address.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeTruthy();

    // Set address to something correct
    address.setValue('test');
    errors = address.errors || {};
    // tslint:disable-next-line:no-string-literal
    expect(errors['required']).toBeFalsy();
  });

  it('submitting a meetingForm', () => {
    expect(component.meetingForm.valid).toBeFalsy();
    // tslint:disable-next-line:no-string-literal
    component.meetingForm.controls['name'].setValue('test');
    // tslint:disable-next-line:no-string-literal
    component.meetingForm.controls['date'].setValue('123456789');
    // tslint:disable-next-line:no-string-literal
    component.meetingForm.controls['address'].setValue('Abc');
    expect(component.meetingForm.valid).toBeTruthy();

    component.ngOnInit();
  });
});

describe('AddMeetingComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let meetingService: MeetingService;

  beforeEach(() => {
    // Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MeetingService]
    });

    // Instantaites HttpClient, HttpTestingController and MeetingService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    meetingService = TestBed.inject(MeetingService);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifies that no requests are outstanding.
  });

  describe('should check for GET Location deatils', () => {
    let expectedDetails;

    beforeEach(() => {
      // Dummy data to be returned by request.
      expectedDetails = {
        documentation: 'https://opencagedata.com/api',
        licenses: [
          {
            name: 'see attribution guide',
            url: 'https://opencagedata.com/credits'
          }
        ],
        rate: { limit: 2500, remaining: 2446, reset: 1596844800 },
        results: [
          {
            annotations: {
              DMS: {
                lat: "48\u00b0 4' 48.33984'' N",
                lng: "11\u00b0 40' 11.71236'' E"
              },
              MGRS: '32UPU9884728650',
              Maidenhead: 'JN58ub09jf',
              Mercator: { x: 1299089.563, y: 6088380.247 },
              OSM: {
                edit_url:
                  'https://www.openstreetmap.org/edit?node=784590242#map=17/48.08009/11.66992',
                note_url:
                  'https://www.openstreetmap.org/note/new#map=17/48.08009/11.66992&layers=N',
                url:
                  'https://www.openstreetmap.org/?mlat=48.08009&mlon=11.66992#map=17/48.08009/11.66992'
              },
              UN_M49: {
                regions: {
                  DE: '276',
                  EUROPE: '150',
                  WESTERN_EUROPE: '155',
                  WORLD: '001'
                },
                statistical_groupings: ['MEDC']
              },
              callingcode: 49,
              currency: {
                alternate_symbols: [],
                decimal_mark: ',',
                html_entity: '&#x20AC;',
                iso_code: 'EUR',
                iso_numeric: '978',
                name: 'Euro',
                smallest_denomination: 1,
                subunit: 'Cent',
                subunit_to_unit: 100,
                symbol: '\u20ac',
                symbol_first: 1,
                thousands_separator: '.'
              },
              flag: '\ud83c\udde9\ud83c\uddea',
              geohash: 'u283989ybg5ngbez9gju',
              qibla: 129.85,
              roadinfo: {
                drive_on: 'right',
                road: 'Elfenstra\u00dfe',
                speed_in: 'km/h'
              },
              sun: {
                rise: {
                  apparent: 1596772740,
                  astronomical: 1596764700,
                  civil: 1596770580,
                  nautical: 1596767880
                },
                set: {
                  apparent: 1596825480,
                  astronomical: 1596833460,
                  civil: 1596827640,
                  nautical: 1596830280
                }
              },
              timezone: {
                name: 'Europe/Berlin',
                now_in_dst: 1,
                offset_sec: 7200,
                offset_string: '+0200',
                short_name: 'CEST'
              },
              what3words: { words: 'trial.sleeping.fever' }
            },
            bounds: {
              northeast: { lat: 48.0801944, lng: 11.6700201 },
              southwest: { lat: 48.0799944, lng: 11.6698201 }
            },
            components: {
              'ISO_3166-1_alpha-2': 'DE',
              'ISO_3166-1_alpha-3': 'DEU',
              _category: 'building',
              _type: 'building',
              city: 'Munich',
              city_district: 'Stadtbezirk 16 Ramersdorf - Perlach',
              continent: 'Europe',
              country: 'Germany',
              country_code: 'de',
              house_number: '30',
              political_union: 'European Union',
              postcode: '81739',
              road: 'Elfenstra\u00dfe',
              state: 'Bavaria',
              state_code: 'BY',
              suburb: 'Bezirksteil Waldperlach'
            },
            confidence: 10,
            formatted: 'Elfenstra\u00dfe 30, 81739 Munich, Germany',
            geometry: { lat: 48.0800944, lng: 11.6699201 }
          }
        ],
        status: { code: 200, message: 'OK' },
        stay_informed: {
          blog: 'https://blog.opencagedata.com',
          twitter: 'https://twitter.com/OpenCage'
        },
        thanks: 'For using an OpenCage API',
        timestamp: {
          created_http: 'Fri, 07 Aug 2020 11:17:33 GMT',
          created_unix: 1596799053
        },
        total_results: 1
      };
    });

    // Test case
    const url =
      'https://api.opencagedata.com/geocode/v1/json?q=48.08+11.67&key=e29a844d40ae4d2f9be19f95a31971bd';
    const latitude = '48.08';
    const longitude = '11.67';

    it('should return expected Location details by calling once', () => {
      meetingService
        .getGeoLocation(latitude, longitude)
        .subscribe(
          feed =>
            expect(feed).toEqual(
              expectedDetails,
              'should return expected Location details'
            ),
          fail
        );

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedDetails); // Return expectedDetails
    });
  });
});
