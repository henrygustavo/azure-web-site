import { Injectable } from '@angular/core';
import { JwtHttp } from 'ng2-ui-auth';
import { BaseResourceService } from './base-resource.service';
import { Face } from '../models/face';

@Injectable()
export class FaceService extends BaseResourceService <Face> {
  constructor(private _jwHttp: JwtHttp) {
      super(_jwHttp, 'faces');
  }
}
