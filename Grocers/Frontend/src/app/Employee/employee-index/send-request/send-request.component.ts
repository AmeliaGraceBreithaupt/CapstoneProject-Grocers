import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css'],
})
export class SendRequestComponent implements OnInit {
  constructor(public request: EmployeeService) {}
  msg?: string;

  ngOnInit(): void {}

  sendReq(requestRef: any): void {
    this.request.sendRequestToAdmin(requestRef);
    this.msg = 'Request Sent!';
  }
}
