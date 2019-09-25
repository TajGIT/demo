import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, FormGroup, Validators, FormArray} from '@angular/forms';
import { HttpClient} from  '@angular/common/http';
import { Store } from '../store/store'
import { Observable, from } from 'rxjs';
import { StoreService } from '../store/store.service';
declare var $;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  __openSuccessDialog = false;
  panelOpenState = false;
  submit = true;
  submit1 = false;
  stores: Observable<Store[]>;
  store: Store;
  shoptype=[];
  signupForm: FormGroup;
  selected: any;
  innerWidth: any;

  constructor(private fb: FormBuilder, private dataService: StoreService, private httpClient: HttpClient,
    public dialog: MatDialog, private titleService: Title) { } 

  ngOnInit() {
    this.signupForm = this.fb.group({
      shopName :'',
      shopType: '',
      shopOwnerName:'',
      address:['', [Validators.required, Validators.maxLength(200), Validators.minLength(10)]],
      phoneNumber:['', [Validators.required, Validators.pattern('[0-9]*'),
          Validators.maxLength(10), Validators.minLength(10)]],
      email: '',
      status: '',
      check: false

  });
  this.getShopType();
  this.innerWidth = window.innerWidth;
  console.log('innerWidth', this.innerWidth);
 
  }

  onsubmit(customer){ 
    if(this.signupForm.valid){
      this.dataService.createCustomer(customer).subscribe(data => {
        if(data.status !="" && data.status != null && data.status != undefined){
          if(data.status == 201 ) {
            this.openDialog();
          } else {
            console.log('Failed', data);
          }
        }
      });
    }
              this.signupForm.reset();
}

openDialog() {
  const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
    width: '997px',
    height: '496px'
  });

  this.__openSuccessDialog = true;
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}
openContactDialog(){
  const dialogRef = this.dialog.open(ContactDialog, {
    width: '800px',
    height: '421px'
  });

  this.__openSuccessDialog = true;
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

scrollTOElement = (element, offsetParam?, speedParam?) => {
  if(this.innerWidth == '612'){
    element = '#elementTo1'
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 2;
    const speed = speedParam * 1 || 1000;
    $('html, body').animate({
      scrollTop: toElement.offset().top + offset
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
  }
  } else {
    element = '#elementTo'
    const toElement = $(element);
    const focusElement = $(element);
    const offset = offsetParam * 1 || 5;
    const speed = speedParam * 1 || 1000;
    $('html, body').animate({
      scrollTop: toElement.offset().top + offset
    }, speed);
    if (focusElement) {
      $(focusElement).focus();
  }

  }


}
getShopType(){
  this.dataService.getShopTypes().subscribe(data =>{
    this.shoptype = data
  });
}
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
<div fxLayout="column" fxHide.xs style="background: url('../../assets/Thankyou.png') no-repeat; padding:0 !important; background-size: 100% 100%;" fxLayoutGap="8px" fxFill>
<div fxFlex="5" fxLayout="row" fxLayoutAlign="end end">
<button mat-icon-button matDialogClose fxFlexAlign="center" (click)="onNoClick()">
<mat-icon style="color: white;">close</mat-icon>
</button>
</div>
</div>
<div fxLayout="column" fxHide fxShow.xs style="background: url('../../assets/Thankyoumob.png') no-repeat; padding:0 !important; background-size: 100% 100%;" fxLayoutGap="8px" fxFill>
<div fxFlex="5" fxLayout="row" fxLayoutAlign="end end">
<button mat-icon-button matDialogClose fxFlexAlign="center" (click)="onNoClick()">
<mat-icon style="color: white;">close</mat-icon>
</button>
</div>
</div>
`
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'contact-dialog',
  template: `
<div fxLayout="column" fxHide.xs style="background: url('../../assets/call.png') no-repeat; padding:0 !important; background-size: 100% 100%;" fxLayoutGap="8px" fxFill>
<div fxFlex="5" fxLayout="row" fxLayoutAlign="end end">
<button mat-icon-button matDialogClose fxFlexAlign="center" (click)="onNoClick()">
<mat-icon style="color: white;">close</mat-icon>
</button>
</div>
<div fxFlex="32" fxLayout="row"></div>
<div fxFlex="40" fxLayout="row" fxLayout.xs="column">
<div fxFlex="10" fxLayout="row"></div>
<div fxFlex="9" fxFlex.xs="58" fxLayout="column" style = "margin-top: 2%;">
<img src="../../assets/phone.png" style="height:40px; width:40px"></div>
<div fxFlex="55" fxLayout="column" style="font-size:50px; color:white">
08676 - 253466
</div>
</div>

</div>



<div fxLayout="column" fxHide fxShow.xs style="background: url('../../assets/callmob.png') no-repeat; padding:0 !important; background-size: 100% 100%;" fxLayoutGap="8px" fxFill>
<div fxFlex="5" fxLayout="row" fxLayoutAlign="end end">
<button mat-icon-button matDialogClose fxFlexAlign="center" (click)="onNoClick()">
<mat-icon style="color: white;">close</mat-icon>
</button>
</div>
<div fxFlex="7"></div>
<div fxFlex="40" fxLayout="row" fxLayout.xs="column" fxLayoutAlign.xs="center center">
<div fxFlex="10" fxLayout="row"></div>
<div fxFlex="9" fxFlex.xs="58" fxLayout="column" style = "margin-top: 2%;">
<img src="../../assets/phone.png" style="height:40px; width:40px"></div>
<div fxFlex="55" fxLayout="column" style="font-size:30px; color:white">
08676 - 253466
</div>
</div>

</div>
`
})
export class ContactDialog {

  constructor(
    public dialogRef: MatDialogRef<ContactDialog>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}