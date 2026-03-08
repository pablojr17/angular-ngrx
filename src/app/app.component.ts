import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Livro } from '../livros/livro.model';
import { LivroService } from '../livros/livro.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { livroActions } from '../livros/state/livro.actions';
import { livrosSelector } from '../livros/state/livro.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  providers: [LivroService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  livroService = inject(LivroService);
  store = inject(Store);

  livros$ = this.store.select(livrosSelector);
  livroInput = '';
  
  ngOnInit(): void {
    this.store.dispatch(livroActions.carregarLivros());
  }

  adicionar(){
    this.store.dispatch(livroActions.adicionarLivros(
      {
        id: 10,
        nome: this.livroInput
      }
    ))
  }
}