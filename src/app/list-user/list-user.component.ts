import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

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
        console.log('name' + data.name);
        return {id, ...data
        } as User;
      })
    });
  }

  removeUser = user => this.userService.deleteUser(user);
  
}
