import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';

@Component({
  selector: 'm-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.scss']
})
export class UpdateReviewComponent implements OnInit {
  idShare:string;
  nameCamp:string;
  currentReview:number;
  content:string;

  constructor(private _acRouter:ActivatedRoute,private _data:DataService,private _router:Router) { 
    this.idShare=this._acRouter.snapshot.params["id"]
    console.log(this.idShare);
    //get detail
    if(this.idShare){
      this._data.detailReview(this.idShare).subscribe(data=>{
        console.log(data);
        this.nameCamp=data.nameCamp;
        this.currentReview=data.currentReview;
        this.content=data.content;
      },error=>{
        console.log(error);
      }
      )}
  }

  ngOnInit() {
  }
  updateReview(){
    const data={
      "nameCamp":this.nameCamp,
      "currentShare":this.currentReview,
      "content":this.content
    }
    this._data.updateReview(this.idShare,data).subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('/campaign/review/index-review')
      alert("Bạn đã cập nhật thành công")
    },error=>{
      console.log(error);
    }
    )}
}
