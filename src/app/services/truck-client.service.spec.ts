import { TestBed } from '@angular/core/testing';

import { TruckClientService } from './truck-client.service';

describe('TruckClientService', () => {
  let service: TruckClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
