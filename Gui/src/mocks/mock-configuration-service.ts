import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Configuration } from '../app/services/configuration/configuration.dto';
import { ConfigurationStubs } from './data/configuration.stubs';

@Injectable()
export class MockedConfigurationService {

  getConfiguration():Observable<Configuration> {
    return new Observable<Configuration>(subscriber => {
      subscriber.next(ConfigurationStubs.Configuration1);
      subscriber.complete();
    });
  }
}
