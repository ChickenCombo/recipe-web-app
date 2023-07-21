import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) ingredientName: ElementRef;
  @ViewChild('amountInput', { static: true }) ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(): void {
    this.ingredientAdded.emit({
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value,
    });
  }
}
