import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent implements OnInit {

//   // public name ="Tuyen Nguyen";
//   // public age =25;
//   public districts: string[] = ['Quận Huyện'];
//   public vndata =[
//     {
//       city:'Select City',
//       district:'select District'
//     },
//     {
//     city:'Ho Chi Minh',
//     district:[
//       'District 1',
//       'District 2',
//       'District 3',
//       'District 4',
//       'District 5',
//       'District 6',
//       'District 7',
//       'District 8',
//       'Tan Binh',
//       'Tan Phu',
//       ],
//     },
//     {
//       city:'Ha Noi',
//       district:[
//         'Hoa Kiem',
//         'District 2',
//         'District 3',
//         'District 4',
//         'District 5',
//         'District 6',
//         'District 7',
//         'District 8',
//         'Tan Binh',
//         'Tan Phu',
//         ],
//       },
//       {
//       city:'Can Tho',
//       district:[
//         'Hoa Kiem',
//         'District 2',
//         'District 3',
//         'District 4',
//         'District 5',
//         'District 6',
//         'District 7',
//         'District 8',
//         'Tan Binh',
//         'Tan Phu',
//         ],
//       },
//   ];


//   public naturalfood =['Apple','Grape','Mango','Gauva','Cherry'];

//   public naturalfood1 =[
//     {name:'Apple', price:12 ,discount:true},
//     {name:'Mango', price:-22, discount:false},
//     {name:'Grape', price:44, discount:true},
//     {name:'Gauva', price:67 ,discount:false}
//   ];
//   constructor() { }

//   ngOnInit(): void {
//     // console.log('naturalfood1 =', this.naturalfood1);
//     console.log('vndata=',this.vndata);
//   }
//   // public districts:string[] = ['Select District'];

//    public changeCity(event:any){
//      const city = event.target.value;
//     //  console.log('event',city);
//     //   const search = this.vndata.filter(data =>data.city ===city);
//     //   console.log('seach',search);
//     // if(search && search.length >0){
//     //  this.districts =search[0].district;
   
//  if(!city){
// return;
// }

//   this.districts =
//   this.vndata.find(data=>data.city ==city)?.district ||[];
//    }
//   }

export class HomeComponent implements OnInit {
  public name = 'Huy Nguyễn';
  public age = 25;
  public traiCay = ['Táo', 'Nho', 'Cam', 'Quít', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3.234, haGia: false },
    { ten: 'Cam', gia: 34.26, haGia: false },
    { ten: 'Quít', gia: 32.45, haGia: true },
  ];
  public districts: string[] = ['Quận Huyện'];
  public vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },
    {
      city: 'Ho Chi Minh',
      district: [
        'Quan 1',
        'Quan 2'       
      ],
    },
  ];

  constructor(private common:CommonService) {}

  public ngOnInit(): void {
    console.log('vietnamData = ', this.vietnamData);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter++;
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    // if (!city) {
    //   return;
    // }

    // cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    // this.districts =
    //   this.vietnamData.find((data) => data.city === city)?.district || [];
  const search = this.vietnamData.filter((data) => data.city ===city );
  if(search && search.length >0){
    this.districts = search[0].district;
  }

  }
  public counter = 0;
  public counterBinhPhuong = 0;
}