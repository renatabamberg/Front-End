import { TestBed } from '@angular/core/testing';

import { FormChangeServiceService } from './form-change-service.service';

describe('FormChangeServiceService', () => {
  let service: FormChangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormChangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
