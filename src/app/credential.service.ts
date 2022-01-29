import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  constructor(private restService: RestService) { }

  collectionName : string = 'grocerystoreapp_users';

  adminCredential(criteria: any)
  {
    const loginObj = {
      selector: {
        email: criteria.email.toLowerCase(),
        password: criteria.password,
        role: "user"
      },
      fields: ['_id', '_rev', 'name', 'email', 'password', 'role', 'account'],
    };
    return this.restService.findByCriteria(this.collectionName, loginObj);
  }

}
