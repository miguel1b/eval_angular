import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Activo } from 'src/app/_model/activo';
import { ActivoService } from 'src/app/_service/activo.service';


@Component({
  selector: 'app-activo',
  templateUrl: './activo.component.html',
  styleUrls: ['./activo.component.css']
})
export class ActivoComponent implements OnInit {
  displayedColumns = ["id","datoBigDecimal","datoDato","datoString","acciones"]
  dataSource: MatTableDataSource<Activo>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private activoService : ActivoService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.activoService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'Aviso', { duration: 2000 });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

//  eliminar(id : string){
//    this.activoService.eliminar(id).subscribe(data => {
//      this.activoService.listar().subscribe(data => {
//        this.activoService.laptopCambio.next(data);
//        this.activoService.mensajeCambio.next('Se elimino');
//      });      
//    });
//  }

}
