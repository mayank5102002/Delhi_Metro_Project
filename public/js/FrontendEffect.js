  const stationNames = [
       
    "Adarsh Nagar",
    "Aiims",
    "Airport (T-3)",
    "Akshardham",
    "Anand Vihar ISBT",
    "Arjan Garh",
    "Arthala",
    "Ashok Park Main",
    "Ashram",
    "Azadpur",
    "Badarpur Border",
    "Badkhal Mor",
    "Bahadurgarh City",
    "Barakhamba Road",
    "Bata Chowk",
    "Belvedere Towers",
    "Bhikaji Cama Place",
    "Botanical Garden",
    "Brigadier Hoshiyar Singh",
    "Central Secretariat",
    "Chandni Chowk",
    "Chawri Bazar",
    "Chhatarpur",
    "Chirag Delhi",
    "Civil Lines",
    "Cyber City",
    "Dabri Mor - Janakpuri South",
    "Dashrath Puri",
    "Delhi Aerocity",
    "Delhi Cantonment",
    "Delhi Gate",
    "Dhansa Bus Stand",
    "Dhaula Kuan",
    "Dilli Haat - INA",
    "Dilshad Garden",
    "Durgabai Deshmukh South Campus",
    "Dwarka",
    "Dwarka Mor",
    "Dwarka Sector 10",
    "Dwarka Sector 11",
    "Dwarka Sector 12",
    "Dwarka Sector 13",
    "Dwarka Sector 14",
    "Dwarka Sector 21",
    "Dwarka Sector 8",
    "Dwarka Sector 9",
    "East Azad Nagar",
    "East Vinod Nagar - Mayur Vihar-II",
    "Escorts Mujesar",
    "ESI - Basaidarapur",
    "Ghevra Metro Station",
    "Ghitorni",
    "Gokulpuri",
    "Golf Course",
    "Govindpuri",
    "Greater Kailash",
    "Green Park",
    "Guru Teg Bahadur(GTB) Nagar",
    "Guru Dronacharya",
    "Haiderpur Badli Mor",
    "Harkesh Nagar Okhla",
    "Hauz Khas",
    "Hindon River",
    "HUDA City Centre",
    "IFFCO Chowk",
    "IIT Delhi",
    "I.P.Extension",
    "Inderlok",
    "Indraprastha",
    "ITO",
    "Jafrabad",
    "Jahangirpuri",
    "Jama Masjid",
    "Jamia Millia Islamia",
    "Janakpuri East",
    "Janakpuri West",
    "Jangpura",
    "Janpath",
    "Jasola Vihar Shaheen Bagh",
    "Jasola-Apollo",
    "Jhandewalan",
    "Jhilmi",
    "JLN(Jawaharlal Nehru) Stadium",
    "Johri Enclave",
    "Jor Bagh",
    "Kailash Colony",
    "Kalindi Kunj",
    "Kalkaji Mandir",
    "Kanhaiya Nagar",
    "Karkarduma",
    "Karkarduma Court",
    "Karol Bagh",
    "Kashmere Gate",
    "Kaushambi",
    "Keshav Puram",
    "Khan Market",
    "Kirti Nagar",
    "Kohat Enclave",
    "Krishna Nagar",
    "Lajpat Nagar",
    "Lal Qila",
    "Laxmi Nagar",
    "Lok Kalyan Marg",
    "Madipur",
    "Maharaja Surajmal Stadium",
    "Majlis Park",
    "Major Mohit Sharma Rajendra Nagar",
    "Malviya Nagar",
    "Mandawali - West Vinod Nagar",
    "Mandi House",
    "Mansarovar Park",
    "Maujpur - Babarpur",
    "Mayapuri",
    "Mayur Vihar Extension",
    "Mayur Vihar-I",
    "Mayur Vihar Pocket I",
    "Mewla Maharajpur",
    "MG Road",
    "Model Town",
    "Mohan Estate",
    "Mohan Nagar",
    "Moolchand",
    "Moti Nagar",
    "Moulsari Avenue",
    "Mundka",
    "Mundka Industrial Area(MIA)",
    "Munirka",
    "Najafgarh",
    "Nangli",
    "Nangloi",
    "Nangloi Railway Station",
    "Naraina Vihar",
    "Nawada",
    "Neelam Chowk Ajronda",
    "Nehru Enclave",
    "Nehru Place",
    "Netaji Subhash Place",
    "New Ashok Nagar",
    "New Delhi",
    "NHPC Chowk",
    "Nirman Vihar",
    "Noida City Centre",
    "Noida Electronic City",
    "Noida Sector 15",
    "Noida Sector 16",
    "Noida Sector 18",
    "Okhla Bird Sanctuary",
    "Okhla NSIC",
    "Okhla Vihar",
    "Old Faridabad",
    "Palam",
    "Panchsheel Park",
    "Pandit Shree Ram Sharma",
    "Paschim Vihar East",
    "Paschim Vihar West",
    "Patel Chowk",
    "Patel Nagar",
    "Peeragarhi",
    "Phase-1",
    "Phase-2",
    "Phase-3",
    "Pitampura",
    "Pratap Nagar",
    "Preet Vihar",
    "Pul Bangash",
    "Punjabi Bagh",
    "Punjabi Bagh West",
    "Qutab Minar",
    "R. K. Puram",
    "Raj Bagh",
    "Raja Nahar Singh(Ballabhgarh)",
    "Rajdhani Park",
    "Rajendra Place",
    "Rajiv Chowk",
    "Rajouri Garden",
    "Ramesh Nagar",
    "Rithala",
    "Ramakrishna Ashram Marg",
    "Rohini East",
    "Rohini West",
    "Rohini Sector 18, 19",
    "Sadar Bazaar Cantonment",
    "Saket",
    "Samaypur Badli",
    "Sant Surdas (Sihi)",
    "Sarai",
    "Sarai Kale Khan - Nizamuddin",
    "Sarita Vihar",
    "Sarojini Nagar",
    "Satguru Ram Singh Marg",
    "Sector-34 Noida",
    "Sector-52 Noida",
    "Sector-59 Noida",
    "Sector-61 Noida",
    "Sector-62 Noida",
    "Sector-42-43",
    "Sector-53-54",
    "Sector 28",
    "Sector 55-56",
    "Sector-54 Chowk",
    "Seelampur",
    "Shadipur",
    "Shahdara",
    "Shaheed Nagar",
    "Shaheed Sthal(New Bus Adda)",
    "Shakurpur",
    "Shalimar Bagh",
    "Shankar Vihar",
    "Shastri Nagar",
    "Shastri Park",
    "Shiv Vihar",
    "Shivaji Park",
    "Shivaji Stadium",
    "Shyam Park",
    "Sikanderpur",
    "Sir M. Vishweshwaraiah Moti Bagh",
    "South Extension",
    "Subhash Nagar",
    "Sukhdev Vihar",
    "Sultanpur",
    "Supreme Court",
    "Tagore Garden",
    "Terminal 1-IGI Airport",
    "Tikri Border",
    "Tikri Kalan",
    "Tilak Nagar",
    "Tis Hazari",
    "Trilokpuri-Sanjay Lake",
    "Tughlakabad Station",
    "Udyog Bhawan",
    "Udyog Nagar",
    "Uttam Nagar East",
    "Uttam Nagar West",
    "Vaishali",
    "Vasant Vihar",
    "Vidhan Sabha",
    "Vinobapuri",
    "VishwaVidyalaya",
    "Welcome",
    "Yamuna Bank"
        // Add more station names here
      ];
      
      const letterInput1 = document.querySelector("#source1");
      const letterInput2 = document.querySelector("#source2");
      const stationList1 = document.querySelector("#station-list-1");
      const stationList2 = document.querySelector("#station-list-2");
      
      letterInput1.addEventListener("input", () => {
        const enteredLetter = letterInput1.value.toUpperCase();
        const filteredNames = stationNames.filter((name) => name.toUpperCase().includes(enteredLetter.toUpperCase()));
      
        stationList1.innerHTML = "";
        filteredNames.forEach((name) => {
          const listItem = document.createElement("li");
          listItem.textContent = name;
          stationList1.appendChild(listItem);
        });
      
        if (filteredNames.length > 0) {
          stationList1.style.display = "block";
        } else {
          stationList1.style.display = "none";
        }
      });
      
      letterInput2.addEventListener("input", () => {
        const enteredLetter = letterInput2.value.toUpperCase();
        const filteredNames = stationNames.filter((name) => name.toUpperCase().includes(enteredLetter.toUpperCase()));
      
        stationList2.innerHTML = "";
        filteredNames.forEach((name) => {
          const listItem = document.createElement("li");
          listItem.textContent = name;
          stationList2.appendChild(listItem);
        });
      if (filteredNames.length > 0) {
          stationList2.style.display = "block";
        } else {
          stationList2.style.display = "none";
        }
      });
      
      stationList1.addEventListener("click", (event) => {
        letterInput1.value = event.target.textContent;
        stationList1.style.display = "none";
      });
      
      stationList2.addEventListener("click", (event) => {
        letterInput2.value = event.target.textContent;
        stationList2.style.display = "none";
      });
      
      document.addEventListener("click", (event) => {
        if (!letterInput1.contains(event.target) && !stationList1.contains(event.target)) {
          stationList1.style.display = "none";
        }
        if (!letterInput2.contains(event.target) && !stationList2.contains(event.target)) {
          stationList2.style.display = "none";
        }
      });


      

