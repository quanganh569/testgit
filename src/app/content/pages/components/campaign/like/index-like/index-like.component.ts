import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { likeIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/likeINDEX';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'm-index-like',
  templateUrl: './index-like.component.html',
  styleUrls: ['./index-like.component.scss']
})
export class IndexLikeComponent implements OnInit {
  // lstLike:likeIndex[];
  public subcription : Subscription;
  public lstLike: likeIndex[] = [];
  searchText;

  p: number = 1;

  constructor(private _data: DataService,private _router:Router) { }

  ngOnInit() {
    this.getLike();
  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }
  getLike() {
    this.subcription=this._data.getLike()
    .subscribe(data => {this.lstLike = data;
    console.log(this.lstLike);
  }, err => {
    console.log(err);
  });
  }
  onDetail(id: string){
    this._router.navigateByUrl(`/campaign/like/${id}`)
  }
}




