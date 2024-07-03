import { of } from 'rxjs';

export class MockActivatedRoute {
  private paramMapValues = {};
  private queryParamsValues = {};

  private _queryParamMap = {
    get: (id => {
      return this.queryParamsValues[id] || null;
    }),
    has: (id => {
      return !!this.queryParamsValues[id];
    })
  };
  private _queryParams = {
    get: (id => {
      return this.queryParamsValues[id] || null;
    }),
    has: (id => {
      return !!this.queryParamsValues[id];
    })
  };

  private _paramMap = {
    get: (id => {
      return this.paramMapValues[id] || null;
    }),
    has: (id => {
      return !!this.paramMapValues[id];
    })
  };

  get paramMap() {
    return of(this._paramMap);
  }

  get queryParams() {
    return of(this._queryParams);
  }

  get queryParamMap() {
    return of(this._queryParamMap);
  }

  get snapshot() {
    return {
      paramMap: this._paramMap,
      queryParamMap: this._queryParamMap,
      queryParams: this._queryParams
    };
  }

  public setParamMapValue(key: string, value: string) {
    this.paramMapValues[key] = value;
  }

  public setQueryParamsValue(key: string, value: string) {
    this.queryParamsValues[key] = value;
  }

}
