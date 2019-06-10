import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reviewIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/reviewINDEX';
import { DataService } from '../../../../../../services-FANPAGE/data.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'm-index-review',
  templateUrl: './index-review.component.html',
  styleUrls: ['./index-review.component.scss']
})
export class IndexReviewComponent implements OnInit {
  public subcription : Subscription;
  public lstReview: reviewIndex[];
  searchText;

  p: number = 1;

  constructor(private _data: DataService,private _router:Router ) { }

  ngOnInit() {
    this.getReview();
}
ngOnDestroy(){
  if(this.subcription){
    this.subcription.unsubscribe();
  }
}
  getReview() {
   this.subcription = this._data.getReview()
  .subscribe(data => {this.lstReview = data;
    console.log(this.lstReview);
  }, err => {
    console.log(err);
  }
  );
}
onDetail(id:string){
  this._router.navigateByUrl(`/campaign/review/${id}`)
}


  }

