import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

    private users: User[] = [new User('Maera', 'David', 'maera@maera.com', 'lait de coco au chocolat', ['coder', 'jouer aux jeux vidéos'])
    ];
}