import { TestBed } from '@angular/core/testing';

import { CostumProductsService } from './costum-products.service';

describe('CostumProductsService', () => {
  let service: CostumProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
