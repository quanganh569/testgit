// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
				
				]
			},
			aside: {
				self: {},
				items: [
					// {
					// 	title: 'Dashboard',
					// 	desc: 'Some description goes here',
					// 	root: true,
					// 	icon: 'flaticon-dashboard',
					// 	page: '/',
					// 	translate: 'MENU.DASHBOARD'
					// },

					{
						title: 'Campaign Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'flaticon-dashboard',
						page: '/',
						translate: 'MENU.DASHBOARD'
					},

					{section: 'TRUYỀN THÔNG FANPAGE'},
				
							{
								title:'Like bài viết',
								icon: 'flaticon-like',
								page:'/campaign/like/index-like',
							
							},
							{
								title:'Share bài viết',
								icon: 'flaticon-share',
								page:'/campaign/share/index-share'
							},
							{
								title:'Tăng ReView',
								icon: 'flaticon-eye',
								page:'/campaign/review/index-review'
							},

					{section:"Công cụ khác"},
							{
								title:'Tăng like youtube'
							},
							{
								title:''
							}
						

						
					
						


					// {section: 'Applications'},
					// {
					// 	title: 'eCommerce',
					// 	bullet: 'dot',
					// 	icon: 'flaticon-business',
					// 	root: true,
					// 	submenu: [
					// 		{
					// 			title: 'Customers',
					// 			page: '/ecommerce/customers'
					// 		},
					// 		{
					// 			title: 'Orders',
					// 			page: '/ecommerce/orders'
					// 		},
					// 		{
					// 			title: 'Products',
					// 			page: '/ecommerce/products'
					// 		},
					// 	]
					// },
			
				
				]
			}
		};
	}
}
