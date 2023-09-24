import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

class User {
  id!: number;
  name!: string;
  email!: string;
}

@Component({
  selector: 'app-userlist-httpservice',
  templateUrl: './userlist-httpservice.component.html',
  styleUrls: ['./userlist-httpservice.component.css'],
})
export class UserlistHttpserviceComponent implements OnInit {
  userform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  todo: any;

  users: User[] = [];

  constructor(private http: HttpClient) {
    http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe(x => this.todo = x);
  }

  ngOnInit(): void {
    this.getUsers().subscribe((response) => {
      this.users = response;
    });
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  adduser() {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
      name: this.userform.controls.name.value,
      email: this.userform.controls.email.value,
    });
  }

  updateUser(user: User) {
    const updateUserUrl = `https://jsonplaceholder.typicode.com/users/${user.id}`;
    return this.http.put<User>(updateUserUrl, user);
  }

  deleteUser(userId: number) {
    const deleteUserUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.delete(deleteUserUrl);
  }

  onclick() {
    this.adduser().subscribe((response) => {
      this.users.push(response);
    });
  }

  onEdit(user: User) {
    this.updateUser(user).subscribe((response) => {
      console.log('User updated successfully:', response);
    });
  }

  onDelete(userId: number) {
    this.deleteUser(userId).subscribe(() => {
      console.log('User deleted successfully.');
      this.users = this.users.filter((user) => user.id !== userId);
    });
  }
}
