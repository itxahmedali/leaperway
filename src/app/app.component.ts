import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leaperway';
  // pageName = [
  //   'tabs',
  //   'login',
  // ]
  // pageNameCon: boolean = false;

  // public href: string = "";
  constructor(
    // private router: Router,
    // private activatedRoute: ActivatedRoute,
    // private titleService: Title
  ) {
  }


  ngOnInit() {
    // this.href = this.router.url;
    // console.log(this.router.url);
    // this.urlCheck(this.href);

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd),
    // ).subscribe(() => {
    //   const rt = this.getChild(this.activatedRoute);
    //   rt.data.subscribe(data => {
    //     console.log(data);
    //     this.titleService.setTitle(data.title)
    //   });
    // });
  }

  // getChild(activatedRoute: ActivatedRoute) {
  //   if (activatedRoute.firstChild) {
  //     return this.getChild(activatedRoute.firstChild);
  //   } else {
  //     return activatedRoute;
  //   }

  // }
  // urlCheck(r) {
  //   let url = r.split("/")[1]
  //   if (url.includes(this.pageName)) {
  //     this.pageNameCon = true
  //   }
  // }
}
