class User {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }

    login() {
        console.log(this.userName, 'just login');
    }

}

var userOne = new User('haopn', 'haopn@vng.com.vn');
userOne.login();