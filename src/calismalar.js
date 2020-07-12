import React from 'react';
import {Link} from 'react-router-dom';

function calismalar() {
    return (
      <div className="calismalar">
     
  <div class="container">
  
    <h1 class="my-4">İnhibitör Belirleme ve Klinik Çalışmalar
      
    </h1><hr></hr>
  
    <div class="row">
      <div class="col-lg-6 mb-6">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" 
          src="http://ghddiai.oss-cn-zhangjiakou.aliyuncs.com/file/figure_countries.png" width="284" height="250" alt=""/></a>
          <a href="#"><img class="card-img-top" 
          src="http://ghddiai.oss-cn-zhangjiakou.aliyuncs.com/file/figure_types.png" width="284" height="250" alt=""/></a>
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">Current worldwide clinical trials on COVID-19</a>
            </h4>
        <p>Similarily, using the same data, a preliminary small molecule treatment list with clinical trial counts was automatically generated using relevant key words. This list is only an estimate and will be updated daily.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-6">
        <div class="card h-100">
          <a href="#"><img class="card-img-top" 
          src="http://ghddiai.oss-cn-zhangjiakou.aliyuncs.com/file/Top51BSAAs.png" width="284" height="250" alt=""/></a>
         
          <div class="card-body">
            <h4 class="card-title">
              <a href="#">GHDDI Data analysis for drug repositioning</a>
            </h4>
        <p>A comprehensive data mining and analysis effort has been done to present these lists of existing drugs with therapeutic potentials for COVID-19. The analysis was based on different rationales including anti-coronavirus activity, broad-spectrum antiviral activity and antiviral drugs with highly conserved viral target such as RNA dependent RNA polymerase (RDRP). We will constantly update these lists with new discoveries.</p>
          </div>
        </div>
      </div>
      

    </div>
  </div>
  <br></br>
  <footer className="footer text-faded text-center py-5 ">
    <div className="container">
      <p className="m-0 small">Copyright &copy; 2020</p>
    </div>
  </footer>
      </div>
    );
  }
  
  export default calismalar;
  