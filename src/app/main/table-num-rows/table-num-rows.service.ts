import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableNumRowsService {

    rows = 5;
    @Output() update: EventEmitter<number> = new EventEmitter();
    change(value: number) {
        this.rows = value;
        this.update.emit(this.rows);
    }

}
