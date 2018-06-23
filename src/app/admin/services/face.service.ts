import { Injectable } from '@angular/core';

import { BaseResourceService } from './base-resource.service';
import { Face } from '../models/face';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FaceService extends BaseResourceService <Face> {
  constructor(private _jwHttp: HttpClient) {
      super(_jwHttp, 'faces');
  }
}
