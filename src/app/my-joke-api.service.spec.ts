import { TestBed } from '@angular/core/testing';

import { MyJokeApiService } from './my-joke-api.service';

describe('MyJokeApiService', () => {
  let service: MyJokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
