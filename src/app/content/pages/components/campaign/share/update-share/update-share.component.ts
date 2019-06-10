import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';

@Component({
  selector: 'm-update-share',
  templateUrl: './update-share.component.html',
  styleUrls: ['./update-share.component.scss']
})
export class UpdateShareComponent implements OnInit {
  idShare:string;
  nameCamp:string;
  currentShare:number;
  sex:boolean;
  age:boolean;
  linkChiendich:URL;

  constructor(private _acRouter:ActivatedRoute,private _data:DataService,private _router:Router) {
    this.idShare=this._acRouter.snapshot.params["id"]
    // console.log(this.idShare); //Kiểm tra id tại console
    
    if(this.idShare){
      this._data.detailShare(this.idShare).subscribe(data=>{
        // console.log(data);  //Kiểm tra dữ liệu tại id đã chọn
        this.nameCamp=data.nameCamp;
        this.currentShare=data.currentShare;
        this.sex=data.sex;
        this.age=data.age;
        this.linkChiendich=data.linkChiendich;
      },error=>{
        console.log(error);     
      }
      )}
   }

  ngOnInit() {
  }

  updateShare(){
    const data = {
      "nameCamp":this.nameCamp,
      "currentShare":this.currentShare,
      "sex":this.sex,
      "age":this.age,
      "linkChiendich":this.linkChiendich,
    }
    this._data.updateShare(this.idShare,data).subscribe(data=>{
      console.log(data);
      alert("Bạn đã cập nhật share thành công")
      this._router.navigateByUrl('/campaign/share/index-share')
    },error=>{console.log(error);
    }
    )}
}
