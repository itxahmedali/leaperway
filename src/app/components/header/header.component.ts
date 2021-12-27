import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public href: string = "";
  // cUrl:string = '';
  // pageName = [
  //   'tabs',
  //   'login',
  // ]
  // pageNameCon: boolean = false;


  constructor(
    // private router: Router,
    // private cd: ChangeDetectorRef,
    ) { }

  ngOnInit() {
    // this.href = this.router.url;
    // ObservableService.webUrl.subscribe(value => {
    //   console.log(this.href)
    //   this.cUrl = value
    //   this.urlCheck(value)
    // })
  }

  // urlCheck(r) {
  //   console.log(r)
  //   let url = r.split("/")[1]

  //   for(var i = 0; i < this.pageName.length; i++){
  //     if(this.pageName[i] == url){
  //       this.pageNameCon = true;
  //       break
  //     }else{
  //       this.pageNameCon = false;
  //     }
  //   }
  //   this.cd.detectChanges();
  // }

}
