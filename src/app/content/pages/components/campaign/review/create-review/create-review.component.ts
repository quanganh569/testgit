import { Component, OnInit } from '@angular/core';
import { shareIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/shareINDEX';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'm-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss']
})
export class CreateReviewComponent implements OnInit {
  public create:shareIndex[];
  public nameCamp:string;
  public currentShare:string;
  public content:string;
  public linkChiendich:URL;
  constructor(private _data:DataService,private _router:Router) { }

  ngOnInit() {
  }
  createReview(){
    const data = {
      "nameCamp":this.nameCamp,
      "currentLike":this.currentShare,
      "content":this.content,
      "linkChiendich":this.linkChiendich
    }
    this._data.createReview(data)
    .subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('campaign/review/index-review')
      alert('Bạn đã thêm thành công')
      
    },error=>{
      console.log(error);
      
    });
  };
}
