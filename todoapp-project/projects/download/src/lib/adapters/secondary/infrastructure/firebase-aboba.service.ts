import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FirebaseAbobaService {
  constructor(private _client: AngularFirestore) {
  }
}
