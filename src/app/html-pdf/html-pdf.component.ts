import { Component, OnInit } from '@angular/core';
declare const html2pdf: any;


@Component({
  selector: 'html-pdf',
  templateUrl: './html-pdf.component.html',
  styleUrls: ['./html-pdf.component.css']
})
export class HtmlPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }

  downloadPDF() {
    console.log("PRUEBA DE IMPRESION DEL BOTON");
    const voucher = document.getElementById("voucher");
    const options = {
      margin: 1,
      filename: 'comprobante-transaccion.pdf',
      image: {
        type: 'jpeg',
        quality: 1.00
      },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait'
      }
    }
    html2pdf(voucher, options);
  }

}
