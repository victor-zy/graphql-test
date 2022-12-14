import {nanoid} from 'nanoid';
import db from '../db';

export default class UserModel {
    constructor({name, age}) {
        this.id = nanoid();
        this.name = name;
        this.age = age;
    }

    create() {
        const usersData = db.getData()['users'];
        usersData.push({id: this.id, name: this.name, age: this.age});
        db.setData('users', usersData);
        return {id: this.id, name: this.name, age: this.age};
    }

    static getUserList() {
        return db.getData()['users'];
    }
}