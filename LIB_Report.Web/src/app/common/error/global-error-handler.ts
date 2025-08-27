import {ErrorHandler, Injectable, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private currentLang: string;

  constructor(private injector: Injector, private router: Router) {

  }

  handleError(error: Error | HttpErrorResponse) {

    let message;
    let stackTrace;
    if (error instanceof HttpErrorResponse) {
      // Server error
    

      // stackTrace = errorService.getServerErrorStackTrace(error);


    } else {
      console.log(error);
      // message = errorService.getClientErrorMessage(error);
      // notifier.showMessage(false, message);
      // if (this.currentLang === AMHARIC_LANG) {
      //   notifier.showMessage(false, SOMETHING_WRONG_AMH);
      // } else {
      //   notifier.showMessage(false, SOMETHING_WRONG_ENG);
      // }

    }

    // Always log errors
    // logger.logError(message, stackTrace);
  }
}

