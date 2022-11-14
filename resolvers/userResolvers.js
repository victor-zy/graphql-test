import userModel from '../Model/userModel';

export default {
    Query: {
        userList: () => userModel.getUserList(),
    },
    Mutation: {
        createUser: (parent, args) => {
            console.log(args);
            const user = new userModel({
               name: args.name,
               age: args.age
            }).create();
            return user;
        }
    }
}