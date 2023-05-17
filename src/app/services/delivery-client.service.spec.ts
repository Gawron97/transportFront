import { TestBed } from '@angular/core/testing';

import { DeliveryClientService } from './delivery-client.service';

describe('DeliveryClientService', () => {
  let service: DeliveryClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
