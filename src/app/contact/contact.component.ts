import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild('name') name!:ElementRef;
  @ViewChild('age') age!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('password') password!:ElementRef;
  userName(e:any):void{
    if(e.target.value.length==0){
      this.name.nativeElement.classList.add('_top')
    }else{
      this.name.nativeElement.classList.remove('_top')
    }
  }
  userAge(e:any):void{
    if(e.target.value.length==0){
      this.age.nativeElement.classList.add('_top')
    }else{
      this.age.nativeElement.classList.remove('_top')
    }
  }

  userEmail(e:any):void{
    if(e.target.value.length==0){
      this.email.nativeElement.classList.add('_top')
    }else{
      this.email.nativeElement.classList.remove('_top')
    }
  }

  userPassword(e:any):void{
    if(e.target.value.length==0){
      this.password.nativeElement.classList.add('_top')
    }else{
      this.password.nativeElement.classList.remove('_top')
    }
  }
}
