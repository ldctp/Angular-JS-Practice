import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookDetailGuard implements CanActivate {

    constructor(private router: Router){
        
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            const id = Number(route.paramMap.get('id'));
            if(isNaN(id)) {
                alert('Invalid product id');
                this.router.navigate(['/books']);
                return false
            }
            return true;
        }    
    }