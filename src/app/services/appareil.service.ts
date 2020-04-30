import { Subject } from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any[]>();

    private appareils = [
        {
          id: 1,
          name: 'La Princesse Mononoke',
          status: 'A voir'
        },
        {
          id: 2,
          name: 'Mon Voisin Totoro',
          status: 'Vu'
        },
        {
          id: 3,
          name: 'Le Château Ambulant', 
          status: 'A voir'
        }
      ];

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'Vu';
          }
          this.emitAppareilSubject();
      }

      switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'A voir';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
      this.appareils[i].status = 'Vu';
      this.emitAppareilSubject();
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'A voir';
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

}