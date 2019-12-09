import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnDestroy {
  private topicoMostrarSidebar = new BehaviorSubject<boolean>(true);

  constructor(private userService: UserService) {
  }

  getMostrar$(): Observable<boolean> {
    return this.topicoMostrarSidebar.asObservable();
  }

  setMostrar(mostrar: boolean): void {
    this.topicoMostrarSidebar.next(mostrar);
  }

  ngOnDestroy(): void {
    this.topicoMostrarSidebar.unsubscribe();
  }

  CheckLogado(): boolean {
    return this.userService.isLogged();
  }
}

