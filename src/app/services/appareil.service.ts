import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();

  private appareils = [
    /*{
      id: 1,
      name: 'Princesse Mononoke',
      status: 'Seen'
    },
    {
      id: 2,
      name: 'Mon voisin Totoro',
      status: 'Seen'
    },
    {
      id: 3,
      name: 'Le Chateau ambulant',
      status: 'To see'
    }*/
    
  ];

      emitAppareilSubject() {
        console.log(this.appareils);
        this.appareilsSubject.next(this.appareils.slice());
      }

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'Seen';
          }
          this.emitAppareilSubject();
      }

      switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'To see';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
      this.appareils[i].status = 'Seen';
      this.emitAppareilSubject();
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'To see';
      this.emitAppareilSubject();
    }

    getAppareilById(id: number) {
      const appareil = this.appareils.find(
        (s) => {
          return s.id === id;
        }
      );
      return appareil;
    }

    addAppareil(name: string, status: string) {
      const appareilObject = {
        id: 0,
        name: '',
        status: ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }

    constructor(private httpClient: HttpClient) { }

    saveAppareilsToServer() {
      this.httpClient.put('https://sassy-project-a93ad.firebaseio.com/appareils.json', this.appareils).subscribe(
        () => {
          console.log('Register end !');
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
    }

    getAppareilsFromServer() {
      this.httpClient
        .get<any[]>('https://sassy-project-a93ad.firebaseio.com/appareils.json')
        .subscribe(
          (response) => {
            this.appareils = response;
            this.emitAppareilSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
  }
}