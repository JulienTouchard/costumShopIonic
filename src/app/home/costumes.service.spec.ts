import { TestBed } from '@angular/core/testing';

import { CostumesService } from './costumes.service';

describe('CostumesService', () => {
  let service: CostumesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
