import { GameModel } from './../../../DTO/game.model';
import { UserBackEndResponse } from './../../../DTO/user-back-end-response.dto';
import { UserService } from './../../../services/user.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.scss'],
})
export class EstatisticasComponent implements OnInit {
  // @ViewChild('myChart') mychart: any;

  users: UserBackEndResponse[];
  games: GameModel[];
  gameDataHits: number[];
  gameDataScore: number[];
  gameLabel: string[];

  constructor(private readonly userService: UserService) {}
  ngOnInit(): void {
    if(this.userService.hasUserLogged()){
      this.getUserStatistics();
    }

  }

  getUserStatistics() {
    this.userService.getAllUserGames().subscribe((item) => {
      this.users = item;
      if (this.users) {
        const user3 = item[0].games;

        user3.sort(function(a, b) {
          var c = new Date(a.createAt).getTime();
          var d = new Date(b.createAt).getTime();
          return c-d;
      });

        console.log('lista usuarios--:', item);
        console.log('user3--:', user3);

        this.gameDataHits = user3.map((item) => item.hits);
        this.gameDataScore = user3.map((item) => item.score);
        this.gameLabel = user3.map((item) => {
          let myDate = new Date(item.createAt)
          return myDate.toLocaleString('pt-BR', { day: 'numeric',month: 'numeric',year: 'numeric',hour:'2-digit', minute:'numeric', second: 'numeric' });

        });

        this.createChart();
        console.log('this.games-->', this.games);
      }
    });
  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: this.gameLabel,
      datasets: [
        {
          label: 'Hits',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.gameDataHits,
        },
        {
          label: 'Score',
          backgroundColor: 'rgb(200, 150, 90)',
          borderColor: 'rgb(200, 150, 90)',
          data: this.gameDataScore,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
        },
      },
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options,
    };

    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;
    new Chart(chartItem, config);
  }
}
