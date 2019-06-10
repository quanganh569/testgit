import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../../services-FANPAGE/data.service';

@Component({
  selector: 'm-update-like',
  templateUrl: './update-like.component.html',
  styleUrls: ['./update-like.component.scss']
})
export class UpdateLikeComponent implements OnInit {
  idLike:string;
  public nameCamp:string;
  public currentLike:number;
  public linkChiendich:URL;

  constructor(private _acRouter:ActivatedRoute,private _data:DataService,private _router:Router) { 
    this.idLike=this._acRouter.snapshot.params["id"]
    console.log(this.idLike);

    if(this.idLike){
      this._data.detailLike(this.idLike).subscribe(
        data=>{
          console.log(data);
          this.nameCamp = data.nameCamp;
          this.linkChiendich=data.linkChiendich;
          this.currentLike=data.currentLike;
         
        },error=>{
          console.log(error);
          
        })
    }
    
  }

  ngOnInit() {
  }

  updateLike(){
    const data={
      "nameCamp":this.nameCamp,
      "currentLike":this.currentLike,
      "linkChiendich":this.linkChiendich
    }
    this._data.updateLike(this.idLike,data).subscribe(data=>{
      console.log(data);
      alert("Bạn đã cập nhật thành công")
      this._router.navigateByUrl('/campaign/like/index-like')
    
    },error=>{
      console.log(error);
      
    })
  }
}
