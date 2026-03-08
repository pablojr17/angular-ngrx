import { Injectable } from "@angular/core";
import { Livro } from "./livro.model";
import { delay, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LivroService {
    obterLivros(): Livro[] {
        return [
            {
                id: 1,
                nome: 'O Senhor dos Anéis'
            },
            {
                id: 2,
                nome: 'Harry Potter'
            },
            
        ]
    }

    obterLivrosApi() {
        return of(this.obterLivros())
        .pipe(delay(1000));
    }
}