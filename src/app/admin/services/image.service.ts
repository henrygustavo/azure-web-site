import { Injectable } from '@angular/core';
import { BaseResourceService } from './base-resource.service';
import { Image } from '../models/image';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService extends BaseResourceService <Image> {
  constructor(private _jwHttp: HttpClient) {
      super(_jwHttp, 'images');
  }
}
