import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  Users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        const id = e.payload.doc.id;
        const data = e.payload.doc.data() as User;
        return {id, ...data
        } as User;
      })
    });
  }

  removeUser = user => this.userService.deleteUser(user);
  
}
