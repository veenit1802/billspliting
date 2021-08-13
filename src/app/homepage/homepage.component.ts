import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HomepageService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private fb:FormBuilder,private hp:HomepageService) { }
  clicked:boolean=false;

  ngOnInit(): void {
  }
  grp = this.fb.group({
    mem1:['',],
    mem2:['',],
    mem3:['',],
    mem4:['',],
    mem5:['',]
  });

//   addGroup()
//   {
//     this.loginService.sendData(this.login.value).subscribe(
//       (success:any) => {
//      console.log(success);
//      this.loginService.loginUser(success.jwtToken);
//      window.location.href="/home"
//  },
//  error => {
//      console.log(error);
//  })
// }

  check()
  {
    this.clicked=!this.clicked;
  }

}
