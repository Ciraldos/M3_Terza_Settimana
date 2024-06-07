import { iAuthData } from '../models/i-auth-data';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iUser } from '../models/i-user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { iAuthResponse } from '../models/i-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  authSubject = new BehaviorSubject<null | iUser>(null);

  user$ = this.authSubject.asObservable();

  syncIsLoggedIn: boolean = false;

  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user => this.syncIsLoggedIn = user)
  )

  constructor(
    private http:HttpClient,
    private router:Router
    ) {this.restoreUser() }



  loginUrl: string = "http://localhost:3000/login"
  registerUrl: string = "http://localhost:3000/register"

  register(user:Partial<iUser>): Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.registerUrl, user)
  }
  login(authData:iAuthData): Observable<iAuthResponse>{
    return this.http.post<iAuthResponse>(this.loginUrl, authData)
    .pipe(tap(data =>{
      this.authSubject.next(data.user);
      localStorage.setItem("accessData", JSON.stringify(data))
      this.autologout()
    }))
  }
  logout():void{
    this.authSubject.next(null)
    localStorage.removeItem("accessData")
    this.router.navigate(["/auth/login"])
  }

  autologout():void{
    const accessData = this.getAccessData()
    if(!accessData) return
    const expDate = this.jwtHelper.getTokenExpirationDate(accessData.accessToken) as Date
    const expMs = expDate.getTime() - new Date().getTime()
    setTimeout(this.logout, expMs)
  }

  restoreUser():void{
    const accessData = this.getAccessData()
    if(!accessData) return
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return
    this.authSubject.next(accessData.user)
    this.autologout()
  }

  getAccessData():iAuthResponse | null {
    const accessDataJSON = localStorage.getItem("accessData");
    if(!accessDataJSON) return null;
    const accessData:iAuthResponse = JSON.parse(accessDataJSON)
    return accessData;
  }

}
