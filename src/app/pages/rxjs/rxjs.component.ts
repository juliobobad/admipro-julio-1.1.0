import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {

    this.suscripcion = this.regresaObservable()
    .subscribe(
      numero => console.log( 'Subs', numero ),
      error => console.log( 'Error en el obs', error ),
      () => console.log( 'El Observable termino' )
    );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se cerro');
    this.suscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>)  => {

      let contador = 0;

      let intervalo = setInterval( () => {

        contador ++;

        const salida = {
          valor: contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
      }, 1000 );
    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, _index ) => {

          if ( (valor % 2) === 1 ) {
          // Impar
          return true;
          }else {
          // Par
          return false;
          }

      })
    );

  }

}
