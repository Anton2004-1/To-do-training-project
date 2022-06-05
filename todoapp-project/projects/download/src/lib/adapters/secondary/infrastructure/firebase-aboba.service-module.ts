import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAbobaService } from './firebase-aboba.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAbobaService],
  	exports: [] })
export class FirebaseAbobaServiceModule {
}
