import { TestBed } from '@angular/core/testing';

import { CvFormService } from './cv-form.service';

describe('CvFormService', () => {
  let service: CvFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
