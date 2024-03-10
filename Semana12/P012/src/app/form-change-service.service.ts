import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormChangeServiceService {
  private clickTime: Number | undefined | string;
  private submitTime: Number | undefined | string;

  constructor() { }

  handleClick() {
    this.clickTime = new Date().toLocaleTimeString();
  }

  handleSubmit() {
    this.submitTime = new Date().toLocaleTimeString();
  }

  getChanges() {
    return {
      clickTime: this.clickTime,
      submitTime: this.submitTime
    };
  }
}
