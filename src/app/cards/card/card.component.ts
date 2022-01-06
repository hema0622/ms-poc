import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public showNavCalss: boolean = false;
  public mainClass : boolean = false;
  public display : any = 'none';
  public cardlist: any = [];
  public tempImagestorge:any = "";
  public url: any = "";
  public name: any = "";
  public test1:any =""
  @ViewChild('urlN')
  urlN!: ElementRef;
  @ViewChild('nameN')
  nameN!: ElementRef;
  @ViewChild('fileN')
  fileN!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  closebtn () {
    this.showNavCalss = false;
    this.mainClass = false;

  }
  openNav () {
    this.showNavCalss = true;
    this.mainClass = true;
  }
  test () {
    alert("hello");
  }

  openModal () {
    this.display = 'block';
  }

  closeModal () {
    this.display = 'none';
  }
   getBase64(inputValue: any): void {
    var file:File = inputValue.target.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.tempImagestorge = myReader.result;
      console.log(this.tempImagestorge);
    }
    myReader.readAsDataURL(file);
  }

  changeText (type:any, val:any) {
    console.log(val.value);
      if (type == 'url') {
          this.url = val.value;
      } else {
        this.name = val.value;
      }
  }
 save () {
  this.cardlist.push({"url":this.url, "name":this.name, "image": this.tempImagestorge });
  console.log(this.cardlist);
  this.display = 'none';
  this.url = "";
  this.name = "";
  this.tempImagestorge = ""
  this.test1 = "";
  this.urlN.nativeElement.value = "";
  this.nameN.nativeElement.value = "";
  this.fileN.nativeElement.value = "";

 }
}