//Effect
var s1 = document.getElementById("source1");
var s2 = document.getElementById("source2");

var typeData = new Typed(".role", {
  strings: [
    "Nehru Enclave",
    "ANAND VIHAR ISBT",
    "Kalkaji Mandir",
    "Chandni Chowk"
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000
});

s1.addEventListener("input", function() {
  if (s1.value !== "") {
    document.querySelector(".role").textContent = s1.value;
    typeData.stop();
  } else if (s2.value !== "") {
    document.querySelector(".role").textContent = s2.value;
  } else {
    typeData.start();
  }
});

s2.addEventListener("input", function() {
  if (s2.value !== "") {
    document.querySelector(".role").textContent = s2.value;
    typeData.stop();
  } else if (s1.value !== "") {
    document.querySelector(".role").textContent = s1.value;
  } else {
    typeData.start();
  }
});

var ul1 = document.querySelector("#station-list-1");
ul1.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    s1.value = e.target.textContent;
    if (s1.value !== "") {
      document.querySelector(".role").textContent = s1.value;
      typeData.stop();
    } else if (s2.value !== "") {
      document.querySelector(".role").textContent = s2.value;
    } else {
      typeData.start();
    }
  }
});

var ul2 = document.querySelector("#station-list-2");
ul2.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    s2.value = e.target.textContent;
    if (s2.value !== "") {
      document.querySelector(".role").textContent = s2.value;
      typeData.stop();
    } else if (s1.value !== "") {
      document.querySelector(".role").textContent = s1.value;
    } else {
      typeData.start();
    }
  }
});



const tabs = document.querySelectorAll(".tab a");
      tabs.forEach(tab =>{
        tab.addEventListener("click", function(){
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        })
      });



//Three lines working

function displayLines() {
  var x = document.getElementById("myDIV");
  var x2 = document.getElementById("cont-nav");


  if (x.style.display === "block") {
    x.style.display = "none";
    x2.style.marginBottom = "3rem" ;
  } else {
    x.style.display = "block";
    x2.style.marginBottom = "10rem" ;
  }

}


// Image load first

const img = new Image();
img.src = "./img/metro2blur.png";
img.onload = function() {
  document.querySelector(".header").style.display = "block";
};


