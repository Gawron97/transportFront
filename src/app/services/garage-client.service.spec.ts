import { TestBed } from '@angular/core/testing';

import { GarageClientService } from './garage-client.service';

describe('GarageClientService', () => {
  let service: GarageClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
