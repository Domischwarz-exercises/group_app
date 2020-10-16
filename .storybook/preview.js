import '../css/style.css';

export default {
  title: 'Navigation'
}

export default {
  title: 'Graph'
}

export const Navigation = ()  => `<footer class="nav">
<div class="nav-bar">
<a ><img src="/img/dashboardIcon.png" alt="" class="nav__image home-btn"></a>
<a ><img  src="/img/buddyicon.png" alt="" class="nav__image buddy-btn"></a>
<a ><img src="/img/teamicon.png" alt="" class="nav__image team-btn"></a>
<a ><img src="/img/energyicon.png" alt="" class="nav__image energy-btn"></a>
<a ><img src="/img/journalicon.png" alt="" class="nav__image journal-btn"></a>
</div>								
</footer>`;

export const Graph= () => `<section class="graph">				
<h2 class="graph__title heading-2">Energy Level throughout the day</h2>
<figure class="graph__container">
  <span class="graph__yaxis graph-y1">100</span>
  <span class="graph__yaxis graph-y2">75</span>
  <span class="graph__yaxis graph-y3">50</span>
  <span class="graph__yaxis graph-y4">25</span>
  <span class="graph__yaxis graph-y5">0</span>
  <div class="bar">
    <div class="graph__barorange bar-1"></div>
    <div class="graph__barblue bar-2"></div>
  </div>
  <div class="bar">
    <div class="graph__barorange bar-3"></div>
    <div class="graph__barblue bar-4"></div>
  </div>
  <div class="bar">
    <div class="graph__barorange bar-5"></div>
    <div class="graph__barblue bar-6"></div>
  </div>
  <div class="bar">
    <div class="graph__barorange bar-7"></div>
    <div class="graph__barblue bar-8"></div>
  </div>
  <div class="bar">
    <div class="graph__barorange bar-9"></div>
    <div class="graph__barblue bar-10"></div>
  </div>
  <span class="graph__xaxis graph-x1">10:00</span>
  <span class="graph__xaxis graph-x2">15:30</span>
  <span class="graph__xaxis graph-x3">16:15</span>
  <span class="graph__xaxis graph-x4">18:25</span>
  <span class="graph__xaxis graph-x5">19:00</span>
</figure>
<div class="minibtncontainer">
  <button class="btn__extrasmall btn-blue">Other students</button>
  <button class="btn__extrasmall btn-verylightorange">You</button>
</div>
</section>`;