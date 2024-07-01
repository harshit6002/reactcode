import vivopic from './vivopic.jpg';
import realmepic from './realmepic.jpg';
import redmipic from './redmipic.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import opporenopic from './opporenopic.jpg'
import './Tabsdesign.css';
import onepluspic from './onepluspic.jpg'
function Tabsdesign() {
    return(
<div class="container py-5">
  <div >
  </div>
  <div>    
    <ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center">
      <li class="nav-item flex-sm-fill">
        <a id="home2-tab" data-toggle="tab" href="#Latestarrivals" role="tab" aria-controls="home2" aria-selected="true" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active">Latest Arrivals</a>
      </li>
      <li class="nav-item flex-sm-fill">
        <a id="profile2-tab" data-toggle="tab" href="#Renoseries" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0">Reno Series</a>
      </li>
      <li class="nav-item flex-sm-fill">
        <a id="contact2-tab" data-toggle="tab" href="#Vivoseries" role="tab" aria-controls="contact2" aria-selected="false" class="nav-link text-uppercase font-weight-bold rounded-0">Vivo V Series</a>
      </li>
      <li class="nav-item flex-sm-fill">
        <a id="contact2-tab" data-toggle="tab" href="#Realmenarzo" role="tab" aria-controls="contact2" aria-selected="false" class="nav-link text-uppercase font-weight-bold rounded-0">Realme Narzo Series</a>
      </li>
      <li class="nav-item flex-sm-fill">
        <a id="contact2-tab" data-toggle="tab" href="#Oneplus" role="tab" aria-controls="contact2" aria-selected="false" class="nav-link text-uppercase font-weight-bold rounded-0">One Plus Nord</a>
      </li>
    </ul>
    <div id="myTab2Content" class="tab-content">
      <div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-4 py-5 show active">

    <Container>
      <Row md={4}>
        <Col> <img src={opporenopic}/> </Col>
        <Col> <img src={vivopic} style={{width:"100%",height:"105%"}} /> </Col>
        <Col> <img src={realmepic} style={{height:"97%"}} /></Col>
        <Col> <img src={onepluspic} style={{height:"100%"}} /></Col>
      </Row>
    </Container>
      </div>
      <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-4 py-5">
        <p class="leade font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="leade font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div id="contact2" role="tabpanel" aria-labelledby="contact-tab" class="tab-pane fade px-4 py-5">
        
      </div>
    </div>
  </div>
</div>
    )
}
export default Tabsdesign;










// function Tabsdesign(){
//   return(
//     <div>
//       <div class="product-series-component aem-GridColumn aem-GridColumn--default--12">
//         <div class="cmp__plp-series style-default">
//           <div class="category-header">
//           <span class="category-box-title ft-subtitle-2 font-medium">Smartphones</span>
//           </div>
//       <div style={{ height:"50.66667px"}}>
//         <div class="series-header">
//           <ul class="series-link-list ft-body-3-1">
//             <li class="active op-trk-event" data-seriesid="hot-deal" tm-event_name="click_navigation" tm-module="Product List Navigation" tm-level="First" tm-nav_group="none" tm-nav_name="Super Deal">Super Deal</li>
//             <li class=" op-trk-event" data-seriesid="find-n-series" tm-event_name="click_navigation" tm-module="Product List Navigation" tm-level="First" tm-nav_group="none" tm-nav_name="Find N Series">Find N Series</li>
//             <li class=" op-trk-event" data-seriesid="reno-series" tm-event_name="click_navigation" tm-module="Product List Navigation" tm-level="First" tm-nav_group="none" tm-nav_name="Reno Series">Reno Series</li>
//             <li class=" op-trk-event" data-seriesid="f-series" tm-event_name="click_navigation" tm-module="Product List Navigation" tm-level="First" tm-nav_group="none" tm-nav_name="F Series">F Series</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
    
//   )
// }
// export default Tabsdesign;