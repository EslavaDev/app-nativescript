export class User {
    constructor(
        public email: String,
        public password: String,
        public direction: String,
        public country: String,
        public name: String,
        public lastName: String,
        public identification: String,
        public counter: Number,
        public status: Boolean,
        public type: String,
        public signUpdate: any,
        public phone: String,
    ) { }
}