import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  link = 'http://api.agri.web.id:10000/todo';

  date;

  constructor(private http: Http) {
    this.date = new Date();


  }


  ngOnInit() {
    this.getData();

    setInterval(() => {
      this.getData();
    }, 1000)
  }

  nama;
  harga;
  detail;
  submit() {
    let send = JSON.stringify({nama: this.nama, harga: this.harga, detail: this.detail});
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    this.http.post(this.link, send, {headers: header})
      .map(res => res.json())
      .subscribe(data => {
        this.dataList = data;
        this.getTotal();
        this.showSuccess();
      })
  }

  dataList;
  getData() {
    this.http.get(this.link)
      .map(res => res.json())
      .subscribe(data => {
        this.dataList = data;
        this.getTotal();
      })


  }

  total = 0;
  getTotal() {
    this.total = 0;
    for(let i = 0; i < this.dataList.length; i++) {
      this.total += this.dataList[i].harga;
    }
  }

  username;
  password;

  num1 = 1;
  test() {
    if(this.username == 'admin' && this.password == 'admin') {
      swal(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
    else {
      swal(
        'Oops...',
        'Something went wrong!',
        'error'
      )
    }
  }

  showSuccess() {
    swal(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }

}
