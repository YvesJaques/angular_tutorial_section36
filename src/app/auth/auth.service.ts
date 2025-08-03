import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    loggedIn = false;

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('fireabaseurl',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}