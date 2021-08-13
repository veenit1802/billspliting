import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-grpcollection',
  templateUrl: './grpcollection.component.html',
  styleUrls: ['./grpcollection.component.css']
})
export class GrpcollectionComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  transact = this.fb.group({
    grpId:[''],
    amount:[''],
    description:['']
  });


}
