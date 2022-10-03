var homeContent = `<div class="homeContent">
<!-- home content goes in here -->
<div class="heroImage"></div>
<h1>Pawwfect Heart Grooming</h1>
<br />
<div class="intro">
  <p>
    Welcome to Pawwfect Heart Grooming, the most affordable grooming
    salon in Downtown Indianapolis. We are a woman-owned salon, hoping
    to treat all of our furry friends to a well-deserved spa day.
  </p>

  <p>
    Founded in 2003, we strive to be one of the most modern and
    affordable salons for your animal. Whether your Husky is needing an
    undercoat brush, or your Ragdoll cat is due for a bath, we got you
    covered. Come on in!
  </p>
</div>
<div class="contact">
  <div class="ph-em">
    <h4>contact us:</h4>
    <a href="tel:3179236504"
      ><span class="boldHours">phone number: </span>317-923-6504</a
    >
    <br />
    <a href="mailto: pawwfectheart@gmail.com"
      >pawwfectheart@gmail.com</a
    >
  </div>

  <div class="map-photo">
    <img src="images/indymap.jpg" alt="" />
  </div>

  <div class="hours">
    <h4>hours of operation:</h4>
    <p><span class="boldHours">mon-fri: </span> 8:00am - 5:00pm</p>
    <p><span class="boldHours">saturday: </span> 9:00am - 3:00pm</p>
    <p><span class="boldHours">sunday: </span> closed</p>
  </div>
</div>

<!-- begin footer -->
<footer>
  <p>copyright &copy; paw pooch grooming.</p>
  <p>all rights reserved.</p>
</footer>
</div>`;
var servicesContent = `  <div class="servicesContent">
<!-- services content goes in here -->
<div class="serviceImage"></div>
<h1>Our Services</h1>
<br />
<p class="serviceText">
  Here at Pawwfect Heart Grooming, we offer a variety of services for
  your pet. If there is something your pet needs but don't see it here,
  feel free to email or call us! We are as accomodating as they come.
</p>

<!-- begin service descriptions -->
<div class="service-des">
  <!-- service one -->
  <div class="service-row">
    <img src="images/dogbath-removebg-preview.png" alt="Dog Bath" />
    <h4>bathing.</h4>
    <p>
      Enjoy a relaxing (well needed) bath for your furry friend. This
      bath includes a blowdry and your pet getting sprayed down in one
      of our various colognes.
    </p>
  </div>
  <!-- service two -->
  <div class="service-row">
    <img src="images/catGroom-removebg-preview.png" alt="Cat Groom" />
    <h4>haircut.</h4>
    <p>
      In need of a cut? We got you covered. This includes shaping your
      pet's fur according to their breed and styling them. Enjoy a
      complimentary bandana!
    </p>
  </div>
  <!-- service three -->
  <div class="service-row">
    <img src="images/toenails2-removebg-preview.png" alt="Nail Trim" />
    <h4>nail trim.</h4>
    <p>
      Our pets nails need to be on point. This nail trim includes all
      the perks: cutting, shaping & filing. We reccomend your pet comes
      in every 3-4 weeks for this service.
    </p>
  </div>
</div>
<!-- begin second round of services -->
<div class="service-des">
  <!-- service four -->
  <div class="service-row">
    <img
      src="images/dogMassage-removebg-preview.png"
      alt="Dog Massage"
    />
    <h4>massage.</h4>
    <p>
      Treat your pet to a spa day! This massage service will relax every
      bone in your pet's body. They will come back to you feeling brand
      new and refreshed. It's just purrfect.
    </p>
  </div>
  <!-- service five -->
  <div class="service-row">
    <img src="images/demat-removebg-preview.png" alt="Dematting" />
    <h4>de-matting.</h4>
    <p>
      Sometimes accidents happen. That's why we included a new
      de-matting service for those friends who may need a bit of our
      help. We will get your pet back to its normal life in no time.
    </p>
  </div>
  <!-- service four -->
  <div class="service-row">
    <img
      src="images/carepackage-removebg-preview.png"
      alt="Care Package"
    />
    <h4>new client care package.</h4>
    <p>
      New to us? Welcome! This care package lets you choose one service
      for free, with two different at a discounted price. Mix and match
      to fit your pet's needs; we want you to feel welcome here!
    </p>
  </div>
</div>
<!-- begin footer -->
<footer>
  <p>copyright &copy; paw pooch grooming.</p>
  <p>all rights reserved.</p>
</footer>
</div>`;
var loginContent = `   <div class="loginContent">
<!-- this is where all login content will go -->
<div class="loginImage"></div>
<!-- description to log in -->
<h1>Log-In</h1>
<p class="loginIntro">
  Log in to schedule an appointment, view upcoming appointments, change
  your pet's information, and more!
</p>

<div class="login">
  <form>
    <!-- first name input -->
    <label for="fn">first name: <span class="asterik">*</span></label>
    <input type="text" id="fName"  placeholder="first name"/>
    <!-- last name input -->
    <label for="ln">last name: <span class="asterik">*</span></label>
    <input type="text" id="lName"placeholder="last name"/>
    <!-- email input -->
    <label for="em">email: <span class="asterik">*</span></label>
    <input type="text" id="email"  placeholder="email" />
    <!-- password input -->
    <label for="pass">password: <span class="asterik">*</span></label>
    <input type="text" id="password"  placeholder="password"/>
     <!-- submit input -->
     <input class="submit" type="submit" id="submit" value="log in" />
  </form>
</div>
</div>

<!-- begin footer -->
<footer>
  <p>copyright &copy; paw pooch grooming.</p>
  <p>all rights reserved.</p>
</footer>
</div>`;

// this function is being called from the app.js and it has the page name
export function modelPageName(pageName) {
    // console.log(pageName);
    // $("#app").html(eval(pageName));
    try {
        eval(pageName);
 $("#app").html(eval(pageName));
    } catch (e) {
        console.log("hello", e);
    }

    }