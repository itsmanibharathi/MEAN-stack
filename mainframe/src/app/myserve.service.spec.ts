import { TestBed } from '@angular/core/testing';

import { MyserveService } from './myserve.service';

describe('MyserveService', () => {
  let service: MyserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
