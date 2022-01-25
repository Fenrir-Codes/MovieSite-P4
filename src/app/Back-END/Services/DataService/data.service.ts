import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    
    private loginStatus = new BehaviorSubject<boolean>(false);
    currentStatus = this.loginStatus.asObservable()

    private isAdmin = new BehaviorSubject<boolean>(false);
    currentadminStatus = this.isAdmin.asObservable();

    private isUser = new BehaviorSubject<boolean>(false);
    currentUserStatus = this.isUser.asObservable();

    private movieId = new BehaviorSubject<number>(0);
    currentId = this.movieId.asObservable();

    private userId = new BehaviorSubject<number>(0);
    currenUserId = this.userId.asObservable();

    private searchString = new BehaviorSubject<string>('');
    currentString = this.searchString.asObservable();

    private avatar = new BehaviorSubject<string>('');
    currentUser = this.avatar.asObservable();

    private avatarName = new BehaviorSubject<string>('');
    currentName = this.avatarName.asObservable();

    constructor() { }
    /* for login */
    changeLoginStatus(status: boolean) {
        this.loginStatus.next(status);
    }

    changeAdminStatus(admin: boolean) {
        this.isAdmin.next(admin);
    }
    
    changeUserStatus(user: boolean) {
        this.isUser.next(user);
    }

    setUserId(id: number) {
        this.userId.next(id);
    }

    /* For passe movie id */
    setMovieId(id: number) {
        this.movieId.next(id);
    }

    setSearchString(text: string){
        this.searchString.next(text);
    }

    changeMenuAvatar(image: string){
        this.avatar.next(image);

    }

    changeAvatarName(name: string){
        this.avatarName.next(name);
    }

}