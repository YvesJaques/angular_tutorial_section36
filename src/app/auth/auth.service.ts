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
        this.http.post<AuthResponseData>('fireabaseurl',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )

        const response: AuthResponseData = {
            kind: "test",
            idToken: "test",
            email: "test@test.com",
            refreshToken: "test",
            expiresIn: "test",
            localId: "test"
        }
        return response
    }
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}