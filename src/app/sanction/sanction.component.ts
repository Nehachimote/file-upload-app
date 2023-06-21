import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-sanction-page',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionPageComponent {
  data: any[];
  filteredData: any[];
  filters: any;

  constructor() {
    this.data = [];
    this.filteredData = [];
    this.filters = {};
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const sheetName: string = workbook.SheetNames[0];
      const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

      this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      this.filteredData = this.data;
    };

    reader.readAsBinaryString(file);
  }

  search(event: any) {
    const keyword: string = event?.target?.value || '';
  
    if (keyword.trim().length === 0) {
      this.filteredData = this.data;
      return;
    }
  
    this.filteredData = this.data.filter(row =>
      row.some((cell: { toString: () => string; }) => cell.toString().toLowerCase().includes(keyword.toLowerCase()))
    );
  }
  
 
  filter(keyword: string) {
    const sanitizedKeyword = keyword.toLowerCase().trim();
    this.filteredData = this.data.filter(row =>
      row.some((cell: { toString: () => string; }) => cell.toString().toLowerCase().includes(sanitizedKeyword))
    );
  }
  
  clearFilter() {
    this.filteredData = this.data;
  }
  
  
  downloadSanctionFile() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredData);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sanction List');
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'sanction.xlsx');
  }
}
