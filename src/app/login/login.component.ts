import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userid: any = '';
    password: string = '';
    paramsub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/login');
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.userid = params.get('id');
    });
  }

  itemClicked(){
    
    console.log(this.userid, this.password);
    // this.router.navigate('/account:userid')

  }
} 
