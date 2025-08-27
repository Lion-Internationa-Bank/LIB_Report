import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, 
UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {
    }
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | 
    UrlTree {
        if (this.authService.isAuthenticated()) {
            if('/changepassword'==state.url){
                return true;
            }
            let userRoles = this.authService.getRoles();
            //let requiredRoles = MAIN_ROUTES.filter(route => route.path==state.url).map(role=>role.userType)[0];
            let requiredRoles = ["HR Report Viewer"];
            const hasRole = requiredRoles.some(role => userRoles.includes(role));
            //const hasRole=false;
            if (hasRole) {
            return true; // User has one of the required roles
            } else {
                // let requiredRoles = MAIN_ROUTES.filter(role => {
                //     let item=false;
                //      role.userType.forEach(element => {
                //         if(userRoles.includes(element))
                //             item =true;
                //     });
                //     return item;
                // });
                // if(requiredRoles.length>0){
                //     this.router.navigate([requiredRoles[0].path]);
                //     return true;
                // } else{
                    this.router.navigate(['/denied']); // Redirect to an access denied page
                    return false; // Prevent access
               // }
           
            }
        } else {

            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } 
            });
        }

                    
        return false;
    }
}