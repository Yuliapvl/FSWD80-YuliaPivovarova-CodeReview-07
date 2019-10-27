import { Component, OnInit } from '@angular/core';
import { TravelsectionService } from "../shared/travelsection.service";

@Component({
  selector: 'travelpage',
  templateUrl: './travelpage.component.html',
  styleUrls: ['./travelpage.component.sass']
})

export class TravelpageComponent implements OnInit {
constructor(private travelsectionService: TravelsectionService) { }
submitted: boolean;
formControls = this.travelsectionService.form.controls;
showSuccessMessage: boolean;
ngOnInit() {
}


onSubmit(){
this.submitted = true;
if(this.travelsectionService.form.valid){
if(this.travelsectionService.form.get('$key').value == null)
this.travelsectionService.insertTravel(this.travelsectionService.form.value);
else
this.travelsectionService.updateTravel(this.travelsectionService.form.value);
this.showSuccessMessage = true;
setTimeout(()=> this.showSuccessMessage=false,3000);
this.submitted = false;
this.travelsectionService.form.reset();
}
}

}
