import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | string = '';
  teams: string[][] = [];

  //event handling
  onInput(member: string) {
    this.newMemberName = member;
  }
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'No puede agregar un nombre vacio';
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members);

    this.errorMessage = '';
  }

  onNumberOfTeamsInput(teams: string) {
    this.numberOfTeams = Number(teams);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Numero de equipos inválido';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'No hay miembros suficientes para crear equipos';
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomeIntex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomeIntex, 1)[0];

        if (!member) break;

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
