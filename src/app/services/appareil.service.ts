export class AppareilService {

    appareils = [
        {
          name: 'La Princesse Mononoke',
          status: 'A voir'
        },
        {
          name: 'Mon Voisin Totoro',
          status: 'Vu'
        },
        {
          name: 'Le Château Ambulant', 
          status: 'A voir'
        }
      ];

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'Vu';
          }
      }

      switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'A voir';
        }
    }

    switchOnOne(i: number) {
      this.appareils[i].status = 'Vu';
    }

    switchOffOne(i: number) {
      this.appareils[i].status = 'A voir';
    }

}