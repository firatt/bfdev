import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {


  // Papers
  _2018_1: string;
  _2018_2: string;
  _2018_3: string;
  _2018_4: string;
  _2018_5: string;
  _2018_6: string;
  _2018_7: string;
  _2018_8: string;
  _2018_9: string;

  _2017_1: string;
  _2017_2: string;
  _2017_3: string;

  _2016_1: string;
  _2016_2: string;
  _2016_3: string;
  _2016_4: string;
  _2016_5: string;

  _2015_1: string;
  _2015_2: string;
  _2015_3: string;
  _2015_4: string;
  _2015_5: string;
  _2015_6: string;
  _2015_7: string;

  _2014_1: string;
  _2014_2: string;
  _2014_3: string;
  _2014_4: string;
  _2014_5: string;

  _2013_1: string;
  _2013_2: string;
  _2013_3: string;
  _2013_4: string;
  _2013_5: string;
  _2013_6: string;
  _2013_7: string;
  _2013_8: string;
  _2013_9: string;
  _2013_10: string;
  _2013_11: string;
  _2013_12: string;

  _2012_1: string;
  _2012_2: string;
  _2012_3: string;
  _2012_4: string;
  _2012_5: string;
  _2012_6: string;

  _2011_1: string;
  _2011_2: string;
  _2011_3: string;
  _2011_4: string;
  _2011_5: string;
  _2011_6: string;
  _2011_7: string;

  _2010_1: string;
  _2010_2: string;
  _2010_3: string;
  _2010_4: string;

  _2009_1: string;
  _2009_2: string;
  _2009_3: string;
  _2009_4: string;

  _2008_1: string;
  _2008_2: string;
  _2008_3: string;
  _2008_4: string;
  _2008_5: string;
  _2008_6: string;
  _2008_7: string;
  _2008_8: string;

  _2007_1: string;
  _2007_2: string;
  _2007_3: string;

  _2006_1: string;
  
  _2005_1: string;
  _2005_2: string;
  _2005_3: string;
  _2005_4: string;
  _2005_5: string;
  _2005_6: string;

  _2004_1: string;
  _2004_2: string;
  
  _2003_1: string;
  
  _1998_1: string;
  
  constructor(
  ) {
    this._2018_1 = '../../assets/docs/texts/2018/1.pdf';
    this._2018_2 = '../../assets/docs/texts/2018/2.pdf';
    this._2018_3 = '../../assets/docs/texts/2018/3.pdf';
    this._2018_4 = '../../assets/docs/texts/2018/4.pdf';
    this._2018_5 = '../../assets/docs/texts/2018/5.pdf';
    this._2018_6 = '../../assets/docs/texts/2018/6.pdf';
    this._2018_7 = '../../assets/docs/texts/2018/7.pdf';
    this._2018_8 = '../../assets/docs/texts/2018/8.pdf';
    this._2018_9 = '../../assets/docs/texts/2018/9.pdf';

    this._2017_1 = '../../assets/docs/texts/2017/1.pdf';
    this._2017_2 = '../../assets/docs/texts/2017/2.pdf';
    this._2017_3 = '../../assets/docs/texts/2017/3.pdf';

    this._2016_1 = '../../assets/docs/texts/2016/1.pdf';
    this._2016_2 = '../../assets/docs/texts/2016/2.pdf';
    this._2016_3 = '../../assets/docs/texts/2016/3.pdf';
    this._2016_4 = '../../assets/docs/texts/2016/4.pdf';
    this._2016_5 = '../../assets/docs/texts/2016/5.pdf';

    this._2015_1 = '../../assets/docs/texts/2015/1.pdf';
    this._2015_2 = '../../assets/docs/texts/2015/2.pdf';
    this._2015_3 = '../../assets/docs/texts/2015/3.pdf';
    this._2015_4 = '../../assets/docs/texts/2015/4.pdf';
    this._2015_5 = '../../assets/docs/texts/2015/5.pdf';
    this._2015_6 = '../../assets/docs/texts/2015/6.pdf';
    this._2015_7 = '../../assets/docs/texts/2015/7.pdf';

    this._2014_1 = '../../assets/docs/texts/2014/1.pdf';
    this._2014_2 = '../../assets/docs/texts/2014/2.pdf';
    this._2014_3 = '../../assets/docs/texts/2014/3.pdf';
    this._2014_4 = '../../assets/docs/texts/2014/4.pdf';
    this._2014_5 = '../../assets/docs/texts/2014/5.pdf';

    this._2013_1 = '../../assets/docs/texts/2013/1.pdf';
    this._2013_2 = '../../assets/docs/texts/2013/2.pdf';
    this._2013_3 = '../../assets/docs/texts/2013/3.pdf';
    this._2013_4 = '../../assets/docs/texts/2013/4.pdf';
    this._2013_5 = '../../assets/docs/texts/2013/5.pdf';
    this._2013_6 = '../../assets/docs/texts/2013/6.pdf';
    this._2013_7 = '../../assets/docs/texts/2013/7.pdf';
    this._2013_8 = '../../assets/docs/texts/2013/8.pdf';
    this._2013_9 = '../../assets/docs/texts/2013/9.pdf';
    this._2013_10 = '../../assets/docs/texts/2013/10.pdf';
    this._2013_11 = '../../assets/docs/texts/2013/11.pdf';
    this._2013_12 = '../../assets/docs/texts/2013/12.pdf';

    this._2012_1 = '../../assets/docs/texts/2012"/1.pdf';
    this._2012_2 = '../../assets/docs/texts/2012"/2.pdf';
    this._2012_3 = '../../assets/docs/texts/2012"/3.pdf';
    this._2012_4 = '../../assets/docs/texts/2012"/4.pdf';
    this._2012_5 = '../../assets/docs/texts/2012"/5.pdf';
    this._2012_6 = '../../assets/docs/texts/2012"/6.pdf';

    this._2011_1 = '../../assets/docs/texts/2011/1.pdf';
    this._2011_2 = '../../assets/docs/texts/2011/2.pdf';
    this._2011_3 = '../../assets/docs/texts/2011/3.pdf';
    this._2011_4 = '../../assets/docs/texts/2011/4.pdf';
    this._2011_5 = '../../assets/docs/texts/2011/5.pdf';
    this._2011_6 = '../../assets/docs/texts/2011/6.pdf';
    this._2011_7 = '../../assets/docs/texts/2011/7.pdf';

    this._2010_1 = '../../assets/docs/texts/2010/1.pdf';
    this._2010_2 = '../../assets/docs/texts/2010/2.pdf';
    this._2010_3 = '../../assets/docs/texts/2010/3.pdf';
    this._2010_4 = '../../assets/docs/texts/2010/4.pdf';

    this._2009_1 = '../../assets/docs/texts/2009/1.pdf';
    this._2009_2 = '../../assets/docs/texts/2009/2.pdf';
    this._2009_3 = '../../assets/docs/texts/2009/3.pdf';
    this._2009_4 = '../../assets/docs/texts/2009/4.pdf';

    this._2008_1 = '../../assets/docs/texts/2008/1.pdf';
    this._2008_2 = '../../assets/docs/texts/2008/2.pdf';
    this._2008_3 = '../../assets/docs/texts/2008/3.pdf';
    this._2008_4 = '../../assets/docs/texts/2008/4.pdf';
    this._2008_5 = '../../assets/docs/texts/2008/5.pdf';
    this._2008_6 = '../../assets/docs/texts/2008/6.pdf';
    this._2008_7 = '../../assets/docs/texts/2008/7.pdf';
    this._2008_8 = '../../assets/docs/texts/2008/8.pdf';

    this._2007_1 = '../../assets/docs/texts/2007/1.pdf';
    this._2007_2 = '../../assets/docs/texts/2007/2.pdf';
    this._2007_3 = '../../assets/docs/texts/2007/3.pdf';

    this._2006_1 = '../../assets/docs/texts/2006/1.pdf';
    
    this._2005_1 = '../../assets/docs/texts/2005/1.pdf';
    this._2005_2 = '../../assets/docs/texts/2005/2.pdf';
    this._2005_3 = '../../assets/docs/texts/2005/3.pdf';
    this._2005_4 = '../../assets/docs/texts/2005/1.pdf';
    this._2005_5 = '../../assets/docs/texts/2005/2.pdf';
    this._2005_6 = '../../assets/docs/texts/2005/3.pdf';

    this._2004_1 = '../../assets/docs/texts/2004/1.pdf';
    this._2004_2 = '../../assets/docs/texts/2004/2.pdf';

    this._2003_1 = '../../assets/docs/texts/2003/1.pdf';
    
    this._1998_1 = '../../assets/docs/texts/1998/1.pdf';

  }

  ngOnInit() {
  }

}
