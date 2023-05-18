import {Injectable} from "@angular/core";

@Injectable()
export class ErrorHandler {

  private _error: any

  public get error(): any {
    return this._error;
  }

  public set error(value: any) {
    this._error = value;
  }

}
