import { Component, OnInit} from '@angular/core';
import { ModalService } from '../core/modal/modal.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {


  constructor(private modalService: ModalService) {
  }

  private openModal(exchangeName: string, currency1: string, currency2: string): void {
    this.modalService.changeExchangeSummary(exchangeName, currency1, currency2);
  }

  ngOnInit() {
  }

}
