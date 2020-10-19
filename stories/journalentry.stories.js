export default {
    title: 'Components/Journal Entry'
}

export const Entry = () => `<div class="journaldetail">
<h3 class="journaldetail__date journaldetail-title journaldetail-grid">TODAY, 12.07.2020</h3>
<h4 class="journaldetail__startitle journaldetail-title journaldetail-grid">Rating:</h4>
<div class="journaldetail__starcontainer journaldetail-grid">
  <img class="journaldetail__star--imggrey" src="img/starGrey.png" alt="Black star" />
  <img class="journaldetail__star--imggrey" src="img/starGrey.png" alt="Black star" />
  <img class="journaldetail__star--imggrey" src="img/starGrey.png" alt="Black star" />
  <img class="journaldetail__star--imggrey" src="img/starGrey.png" alt="" />
  <img class="journaldetail__star--imggrey" src="img/starGrey.png" alt="" />
</div>
<h4 class="journaldetail__rectangletitle journaldetail-title journaldetail-grid">Comprehension:</h4>
<div class="journaldetail__rectanglecontainer journaldetail-grid">
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
  <img class="journaldetail__rectangle--imggrey" src="img/rectangleGrey.png" alt="" />
</div>
<h4 class="journaldetail__mottotitle journaldetail-title journaldetail-grid">Motto:</h4>
<textarea
  class="journaldetail__motto journaldetail-grid"
  name=""
  id=""
  cols=""
  rows="1"
></textarea>
<h4 class="journaldetail__ notestitle journaldetail-title">Notes:</h4>
<textarea
  class="journaldetail__notes journaldetail-grid"
  name=""
  id=""
  cols="30"
  rows="10"
></textarea>

<a class="btn__transparent--small" href="journal.html">
  <button class="btn__transparent--small">Cancel</button>
</a>
<button class="btn__orange--small">Save</button>
</div>`;