import { TestBed } from '@angular/core/testing';

import { PortailService } from './portail.service';

describe('PortailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortailService = TestBed.get(PortailService);
    expect(service).toBeTruthy();
  });
});
