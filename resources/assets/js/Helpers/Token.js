class Token {
    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            return payload.iss == "http://realtimeapp.test/api/auth/login"
                ? true
                : false;
        }

        return false;
    }
    payload(token) {
        const payload = token.split(".")[1];
        // console.log(token);
        // console.log(this.decode(payload));
        return this.decode(payload);
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }
}

export default (Token = new Token());
