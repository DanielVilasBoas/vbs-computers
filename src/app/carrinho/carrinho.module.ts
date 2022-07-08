import { DEFAULT_CURRENCY_CODE /*ADICIONADO*/, LOCALE_ID /*ADICIONADO*/, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';

//*****************ADICIONANDO A MOEDA EM BRL E TRANSFORMANDO PONTO PARA VÍRGULA ***********************************
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);
//******************************************************************************************************************


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
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


export class CarrinhoModule { }
