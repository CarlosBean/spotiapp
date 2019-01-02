export class Token {
    access_token: string;
    expired_in: number;
    token_type: string;
    start_date: number;

    constructor(access_token, expired_in = 3600, token_type = 'bearer', start_date = Date.now()) {
        this.access_token = access_token;
        this.expired_in = expired_in;
        this.token_type = token_type;
        this.start_date = start_date;
    }
}
