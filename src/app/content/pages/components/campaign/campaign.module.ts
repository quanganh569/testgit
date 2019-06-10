import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';


import { LikeComponent } from './like/like.component';
import { ShareComponent } from './share/share.component';
import { ReviewComponent } from './review/review.component';


import { CreateLikeComponent } from './like/create-like/create-like.component';
import { IndexLikeComponent } from './like/index-like/index-like.component';
import { CreateReviewComponent } from './review/create-review/create-review.component';
import { IndexReviewComponent } from './review/index-review/index-review.component';
import { CreateShareComponent } from './share/create-share/create-share.component';
import { IndexShareComponent } from './share/index-share/index-share.component';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CampaignComponent } from './campaign.component';
import { UpdateLikeComponent } from './like/update-like/update-like.component';
import { DataService } from '../../../../services-FANPAGE/data.service';
import { UpdateReviewComponent } from './review/update-review/update-review.component';
import { UpdateShareComponent } from './share/update-share/update-share.component';



const routes: Routes = [
    {
        path: '',
        component: CampaignComponent,
        children: [
            {
                path: 'like',
                component: LikeComponent,
                children:
                [
                    {
                        path:'create-like',
                        component:CreateLikeComponent
                    },
                    {
                        path:'index-like',
                        component:IndexLikeComponent, 
                    },
                    {
                        path:':id',
                        component:UpdateLikeComponent,
                    }
                
                   
                   
                ]
            },
            {
                path: 'review',
                component: ReviewComponent,
                children:[
                    {
                        path:'create-review',
                        component:CreateReviewComponent
                    },
                    {
                        path:'index-review',
                        component:IndexReviewComponent
                    },
                    {
                        path:':id',
                        component:UpdateReviewComponent
                    }
                ]
            },
            {
                path: 'share',
                component: ShareComponent,
                children:[
                    {
                        path:'create-share',
                        component:CreateShareComponent
                    },
                    {
                        path:'index-share',
                        component:IndexShareComponent
                    },
                    {
                        path:':id',
                        component:UpdateShareComponent
                    }
                ]
            },
        ]
    }
];

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        Ng2SearchPipeModule,
        NgxPaginationModule
    ],
    providers:[
        DataService
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        CampaignComponent,
        LikeComponent,
        ShareComponent,
        ReviewComponent,
        IndexLikeComponent,
        IndexReviewComponent,
        IndexShareComponent,
        CreateLikeComponent,
        CreateReviewComponent,
        CreateShareComponent,
        UpdateLikeComponent,
        UpdateReviewComponent,
        UpdateShareComponent,
        UpdateShareComponent,
        
        ]
})

export class CampaignModule { }
