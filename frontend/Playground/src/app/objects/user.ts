export class User {
    constructor(public username: string, public password: string) {
        this.password = password;
        this.username = username;
    }
}