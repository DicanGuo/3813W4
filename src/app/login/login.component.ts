import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userid: string = '';
    password: string = '';
    errorMassage = "User credential not match";
    
    users = [
      {'userid': '1', 'password': '123'},
      {'userid': '2', 'password': '123'},
      {'userid': '3', 'password': '123'}
    ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  itemClicked(){
    // console.log(this.userid, this.password);
    // this.router.navigate('/account:userid')
    for (let i in this.users){
      if (this.userid == this.users[i].userid && this.password == this.users[i].password) {
        this.router.navigateByUrl('/account/' + this.userid);
      }
      else {
        alert(this.errorMassage);
      }
    }
  }
}
