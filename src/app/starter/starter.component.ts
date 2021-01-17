import { Component, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit {
  
  elements: any = [
    { id: 1, negeri: 'PERLIS', pusat:'KANGAR', telefon:'04-9777991'},
    { id: 2, negeri: 'KEDAH', pusat:'ALOR SETAR', telefon:'04-7323801'},
    { id: 3, negeri: 'PULAU PINANG', pusat:'GEORGETOWN', telefon:'04-2289012'},
    { id: 4, negeri: 'PERAK', pusat:'IPOH', telefon:'05-5278715'},
    { id: 5, negeri: 'SELANGOR', pusat:'KLANG', telefon:'03-33710820'},
    { id: 6, negeri: 'KUALA LUMPUR', pusat:'KUALA LUMPUR', telefon:'03-26871400'},
    { id: 7, negeri: 'PAHANG', pusat:'KUANTAN', telefon:'09-5171991'},
    { id: 8, negeri: 'TERENGGANU', pusat:'KUALA TERENGGANU', telefon:'09-6688246'},
    { id: 9, negeri: 'KELANTAN', pusat:'KOTA BHARU', telefon:'09-7474091'},
    { id: 10, negeri: 'NEGERI SEMBILAN', pusat:'SEREMBAN', telefon:'06-7645755'},
    { id: 11, negeri: 'MELAKA', pusat:'MELAKA TENGAH', telefon:'06-2324028'},
    { id: 12, negeri: 'JOHOR', pusat:'JOHOR BHARU', telefon:'07-2349706'},
    { id: 13, negeri: 'SABAH', pusat:'KOTA KINABALU', telefon:'088-232440'},
    { id: 14, negeri: 'SARAWAK', pusat:'KUCHING', telefon:'082-433896'},
  ]

  police: any = [
    {id: 1, contigen: 'IPK KUALA LUMPUR', telefon:'03-2052099', fax: '03-21460791'},
    {id: 2, contigen: 'IPK KELANTAN	', telefon:'09-7455555', fax: '09-7440022'},
    {id: 3, contigen: 'IPK TERENGGANU	', telefon:'09-6270499', fax: '09-6242935'},
    {id: 4, contigen: 'IPK PAHANG', telefon:'09-5151999', fax: '09-5179018'},
    {id: 5, contigen: 'IPK JOHOR', telefon:'07-2212999', fax: '07-2240115'},
    {id: 6, contigen: 'IPK MELAKA', telefon:'06-2851999	', fax: '06-2837771'},
    {id: 7, contigen: 'IPK N. SEMBILAN', telefon:'06-7661999', fax: '06-7623506'},
    {id: 8, contigen: 'IPK SELANGOR', telefon:'03-20529999', fax: '03-55105858'},
    {id: 9, contigen: 'IPK SARAWAK', telefon:'082-240800', fax: '082-428355'},
    {id: 10, contigen: 'IPK SABAH', telefon:'088-450222', fax: '088-450260'},
    {id: 11, contigen: 'IPK PERAK', telefon:'05-2401999', fax: '05-2522911'},
    {id: 12, contigen: 'IPK P.PINANG', telefon:'04-2691999', fax: '04-2623388'},
    {id: 13, contigen: 'IPK KEDAH', telefon:'04-7392999', fax: '04-7341461'},
    {id: 14, contigen: 'IPK PERLIS', telefon:'04-9711999	', fax: '04-9761330'}
  ]
  

  ngAfterViewInit() {}
}
