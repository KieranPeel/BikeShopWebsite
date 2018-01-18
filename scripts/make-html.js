function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function printBikeInfo() {
    // For Adult Bikes
    var bikes = [
        // id, name, description, price, type
        [1, 'Purple Hornet', 'For the tiny rider with big aspirations in your pack, the Hidden Canyon provides performance, comfort and style into a 20 inch wheel package. Whether they\'re looking to ride with friends in the neighborhood or with Mom & Dad on a camping trip, the Hidden Canyon delivers with the same lightweight aluminum frame construction as our adult bikes, but with features appropriate for smaller riders.', 9, 'adult'],
        [2, 'Black Rocket', 'The 2017 Subrosa Salvador 2 inch cruiser bike features a chromoly toptube, downtube and wishbone frame with integrated headtube drilled for gyro tabs, 1-1/8 inch fork with chromoly steerer tube, Subrosa Uplift topload stem, 2-pc bars with 7 inch rise, TSC Chula grips, Rant Spring U-brake and Rant lever, Rant Bangin 8 chromoly 3-pc cranks with sealed Mid BB, 25T Subrosa Shred style sprocket, 14mm sealed cassette hub with 11T driver, 3/8 inch sealed front hub, 36H Rant single-wall 26 inch rims, 26x2.20 inch tires, Subrosa Bleached Pivotal seat and Rant Hella PC pedals. (30.2 lbs)', 6.50, 'adult'],
        [3, 'White Raider', 'This is another bike in SE\'s retro collection. Frame is good ol\' 4130 chromoly steel and it sports the bigger 26-inch tires. It\'ll feel a lil heavier than the previous SE recommendations, but it\'ll be comfier on longer rides. The MacNeil also sports the bigger 26-inch tires and it\'s built much lighter.', 5, 'adult'],



        [1, 'Green Devil', 'Desc 1 blah blah blah blah blah blah blah', 4, 'kid'],
        [2, 'Orange Nocker', 'Desc 2', 3, 'kid'],
        [3, 'Pink Panther', 'Desc 3', 2.5, 'kid']

    ];
    for (var bike = 0; bike < bikes.length; bike++) {
        var id = bikes[bike][0];
        var name = bikes[bike][1];
        var desc = bikes[bike][2];

        // Adding escape characters
        desc = replaceAll(desc, "'", "\\&#39;");
        desc = replaceAll(desc, "\"", "\\&#34;");

        var price = bikes[bike][3];
        var type = bikes[bike][4];
        var url = 'images/bikes/' + type + '/' + id + '.png';

        var html = `
            <td class='bike' id="adultBike` + bike + `" onclick="printSelected(` + id + `, '` + name + `' ,'` + desc + `' ,` + price + `, '` + type + `');">
                <h1 class='name'>` + name + `</h1>
                <div class='image' style='background: url(` + url + `) no-repeat;'></div>
            </td>`;

        // Decides which table to put it in.
        if (type == 'adult') {
            document.getElementById("adultBikes").innerHTML += html;
        } else if (type == 'kid') {
            document.getElementById("kidBikes").innerHTML += html;
        }
    }

}

function printSelected(id, name, desc, price, type) {

    document.getElementById('info').style.display = 'block';

    document.getElementById('image').style.background = "url('images/bikes/" + type + "/" + id + ".png') no-repeat";

    document.getElementById('selectedName').innerHTML = name;
    document.getElementById('selectedDesc').innerHTML = desc;
    calculate_rent(price);

    document.getElementById('q').setAttribute('onchange', 'calculate_rent(' + price + ')');
    document.getElementById('d').setAttribute('onchange', 'calculate_rent(' + price + ')');

    document.getElementById('buttons').style.display = 'table';

}

function printHeader() {
    var html = `
  <div id="nav">
      <ul id="nav-buttons">

          <li class="nav-button">
              <a href="index.html">
                  <div class="option">
                      Home
                      <div class="underline"></div>
                  </div>
              </a>
          </li>


          <li class="nav-button">
              <a href="about.html">
                  <div class="option">
                      About Us
                      <div class="underline"></div>
                  </div>
              </a>
          </li>


          <li class="nav-button" id="bikeShop">
              <a href="">
                  <div class="option"><b>BIKE SHOP</b></div>
              </a>
          </li>


          <li class="nav-button">
              <a href="bikes.html">
                  <div class="option">
                      Bikes
                      <div class="underline"></div>
                  </div>
              </a>
          </li>


          <li class="nav-button">
              <a href="rent.html">
                  <div class="option">
                      Purchase
                      <div class="underline"></div>
                  </div>
              </a>
          </li>
      </ul>
  </div>
  `;

    document.getElementById('header').innerHTML = html;
}
