export class generate {
    static generateP() {
        let id = Math.floor(Math.random() * 100000000000000000).toString(36);
        let id2 = Math.floor(Math.random() * 100000000000000000).toString(36);

        let res = id + Math.floor(Math.random() * 100000000000000000).toString(36) + id2;
        return res;
    }
}