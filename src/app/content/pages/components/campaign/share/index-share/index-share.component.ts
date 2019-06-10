import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/instructions';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { shareIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/shareINDEX';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'm-index-share',
  templateUrl: './index-share.component.html',
  styleUrls: ['./index-share.component.scss']
})
export class IndexShareComponent implements OnInit {
  public subcription :Subscription
  public lstShare: shareIndex[] = [];

  searchText;
  p: number = 1;

  constructor(private _data: DataService,private _router:Router) { }

  ngOnInit() {
    this.getShare();
  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }
  getShare() {
    this.subcription= this._data.getShare()
    .subscribe(data => {this.lstShare = data;
    console.log(this.lstShare);
  }, err => {
    console.log(err);
  });
  }

  onDetail(id:string){
    this._router.navigateByUrl(`/campaign/share/${id}`)
  }

}
