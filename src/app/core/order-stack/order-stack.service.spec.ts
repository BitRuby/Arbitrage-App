import { TestBed, inject } from '@angular/core/testing';

import { OrderStackService } from './order-stack.service';

describe('OrderStackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderStackService]
    });
  });

  it('should be created', inject([OrderStackService], (service: OrderStackService) => {
    expect(service).toBeTruthy();
  }));
});
