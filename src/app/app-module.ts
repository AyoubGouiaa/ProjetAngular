import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { ListProduit } from './list-produit/list-produit';
import { FormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';

@NgModule({
  declarations: [App, ListProduit, Navbar],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
