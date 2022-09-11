import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ApiserviceService} from '../apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor( private service:ApiserviceService) { }
readData:any;
  ngOnInit(): void {
this.service.getAllData().subscribe((res)=>{
  console.log(res,"res==>");

  this.readData =res.data;
});


  }
del(id:any){
  // Swal.fire('Deleted...', 'successfully deleted!', 'error')
  Swal.fire({
    title: 'Are you sure want to remove?',
    text: 'You will not be able to recover this data!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your data has been deleted.',
        'success'
      )
      this.service.deletedata(id).subscribe((res)=>{
        console.log(res,"res==>");
      
        this.readData =res.data;
      });
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
      
        this.readData =res.data;
      });

    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your data is safe :)',
        'error'
      )
    }
  })
  // this.service.deletedata(id).subscribe((res)=>{
  //   console.log(res,"res==>");
  
  //   this.readData =res.data;
  // });
  // this.service.getAllData().subscribe((res)=>{
  //   console.log(res,"res==>");
  
  //   this.readData =res.data;
  // });
}


}
