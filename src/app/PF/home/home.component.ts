import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/ecart/ecart/component/products';
import { HttpService } from 'src/app/http/core/http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productarray:products[]=[];
  filterproduct:products[]=[];

  constructor(private http:HttpService) { }
  // filtermethod(){
  //   this.productarray.value
  // }
  ngOnInit(): void {
    this.getproductdetails()

this.productarray=[
{"id":1,
"title":"DANVOUY Womens T Shirt Casual Cotton Short",
"price":12.99,
"description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
"category":"women's clothing",
"image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
"rating":
{"rate":3.6,"count":145}},

{"id":2,"title":"Opna Women's Short Sleeve Moisture",
"price":7.95,
"description":"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
"category":"women's clothing",
"image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
"rating":{"rate":4.5,"count":146}},

{"id":3,"title":"MBJ Women's Solid Short Sleeve Boat Neck V ",
"price":9.85,"description":"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","category":"women's clothing",
"image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
"rating":{"rate":4.7,"count":130}},

{"id":4,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats",
"price":39.99,
"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
"category":"women's clothing",
"image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
"rating":{"rate":3.8,"count":679}}
]}

getproductdetails(){
this.http.getdeta("productitem").subscribe((el:products)=>{
  console.log("el",el)
  if(Array.isArray(el)&& el.length>0){
    this.productarray=el;
    this.filterproduct('')
  }
console.log(el)
},error=>{

})
this.filterproduct('all')

// this.filterproduct=this.productarray;
  }
  filtermethod(type:any){
    if(type=='all'){
      this.filterproduct=this.productarray;
    }else{
    this.filterproduct=this.productarray.filter((el:any)=>(el.title==type))
    }
}

categories=[
  {"type":"all","category":"Top Offers"},
  {"type":"clothing","category":"clothing"},
  {"type":"","category":"Top Offers"},
]









}



