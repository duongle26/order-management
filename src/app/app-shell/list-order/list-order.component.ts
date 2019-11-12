import { Component, OnInit } from "@angular/core";
import { ListOrderService, IListOrder } from "./list-order.service";

@Component({
  selector: "app-list-order",
  templateUrl: "./list-order.component.html",
  styleUrls: ["./list-order.component.css"]
})
export class ListOrderComponent implements OnInit {
  listOrders: IListOrder[] = [];
  WarningMessageText = "Request to get list items failed:";
  WarningMessageOpen = false;

  constructor(private listOrderService: ListOrderService) {}

  ngOnInit() {
    this.listOrderService.getListOrder().subscribe(
      response => {
        this.listOrders = response;
      },
      error => {
        this.WarningMessageOpen = true;
        this.WarningMessageText = `Request to get list items failed: ${error}`;
      }
    );
  }
  handleSearch(inputText: string) {
    this.listOrderService.searchOrder(inputText).subscribe(
      response => {
        this.listOrders = response;
      },
      error => {
        this.WarningMessageOpen = true;
        this.WarningMessageText = `Request to get list items failed: ${error}`;
      }
    );
  }
}
