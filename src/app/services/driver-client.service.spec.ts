import { TestBed } from '@angular/core/testing';

import { DriverClientService } from './driver-client.service';

describe('DriverClientService', () => {
  let service: DriverClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
