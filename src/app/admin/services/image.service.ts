import { Injectable } from '@angular/core';
import { JwtHttp } from 'ng2-ui-auth';
import { BaseResourceService } from './base-resource.service';
import { Image } from '../models/image';

@Injectable()
export class ImageService extends BaseResourceService <Image> {
  constructor(private _jwHttp: JwtHttp) {
      super(_jwHttp, 'images');
  }
}
