import { BaseEntity } from './base-entity';
import { FaceAttributes } from './face-attributes';

export class Face extends BaseEntity {

    facesAttributes: FaceAttributes[];
}
