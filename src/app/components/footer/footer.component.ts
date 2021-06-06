import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openUrl(url,width?,height?){
    if(width && height){
      window.open(url, "", "width=500,height=500");
    }else{
      window.open(url);
    }
  }

}
