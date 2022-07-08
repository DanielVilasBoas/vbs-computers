import { DEFAULT_CURRENCY_CODE /*ADICIONADO*/, LOCALE_ID /*ADICIONADO*/, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';

//*****************ADICIONANDO A MOEDA EM BRL E TRANSFORMANDO PONTO PARA VÍRGULA ***********************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
//******************************************************************************************************************

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  /*ADICIONADOS*/
  //***************************************************************
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
    //***************************************************************
})
export class ProdutosModule { }
