import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  cards: any = [
    {
      img: "assets/1x/deal-cover.png",
      name: "Deal 01",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      qty: 1,
      price: 3.9
    },
    {
      img: "assets/1x/deal-cover.png",
      name: "Deal 02",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      qty: 1,
      price: 3.9
    },
    {
      img: "assets/1x/deal-cover.png",
      name: "Deal 03",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      qty: 1,
      price: 3.9
    },
  ]
  // url: any; //Angular 11, for stricter type
	// msg = "";
  // //selectFile(event) { //Angular 8
	// selectFile(event: any) { //Angular 11, for stricter type
	// 	if(!event.target.files[0] || event.target.files[0].length == 0) {
	// 		this.msg = 'You must select an image';
	// 		return;
	// 	}

	// 	var mimeType = event.target.files[0].type;

	// 	if (mimeType.match(/image\/*/) == null) {
	// 		this.msg = "Only images are supported";
	// 		return;
	// 	}

	// 	var reader = new FileReader();
	// 	reader.readAsDataURL(event.target.files[0]);

	// 	reader.onload = (_event) => {
	// 		this.msg = "";
	// 		this.url = reader.result;
	// 	}
	// }
  url: any;
  selectFile(event: any) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result;
      };
    }
      $(".img-box").removeClass('hide')

    $(".imgUploadLabel").css("display","none")
  }
  click(){
    $('#imgUpload').trigger('click');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
