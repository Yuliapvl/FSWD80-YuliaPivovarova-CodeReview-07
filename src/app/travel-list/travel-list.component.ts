import { Component, OnInit } from '@angular/core';
import { TravelsectionService } from "../shared/travelsection.service";

@Component({
  selector: 'travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.sass']
})
export class TravelListComponent implements OnInit {
travelArray = [];
showDeletedMessage : boolean;
searchText:string = "";
  constructor(private travelsectionService: TravelsectionService) { }

  ngOnInit() {
  	this.travelsectionService.getTravels().subscribe(
(list) => {
this.travelArray = list.map((item) => {
return {
$key : item.key,
...item.payload.val()
}
})
});
}

onDelete($key){
if(confirm("Are you sure you want to delete this record?")){
this.travelsectionService.deleteTravel($key);
this.showDeletedMessage = true;
setTimeout(()=> this.showDeletedMessage=false , 3000)
}
}

filterCondition(travel){
return travel.destination.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
travel.dates.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
}
}



