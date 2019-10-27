import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList }
from "angularfire2/database";
@Injectable({
providedIn: 'root'
})

export class TravelsectionService {
constructor(private firebase: AngularFireDatabase) { }
travelList: AngularFireList<any>;
form = new FormGroup({
$key: new FormControl(null),
destination: new FormControl('', Validators.required),
dates: new FormControl('', Validators.required),
preferences: new FormControl('', Validators.required)
});
getTravels(){
this.travelList = this.firebase.list('customers');
return this.travelList.snapshotChanges();
}

insertTravel(travel){
this.travelList.push({
destination: travel.destination,
dates: travel.dates,
preferences: travel.preferences,
});
}

populateForm(travel){
this.form.setValue(travel);
}

updateTravel (travel){
this.travelList.update(travel.$key,{
destination: travel.destination,
dates: travel.dates,
preferences: travel.preferences,
});
}

deleteTravel($key: string){
this.travelList.remove($key);
}
}

