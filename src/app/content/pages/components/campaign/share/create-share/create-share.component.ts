import { Component, OnInit } from '@angular/core';
import { shareIndex } from '../../../../../../services-FANPAGE/model-FANPAGE/shareINDEX';
import { Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';

@Component({
  selector: 'm-create-share',
  templateUrl: './create-share.component.html',
  styleUrls: ['./create-share.component.scss']
})
export class CreateShareComponent implements OnInit {
  public create:shareIndex[]=[];
  public nameCamp:string;
  public currentShare:any;
  public sex:boolean;
  public age:boolean;
  public linkChiendich:URL
  constructor(private _router:Router,private data:DataService) { }

  ngOnInit() {
  }

  createShare(){
    const data ={
      "nameCamp":this.nameCamp,
      "currentShare":this.currentShare,
      "sex":this.sex,
      "age":this.age,
      "linkChiendich":this.linkChiendich
    }
    this.data.createShare(data)
    .subscribe(data=>{
      console.log(data);
      this._router.navigateByUrl('campaign/share/index-share')
      alert('Bạn đã thêm share thành công')
    },error=>{
      console.log(error);
    }
    )}

}
