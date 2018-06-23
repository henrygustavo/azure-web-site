import { IPartialConfigOptions } from 'ng2-ui-auth';
import { environment } from './../environments/environment';

export const AuthConfig: IPartialConfigOptions =  {
    loginUrl : environment.apiUrl + 'login',
    tokenPrefix : '',
    tokenName : 'access_token'
};

