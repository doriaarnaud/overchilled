const slider=
[
	{id:0,idp:'5h78j6f7g',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov1.png'},
	{id:1,idp:'3hd6i5k49',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov2.png'},
	{id:2,idp:'5u8d3h5kf',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov3.png'},
	{id:3,idp:'3kc7e1h69',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov4.png'},
	{id:4,idp:'9g7rm4ud7',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov5.png'},
	{id:5,idp:'1n4u6s5t3',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov6.png'},
	{id:6,idp:'4m7k8v38s',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov7.png'},
	{id:7,idp:'0u8r44kjf',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov8.png'},
	{id:8,idp:'63ks8sj2a',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov9.png'},
	{id:9,idp:'b4c5a6f7e',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov10.png'}
];
let cart=[];
let gallerynext=
[];

for(let i=0;i<slider.length;i++)
{
	let x=JSON.stringify(slider[i]);
	let y=JSON.parse(x);
	gallerynext.push(y);
}
let galleryprev=
[];
const toggler=
[
	{id:0,description:'pc3',img:'./images/ov3.png'},
	{id:1,description:'pc4',img:'./images/ov4.png'},
	{id:2,description:'pc5',img:'./images/ov5.png'},
	{id:3,description:'pc6',img:'./images/ov6.png'}
];
let banniere_nxt=
[

];
let banniere_prev=
[

];
for(let ii=0;ii<slider.length;ii++)
{
	let xx=JSON.stringify(slider[ii]);
	let yy=JSON.parse(xx);
	banniere_nxt.push(yy);
}
let tableau_description=
[
		{id:0,idp:'5h78j6f7g',description:{cpu:'Description example',gpu:'Description example',board:'Description example'},price:1234,img:'./images/ov1.png'},
];
let rouge=0;
let timer=null;
let timer_vert=null;
const Home=
{
	template:'#home',
	name:'Home',
	data:()=>
	{
		return {rouge:0,vert:0,bleu:255,timer,timer_vert,gallerynext,galleryprev,toggler,banniere_nxt,banniere_prev,cart,tableau_description}
	},
	methods:
	{
		suivant:function()
		{
			let x=this.gallerynext.shift();
			this.galleryprev.unshift(x);
		},
		precedent:function()
		{
			let x=this.galleryprev.shift();
			this.gallerynext.unshift(x);
		},
		nxt:function()
		{
			let xx=this.banniere_nxt.shift();
			this.banniere_prev.unshift(xx);
		},
		preced:function()
		{
			let xx=this.banniere_prev.shift();
			this.banniere_nxt.unshift(xx);
		},
		ajouter:function(pcs)
		{
			let cc=JSON.stringify(pcs);
			let ccc=JSON.parse(cc)
			this.cart.push(ccc);
		},
		describe:function(pcs)
		{
			let img1=JSON.stringify(pcs);
			let img2=JSON.parse(img1);
			this.tableau_description.shift();
			this.tableau_description.push(img2);
			console.log(tableau_description);
		}
	}
}
const Notifications=
{
	template:'#notifications',
	name:'Notifications'
}
const Like=
{
	template:'#like',
	name:'like'
}
const Cart=
{
	template:'#cart',
	name:'Cart',
	data:()=>
	{
		return {cart}
	},
	methods:
	{
		rmv:function(items)
		{
			let p=JSON.stringify(items);
			let pp=JSON.parse(p);
			console.log('Item removed from cart :',pp);
		}
	}
}
const Gifts=
{
	template:'#gifts',
	name:'Home'
}
const About=
{
	template:'#about',
	name:'About'
}

const Steam=
{
	template:'#steam',
	name:'Steam'
}
const Origin=
{
	template:'#origin',
	name:'Origin'
}
const Uplay=
{
	template:'#uplay',
	name:'Uplay'
}
const Playstation=
{
	template:'#playstation',
	name:'Playstation'
}
const Pc=
{
	template:'#pc',
	name:'Pc'
}
const GetCards=
{
	template:'#getcards',
	name:'GetCards'
}

let router=new VueRouter({
	routes:
	[
	{path:'/',component:Home,name:'Home'},
	{path:'/notifications',component:Notifications,name:'Notifications'},
	{path:'/like',component:Like,name:'Like'},
	{path:'/cart',component:Cart,name:'Cart'},
	{path:'/gifts',component:Gifts,name:'Gifts'},
	{path:'/about',component:About,name:'About'},
	{path:'/steam',component:Steam,name:'Steam'},
	{path:'/origin',component:Origin,name:'Origin'},
	{path:'/uplay',component:Uplay,name:'Uplay'},
	{path:'/playstation',component:Playstation,name:'Playstation'},
	{path:'/pc',component:Pc,name:'Pc'},
	{path:'/getcards',component:GetCards,name:'GetCards'},
	]
})

let vm= new Vue({
	router,
	data:
	{
		rouge:0,vert:0,bleu:255
	},
	mounted:function()
	{
		 this.start();
		this.start_vert();
	},
	methods:
	{
		start:function()
	    {
	       clearTimeout(this.timer);
	       this.timer=null;
	      this.timer=setInterval(this.next,10);
	    },
	    start_vert:function()
	    {
	      clearTimeout(this.timer_vert);
	       this.timer_vert=null;
	       this.timer_vert=setInterval(this.next_vert,25);
	    },
	    retour:function()
	    {
	       clearTimeout(this.timer);
	       this.timer=null;
	       this.timer=setInterval(this.prev,10);
	    },
	    next:function()
	    {
	      this.rouge++;
	      this.bleu--;
	      if(this.rouge==255)
	      {
	        this.retour();
	      }
	    },
	    prev:function()
	    {
	      this.rouge--;
	      this.bleu++;
	      if(this.rouge==0)
	      {
	        this.start();
	      }
	    },
	    next_vert:function()
	    {
	      this.vert++;
	      if(this.vert==255)
	      {
	        this.retour_vert();
	      }
	    },
	    retour_vert:function()
	    {
	        clearTimeout(this.timer_vert);
	        this.timer_vert=null;
	        this.timer_vert=setInterval(this.prev_vert,15);
	    },
	    prev_vert:function()
	    {
	      this.vert--;
	      if(this.vert==0)
	      {
	        this.start_vert();
	      }
	    }
	}
		
}).$mount('#racine');
