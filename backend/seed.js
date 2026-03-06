require('dotenv').config();
const mongoose = require("mongoose");
const Route = require("./models/Route");

const routes1 = {
  "1": [
    "Afzalgunj",
    "Ibrahim Bagh",
    "Ramkoti",
    "YMCA",
    "Narayanguda",
    "Chikkadpally",
    "RTC Cross Road",
    "Golconda Cross Road",
    "Raja Deluxe",
    "MSRD",
    "Jail Garden",
    "Bhoiguda",
    "Chilakalaguda Cross Road",
    "Secunderabad"
  ],
  "1B": [
    "JBS",
    "Secunderabad",
    "MSRD",
    "RTC Cross Road",
    "Chikkadpally",
    "YMCA",
    "Koti",
    "CBS",
    "Afzalgunj",
    "Charminar"
  ],
  "1E": [
    "Afzalgunj",
    "Ibrahim Bagh",
    "Koti",
    "Chikkadpally",
    "RTC Cross Road",
    "MSRD",
    "Prakash Nagar",
    "Sangeet",
    "East Marredpally",
    "Addagutta",
    "Tukaramgate"
  ],
  "11": [
    "Secunderabad",
    "MSD",
    "RTC Cross Road",
    "Chikkadpally",
    "Narayanguda",
    "YMCA",
    "Koti",
    "MGBS"
  ],
  "1K": [
    "Koti",
    "YMCA",
    "Narayanguda",
    "Chikkadpally",
    "RTC Cross Road",
    "MSRD",
    "Secunderabad"
  ],

  "1K/229": [
    "Koti",
    "YMCA",
    "Narayanguda",
    "MSRD",
    "Secunderabad",
    "Bowenpally",
    "Suchitra",
    "Kompally",
    "Pochampally",
    "Kandlakoya",
    "Medchal"
  ],

  "1L": [
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Koti",
    "YMCA",
    "Chikkadpally",
    "RTC Cross Road",
    "MSRD",
    "Secunderabad"
  ],

  "1H": [
    "Secunderabad",
    "MSRD",
    "Narayanguda",
    "YMCA",
    "Koti",
    "Ibrahim Bagh",
    "Afzalgunj",
    "Puranapool",
    "Bahadurpura",
    "Kishanbagh",
    "Rajendranagar"
  ],

  "1P": [
    "Afzalgunj",
    "Ibrahim Bagh",
    "Koti",
    "YMCA",
    "Narayanguda",
    "RTC Cross Road",
    "MSRD",
    "Prakash Nagar",
    "Secunderabad"
  ],

  "1V": [
    "NGO's Colony",
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Koti",
    "YMCA",
    "Narayanguda",
    "MSRD",
    "Secunderabad"
  ],

  "1V/229": [
    "NGO's Colony",
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Koti",
    "YMCA",
    "Narayanguda",
    "MSRD",
    "Secunderabad",
    "Bowenpally",
    "Suchitra",
    "Kompally",
    "Pochampally",
    "Kandlakoya",
    "Medchal"
  ],

  "1Y": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Road",
    "YMCA",
    "Koti",
    "Ibrahim Bagh"
  ],

  "1/94R": [
    "Secunderabad",
    "MSRD",
    "Narayanguda",
    "YMCA",
    "Koti",
    "IBS",
    "Afzalgunj",
    "Puranapool",
    "Bahadurpura",
    "Kishanbagh",
    "Rajendranagar"
  ],

  "1K/25": [
    "Koti",
    "YMCA",
    "Narayanguda",
    "RTC Cross Roads",
    "MSRD",
    "Secunderabad",
    "JBS",
    "Kharkhana",
    "Lalbazaar",
    "Lothukunta",
    "Alwal Temple",
    "Alwal",
    "Old Alwal"
  ],

  "2": [
    "Secunderabad",
    "Boiguda",
    "MSRD",
    "Raja Deluxe",
    "Golconda Cross Road",
    "RTC Cross Roads",
    "VST",
    "Shivamutt",
    "Nallakunta",
    "Fever Hospital",
    "BKP",
    "Tourist",
    "Kachiguda",
    "Nimboliadda",
    "Chaderghat",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "2C": [
    "Barkas",
    "Chandrayangutta",
    "Charminar",
    "Afzalgunj",
    "IBS",
    "Kachiguda",
    "Shivamutt",
    "RTC Cross Roads",
    "MSRD",
    "Secunderabad"
  ],

  "2D": [
    "Mehdipatnam Darga",
    "Risala Bazar",
    "Alwal",
    "Lalbazaar",
    "Kharkhana",
    "JBS",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "2J": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "Chudi Bazar",
    "Jiyaguda"
  ],

  "2U": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "Charminar",
    "Barkas",
    "Uppuguda"
  ],

  "2V": [
    "Secunderabad",
    "Sithafalmandi",
    "Warasiguda",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "2Z-ZooPark": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "City College",
    "Bahadurpura",
    "Zoo Park"
  ],

  "2Z-Madhuban": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "City College",
    "Bahadurpura",
    "Madhuban Colony"
  ],

  "2/95A": [
    "Secunderabad",
    "MSRD",
    "RTC Cross Roads",
    "Shivamutt",
    "Nallakunta",
    "Kachiguda",
    "Afzalgunj",
    "Puranapool",
    "Bahadurpura",
    "Zoo Park",
    "Shivaramapally",
    "Agricultural College"
  ],

  "3": [
    "Kushaiguda",
    "Moulali",
    "JTS Industrial Estate",
    "RFC Railway Quarters",
    "Lalapet",
    "White House",
    "Tarnaka",
    "Dairy Farm",
    "Adikmet",
    "Vidyanagar",
    "Shivamutt",
    "Fever Hospital",
    "BKP",
    "Kachiguda",
    "Chaderghat",
    "IBS",
    "Afzalgunj"
  ],

  "3A": [
    "Koti",
    "YMCA",
    "Fever Hospital",
    "Shivamutt",
    "Osmania University",
    "Tarnaka",
    "Habsiguda",
    "Nacharam Cross Road",
    "Laxmi Starch",
    "Chilkanagar"
  ],

  "3B": [
    "Afzalgunj",
    "IBS",
    "Koti",
    "YMCA",
    "Shivamutt",
    "Osmania University",
    "Old Dairy Farm",
    "Tarnaka",
    "Habsiguda",
    "NGRI East Gate"
  ],

  "3C": [
    "Charminar",
    "Afzalgunj",
    "IBS",
    "Chaderghat",
    "Kachiguda",
    "BKP",
    "Shivamutt",
    "Vidyanagar",
    "Osmania University",
    "Tarnaka"
  ],

  "3C/L": [
    "Afzalgunj",
    "Koti",
    "YMCA",
    "Fever Hospital",
    "Shivamutt",
    "Vidyanagar",
    "Osmania University",
    "Tarnaka",
    "Lalapet"
  ],

  "3D": [
    "Dammaiguda",
    "Kushaiguda",
    "Moulali",
    "Tarnaka",
    "Osmania University",
    "Shivamutt",
    "Koti",
    "Afzalgunj"
  ],

  "3E": [
    "Yapral",
    "Kachiguda",
    "Sainikpuri",
    "Neredmet",
    "AS Rao Nagar",
    "ECIL Cross Road",
    "Mallapur",
    "Nacharam",
    "Habsiguda",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "Fever Hospital",
    "YMCA",
    "Koti",
    "Afzalgunj"
  ],

  "3G": [
    "Gokul Nagar",
    "Railway Quarters",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "Tourist",
    "Koti",
    "Afzalgunj"
  ],

  "3H": [
    "ECIL Cross Road",
    "HB Colony",
    "JTS Industrial Estate",
    "Railway Quarters",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "Tourist",
    "Badichowdi",
    "Koti",
    "IBS",
    "Afzalgunj"
  ],

  "3H/95A": [
    "NFC",
    "ECIL Cross Road",
    "HB Colony",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Shivamutt",
    "Koti",
    "Afzalgunj",
    "Bahadurpura",
    "Zoo Park",
    "Agricultural College"
  ],



  "3JJ": [
    "JJ Nagar",
    "Ambedkar Nagar",
    "Kapra",
    "Habsiguda",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "YMCA",
    "Koti"
  ],


  "3K": [
    "Kushaiguda",
    "Moulali",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Shivamutt",
    "BKP",
    "Koti",
    "IBS",
    "Afzalgunj"
  ],

  "3M": [
    "Afzalgunj",
    "Koti",
    "Shivamutt",
    "Vidyanagar",
    "Tarnaka",
    "Lalapet",
    "RTC Colony",
    "AS Rao Nagar"
  ],

  "3N": [
    "Hemanagar",
    "Nacharam",
    "Habsiguda",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "Reddy College",
    "YMCA",
    "Koti"
  ],

  "3P": [
    "Easwar Puri",
    "Kandiguda",
    "Sainikpuri Cross Road",
    "AS Rao Nagar",
    "SP Nagar",
    "Moulali",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Shivamutt",
    "BKP",
    "Koti"
  ],

  "3R": [
    "Koti",
    "YMCA",
    "BKP",
    "Shivamutt",
    "Osmania University",
    "Tarnaka",
    "Habsiguda",
    "Kakatiya Nagar",
    "NGRI East Gate"
  ],

  "3S": [
    "Kachiguda",
    "Tourist",
    "BKP",
    "Shivamutt",
    "Vidyanagar",
    "Osmania University",
    "Old Dairy Farm",
    "Sitaphalmandi",
    "Gandhi Guda",
    "Secunderabad"
  ],

  "3SS": [
    "Koti",
    "Tourist",
    "Fever Hospital",
    "Tilak Nagar",
    "Sathya Sai School",
    "Shivam",
    "Osmania University",
    "Old Dairy Farm",
    "Sitaphalmandi",
    "Chilakalaguda",
    "Secunderabad"
  ],

  "3Y": [
    "Vampuguda",
    "AS Rao Nagar",
    "Kushaiguda",
    "Moulali",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Koti",
    "Afzalgunj"
  ],

  "3Z": [
    "Kushaiguda",
    "Moulali",
    "JTS Industrial Estate",
    "Lalapet",
    "Tarnaka",
    "Osmania University",
    "Vidyanagar",
    "Shivamutt",
    "BKP",
    "Kachiguda",
    "IBS",
    "Afzalgunj",
    "Madina",
    "City College",
    "Bahadurpura",
    "Zoo Park"
  ],

  "4": [
    "Afzalgunj",
    "Koti",
    "YMCA",
    "Shivamutt",
    "Osmania University",
    "Tarnaka",
    "Lalapet",
    "Prashanth Nagar",
    "Moulali",
    "Kushaiguda"
  ],

  "5": [
    "Secunderabad",
    "Patny",
    "Paradise",
    "James Street",
    "Ranigunj",
    "DBR Mills",
    "Tank Bund",
    "Secretariat",
    "Birla Mandir",
    "Lakdikapul",
    "Mahaveer Hospital",
    "Golconda Hotel",
    "NMDC",
    "Sankara Eye Hospital",
    "Mehdipatnam"
  ],

  "5B": [
    "Bapu Ghat",
    "Lower Tank Bund",
    "Mehdipatnam",
    "Sankara Eye Hospital",
    "NMDC",
    "Golconda Hotel",
    "Lakdikapul",
    "Secretariat",
    "NTR Gardens"
  ],
  
  "5C": [
    "Secunderabad",
    "Patny",
    "Paradise",
    "James Street",
    "Ranigunj",
    "DBR Mills",
    "Tank Bund",
    "Secretariat",
    "Birla Mandir",
    "Lakdikapul",
    "Mahaveer Hospital",
    "Golconda Hotel",
    "NMDC",
    "Sankara Eye Hospital",
    "Mehdipatnam",
    "Tolichowki"
  ],

  "5GP": [
    "GPRA Quarters",
    "Tolichowki",
    "Mehdipatnam",
    "NMDC",
    "Golconda Hotel",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Bata",
    "Secunderabad"
  ],

  "5K": [
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],

  "5B/K": [
    "Bapu Ghat",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Rashtrapati Road",
    "Sangeet",
    "Secunderabad"
  ],

  "5BL": [
    "Bapu Ghat",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Patny",
    "Sangeet",
    "Secunderabad"
  ],

  "5L": [
    "Secunderabad",
    "Paradise",
    "Ranigunj",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam",
    "Langar Houz"
  ],

  "5M": [
    "Secunderabad",
    "Bata",
    "Tank Bund",
    "Secretariat",
    "Masab Tank",
    "Vijaya Nagar Colony",
    "Mallepally",
    "Mehdipatnam"
  ],

  "5M/D": [
    "Secunderabad",
    "Bata",
    "Lakdikapul",
    "Masab Tank",
    "Vijaya Nagar Colony",
    "Mehdipatnam",
    "Motidarwaja"
  ],

  "5P": [
    "Puttalaguda",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],

  "5P/K": [
    "Puttalaguda",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],

  "5R": [
    "Risala Bazar",
    "Bolarum",
    "Lalbazaar",
    "JBS",
    "Bata",
    "Boats Club",
    "Tank Bund",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam",
    "Langar Houz"
  ],

  "5S": [
    "Sainikpuri",
    "Neredmet",
    "Safilguda",
    "Ranigunj",
    "Tank Bund",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam"
  ],

  "5SD": [
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],  
  "67": [
    "Charminar",
    "Bela",
    "Uppuguda Colony",
    "Uppuguda"
  ],

  "67B": [
    "Charminar",
    "Bela",
    "Pool Bagh",
    "Uppuguda"
  ],

  "67K": [
    "Charminar",
    "Uppuguda",
    "Kandhikal Gate",
    "Nalla-Vaghu",
    "Keshavagiri Cross Road",
    "Keshavagiri"
  ],

  "67L": [
    "Secunderabad",
    "Narayanguda",
    "Koti",
    "IBS",
    "Moulali",
    "Bela",
    "Sudha",
    "Gowli Pura",
    "Lalitha Bagh"
  ],

  "70": [
    "Charminar",
    "Kilvath",
    "Dood Bowli",
    "Mishri Gunj",
    "Shama",
    "Nawab Shabkerta",
    "Thigalkunta"
  ],

  "70A": [
    "Charminar",
    "Fathe Darwaja",
    "Shama Cross Road",
    "Kalapathar",
    "Tank Bund",
    "Hasannagar Cross Road",
    "Hasan Nagar",
    "Indira Nagar"
  ],

  "70/65": [
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Narayanguda",
    "Afzalgunj",
    "Charminar",
    "Kilvath",
    "Dood Bowli",
    "Mishri Gunj",
    "Shama",
    "Nawab",
    "Shabkerta",
    "Thigalkunta"
  ],

  "70B": [
    "Maruthingr",
    "Dilsukhnagar",
    "Kamal",
    "Darulshifa",
    "Fathe Darwaja",
    "Charminar",
    "Hasan Nagar",
    "Indira Nagar"
  ],

  "70M": [
    "Charminar",
    "Fathe Darwaja",
    "Shama Cross Road",
    "Kalapathar",
    "Tank Bund",
    "Hasannagar Cross Road",
    "Indira Nagar",
    "Mustafa Nagar"
  ],

  "70N": [
    "Nagole",
    "Dilsukhnagar",
    "Malakpet",
    "Darulshifa",
    "Charminar",
    "Inoranagar"
  ],

  "71": [
    "Uppal",
    "Ramanthapur",
    "Amberpet",
    "Chaderghat",
    "Kamal",
    "Darulshifa",
    "Charminar"
  ],

  "71A": [
    "Uppal",
    "Ramanthapur",
    "Amberpet",
    "Chaderghat",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "71B": [
    "Boduppal",
    "Uppal",
    "Ramanthapur",
    "Amberpet",
    "Chaderghat",
    "Chaman",
    "Koti",
    "Afzalgunj",
    "Charminar"
  ],

  "71D": [
    "Uppal",
    "Ramanthapur",
    "Amberpet",
    "Siripuram Colony",
    "Moosaram Bagh",
    "Dilsukhnagar"
  ],

  "71Z": [
    "Zoo Park",
    "Bahadurpura",
    "Puranapool",
    "City College",
    "S. Museum",
    "IBS",
    "Chaderghat",
    "Golnaka Cross Road",
    "Amberpet",
    "Ramanthapur",
    "Uppal"
  ],
  "72": [
    "Charminar",
    "Salar Jung Museum",
    "Chaderghat",
    "Nallakunta Cross Road",
    "Malakpet",
    "Dilsukhnagar"
  ],
  "72A": [
    "Charminar",
    "Darulshifa",
    "Nallakunta Cross Road",
    "Dilsukhnagar",
    "Kothapet",
    "RK Puram",
    "Alkapur"
  ],
  "72B": [
    "Dilsukhnagar",
    "Malakpet",
    "Nallakunta Cross Road",
    "Chaderghat",
    "Darulshifa",
    "Charminar",
    "Laldharwaja",
    "Chandrayangutta",
    "Balapur"
  ],
  "72J": [
    "Jaipur Colony",
    "Bandlaguda",
    "Nagole",
    "Mohan Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "IBS",
    "Afzalgunj",
    "Madina",
    "Charminar"
  ],

  "72J/Y": [
    "LB Nagar",
    "RK Puram",
    "Kothapet",
    "Chaitanyapuri",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Afzalgunj",
    "Zummarath Bazar",
    "Jiyaguda"
  ],

  "72L": [
    "LB Nagar",
    "Kathapet",
    "Chaitanyapuri",
    "Dilsukhnagar",
    "Malakpet",
    "Darulshifa",
    "Madina",
    "Charminar"
  ],

  "72UC": [
    "Central Bank Colony",
    "LB Nagar",
    "Kothapet",
    "Chaitanyapuri",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "IBS",
    "Charminar"
  ],

  "72M": [
    "F. M. Railway Station",
    "Charminar",
    "Salar Jung Museum",
    "Chaderghat",
    "Malakpet",
    "Nallakunta Cross Road",
    "Dilsukhnagar",
    "Chaitanyapuri Cross Road",
    "Maruti Nagar",
    "New Maruthi Nagar"
  ],

  "72N": [
    "Charminar",
    "Madina",
    "Darulshifa",
    "Chaderghat",
    "Nallakunta Cross Road",
    "Malakpet",
    "Charminar Puri",
    "V.V. Nagar"
  ],

  "72R/8A": [
    "Secunderabad",
    "Bata",
    "Boats Club",
    "Tank Bund",
    "Secretariat",
    "AG Office",
    "Narayanguda",
    "Osmangunj",
    "Laldharwaj",
    "Rajannabhai"
  ],

  "72V": [
    "NGO’s Colony",
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Darulshifa",
    "Madina",
    "Charminar"
  ],

  "73": [
    "Chandulal Bharadari",
    "Dood Bowli",
    "Paradiwada",
    "Puranapool",
    "City College",
    "Afzalgunj",
    "Zoo Park",
    "RJN Road"
  ],

  "74": [
    "Koti",
    "Afzalgunj",
    "Putlibowli",
    "Bahadurpura Cross Road",
    "Zoo Park",
    "Indira Nagar"
  ],
  "75A": [
    "Charminar",
    "Laldharwaja",
    "Chatur Naka",
    "Uppuguda Gate",
    "Arundhathi Colony"
  ],
  "75R": [
    "Koti",
    "Narayanguda",
    "G. Bhavan",
    "MJ Market",
    "Osmangunj",
    "Afzalgunj",
    "Charminar",
    "Laldharwaja",
    "Rajanna Bavi"
  ],
  "75U": [
    "Charminar",
    "Laldharwaja",
    "Chatur Naka",
    "Uppuguda"
  ],

  "77": [
    "Charminar",
    "Guldharwaja",
    "Suresh Talkies",
    "Bade Bazar",
    "Yakathpura",
    "Bagh-e-Jahar"
  ],
  "77/82": [
    "Charminar",
    "Guldharwaja",
    "Suresh Talkies",
    "Bade Bazar",
    "Yakuthpura"
  ],
  "78": [
    "Charminar",
    "Darulshifa",
    "Jail Garden",
    "Press",
    "Saidabad Colony",
    "Snakes War Bazar",
    "Saroor Nagar",
    "LB Nagar"
  ],
  "78B": [
    "Bairamalguda",
    "Saibad",
    "Nallakunta Cross Road",
    "Darulshifa",
    "Charminar"
  ],
  "78S": [
    "Charminar",
    "Darulshifa",
    "Nallakunta Cross Road",
    "Saidabad Sagar Complex"
  ],

  "78V": [
    "Bach-e-Jahar",
    "Yakuthpura",
    "Talabkhata",
    "Charminar",
    "NGO's Colony",
    "Bairamalguda",
    "Karmanghat",
    "Gaddiannaram",
    "Bank Colony",
    "Chanchalguda",
    "Charminar"
  ],
  "78H": [
    "High Court",
    "Darulshifa",
    "Chanchalguda",
    "Bank Colony",
    "Caddiannaram",
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "Darulshifa",
    "Afzalgunj",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Golconda Fort"
  ],

  "801": [
    "IBS",
    "Afzalgunj",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Golconda Fort"
  ],

  "80K": [
    "Afzalgunj",
    "Chudi Bazar",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Narsingi",
    "Kokapet",
    "SOLA",
    "Chudi Bazar",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "SOLA",
    "Afzalgunj",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Puttal Guda"
  ],

  "80R": [
    "Afzalgunj",
    "Chudi Bazar",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Golconda Fort",
    "Suresh Talkies",
    "Bade Bazar",
    "Yakuthpura"
  ],
  "80": [
    "Afzalgunj",
    "Puranapool",
    "Karvan",
    "Langar Houz",
    "Golconda",
    "Q.Q. Toombs",
    "Shaikpet"
  ],

  "81": [
    "Charminar",
    "Talabkatta",
    "Bhavani Nagar",
    "Riyasath Nagar",
    "MID Cross Road",
    "Baba Nagar",
    "Habeeeb Nagar"
  ],

  "81H": [
    "Charminar",
    "Talabkhata",
    "Bhavani Nagar",
    "Risath Nagar",
    "MID Cross Road",
    "Baba Nagar"
  ],

  "81R": [
    "Charminar",
    "Aliabad",
    "Railway Bridge",
    "Fathima Nagar",
    "Baba Nagar",
    "Santhosh Nagar"
  ],

  "82": [
    "Charminar",
    "Talabkhata",
    "Yakuthpura",
    "Bagh-e-Jahar"
  ],

  "82/77": [
    "Charminar",
    "Talabkhata",
    "Yakuthpura",
    "Bagh-e-Jahar",
    "Yakuthpura",
    "Bade Bazar",
    "Suresh Talkies",
    "Guldarwaja",
    "Charminar"
  ],

  "83B": [
    "Kachiguda",
    "YMCA",
    "Hyderguda",
    "Liberty",
    "Secretariat",
    "Kachiguda Bad",
    "Panjagutta",
    "Amberpet",
    "ESI",
    "SR Nagar",
    "Egadda",
    "Balanagar"
  ],

  "83G": [
    "Kachiguda",
    "YMCA",
    "Hyderguda",
    "Liberty",
    "Secretariat",
    "Kachiguda Bad",
    "Panjagutta",
    "Amberpet",
    "ESI",
    "SR Nagar",
    "Egadda",
    "Balanagar",
    "IDPL",
    "Jagargogirigutta"
  ],

  "83K": [
    "Kachiguda",
    "YMCA",
    "Hyderguda",
    "Liberty",
    "Secretariat",
    "Kachiguda Bad",
    "Panjagutta",
    "Amberpet",
    "ESI",
    "SR Nagar",
    "Egadda",
    "Moosapet",
    "KP",
    "KPH B"
  ],

  "83P": [
    "Kachiguda",
    "YMCA",
    "Old MLA Quarters",
    "Basheerbagh",
    "Secretariat",
    "Lakdikapul",
    "Amberpet",
    "Green Lands",
    "Balkampet",
    "Paradise"
  ],

  "83S": [
    "Kachiguda",
    "YMCA",
    "Old MLA Quarters",
    "Basheerbagh",
    "Secretariat",
    "Lakdikapul",
    "Amberpet",
    "Egadda",
    "Sanath Nagar",
    "Balanagar",
    "Shapur",
    "JDM"
  ],

  "84": [
    "Saroor Nagar",
    "Court Office",
    "Chaitanya Puri Cross Road",
    "Dilsukhnagar",
    "Koti",
    "Narayanguda",
    "Lakdikapul",
    "Amberpet",
    "Egadda",
    "Sanath Nagar"
  ],

  "5S/K": [
    "Shaikpet",
    "Golconda",
    "Langar Houz",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Tank Bund",
    "Sangeet",
    "Secunderabad"
  ],

  "5T": [
    "Risala Bazar",
    "Bolarum",
    "Alwal",
    "Lalbazaar",
    "Kharkhana",
    "JBS",
    "Bata",
    "Boats Club",
    "Tank Bund",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam",
    "Nallakunta",
    "Talla Gadda"
  ],

  "6": [
    "VST",
    "Nallakunta",
    "Korantee",
    "BKP",
    "Narayanguda",
    "Himayathnagar",
    "Post Office",
    "Liberty",
    "Secretariat",
    "Birla Mandir",
    "Lakdikapul",
    "JNTU",
    "Masab Tank",
    "NMDC",
    "Sankara Eye Hospital",
    "Mehdipatnam",
    "Langar Houz",
    "Toli Chowki"
  ],

  "6C": [
    "VST",
    "Shivamutt",
    "Fever Hospital",
    "Narayanguda",
    "Liberty",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "NMDC",
    "Mehdipatnam",
    "Gachibowli"
  ],

  "6H": [
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Liberty",
    "Narayanguda",
    "BKP",
    "Vidyanagar",
    "Osmania University",
    "Tarnaka",
    "Lalapet",
    "Railway Quarters",
    "HB Colony"
  ],

  "6J": [
    "VST",
    "BKP",
    "Narayanguda",
    "Liberty",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Jubilee Hills"
  ],

  "6K": [
    "Kushaiguda",
    "HB Colony",
    "Mallapur",
    "Nacharam",
    "Habsiguda",
    "Tarnaka",
    "Osmania University",
    "Shivamutt",
    "Narayanguda",
    "Basheerbagh",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam"
  ],

  "6S": [
    "Secunderabad",
    "Chilakalaguda",
    "Sitaphalmandi",
    "Warasiguda",
    "J. Osmania",
    "Ramnagar",
    "Baghlingampally",
    "Narayanguda",
    "Liberty",
    "Secretariat",
    "Lakdikapul",
    "Masab Tank",
    "Mehdipatnam",
    "Langar Houz"
  ],

  "6M": [
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Liberty",
    "Narayanguda",
    "BKP",
    "Vidyanagar",
    "Osmania University",
    "Tarnaka",
    "Lalapet",
    "Railway Quarters"
  ],

  "6T": [
    "Tallagadda",
    "Mehdipatnam",
    "Masab Tank",
    "Lakdikapul",
    "Secretariat",
    "Narayanguda",
    "Baghlingampally",
    "VST"
  ],

  "7C": [
    "Secunderabad",
    "Patny",
    "Paradise",
    "James Street",
    "Ranigunj",
    "DBR Mills",
    "Tank Bund",
    "Liberty",
    "Basheerbagh",
    "Nizam College",
    "Abids",
    "Bank Street",
    "Koti",
    "IBS",
    "Afzalgunj"
  ],
  "7I": [
    "Secunderabad",
    "Paradise",
    "Ranigunj",
    "Tank Bund",
    "Liberty",
    "Abids",
    "Koti",
    "MGBS"
  ],

  "7M": [
    "MGBS",
    "Koti",
    "Abids",
    "Basheerbagh",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],

  "7V": [
    "Venkatapuram",
    "Alwal",
    "Lalbazaar",
    "JBS",
    "Patny",
    "Paradise",
    "Ranigunj",
    "Tank Bund",
    "Liberty",
    "Basheerbagh",
    "Abids",
    "Koti"
  ],


  "8A": [
    "Secunderabad",
    "Patny",
    "Bata",
    "Boats Club",
    "DBR Mills",
    "Tank Bund",
    "Liberty",
    "Abids",
    "Ramakrishna",
    "Osmangunj",
    "Afzalgunj",
    "Charminar",
    "Kesavagiri"
  ],

  "8C": [
    "Charminar",
    "Osmangunj",
    "Narayanguda",
    "Secretariat",
    "Boats Club",
    "Bata",
    "Sangeeth",
    "Secunderabad"
  ],

  "8D/B": [
    "Dood Bowli",
    "Charminar",
    "Afzalgunj",
    "G. Bhavan",
    "Narayanguda",
    "Birla Mandir",
    "Secretariat",
    "Tank Bund",
    "Ranigunj",
    "Paradise",
    "Sangeet",
    "Secunderabad"
  ],

  "8M": [
    "Secunderabad",
    "Bata",
    "Boats Club",
    "Tank Bund",
    "Ramakrishna",
    "MJ Market",
    "Madina",
    "Charminar"
  ],

  "8M/251": [
    "Shamshabad",
    "Sithamrai",
    "Gaganpahad",
    "Shivaram Pally",
    "Bahadurpura",
    "Madina",
    "MJ Market",
    "Liberty",
    "Tank Bund",
    "Boats Club",
    "Bata",
    "Secunderabad"
  ],

  "8R": [
    "Risala Bazar",
    "Bolarum",
    "Alwal",
    "Lothkunta",
    "Lalbazaar",
    "Kharkhana",
    "JBS",
    "Bata",
    "Tank Bund",
    "Secretariat",
    "Assembly",
    "Narayanguda",
    "G. Bhavan",
    "MJ Market",
    "Afzalgunj",
    "Charminar"
  ],

  "8S": [
    "Secunderabad",
    "Bata",
    "Boats Club",
    "Tank Bund",
    "Secretariat",
    "Narayanguda",
    "Sitharam Bagh",
    "Mehdipatnam",
    "Tolichowki"
  ],

  "8R/Z": [
    "Risala Bazar",
    "Bolarum",
    "Alwal",
    "Lothkunta",
    "Lalbazaar",
    "Kharkhana",
    "JBS",
    "Bata",
    "Tank Bund",
    "Secretariat",
    "Assembly",
    "Narayanguda",
    "G. Bhavan",
    "MJ Market",
    "Afzalgunj",
    "Madina",
    "Bahadurpura",
    "Zoo Park"
  ],
  "8U": [
    "Uppuguda",
    "Charminar",
    "Osmangunj",
    "Narayanguda",
    "Secretariat",
    "Tank Bund",
    "Bata",
    "Patny",
    "Sangeet",
    "Secunderabad"
  ],

  "8V": [
    "NGO's Colony",
    "LB Nagar",
    "Dilsukhnagar",
    "Malakpet",
    "Chaderghat",
    "IBS",
    "Afzalgunj",
    "MJ Market",
    "G. Bhavan",
    "Narayanguda",
    "Secretariat",
    "Bata",
    "Secunderabad"
  ],

  "9": [
    "JDM",
    "Shapur",
    "Balanagar",
    "Sanath Nagar",
    "Industrial Estate",
    "Allwyn",
    "Egadda",
    "ESI",
    "SR Nagar",
    "Ameerpet",
    "Panjagutta",
    "Somajiguda",
    "Kachiguda Bad",
    "Lakdikapul",
    "Abids",
    "Koti",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "9A": [
    "Sri Ram Nagar",
    "Bala Nagar",
    "Moosapet",
    "Erragadda",
    "ESI",
    "Ameerpet",
    "Panjagutta",
    "Lakdikapul",
    "Abids",
    "Koti",
    "CBS"
  ],

  "9B": [
    "Sanath Nagar",
    "Balkampet",
    "SR Nagar",
    "Amberpet",
    "Kachiguda Bad",
    "Nizam College",
    "Abids",
    "Koti",
    "IBS",
    "Charminar"
  ],

  "9C": [
    "Yousufguda",
    "Krishna Nagar",
    "Sri Nagar Colony",
    "Kachiguda Bad",
    "Assembly",
    "Narayanguda",
    "MJ Market",
    "MGBS"
  ],

  "9E": [
    "Subash Nagar",
    "Shapur",
    "Chintal",
    "Balanagar",
    "Sanath Nagar",
    "Balkampet",
    "Amberpet",
    "Kachiguda Bad",
    "Narayanguda",
    "MJ Market",
    "Afzalgunj",
    "Charminar"
  ],

  "9F": [
    "Tulasinagar",
    "Borabanda",
    "Pandurangnagar",
    "Egadda",
    "SR Nagar",
    "Amberpet",
    "Panjagutta",
    "Kachiguda Bad",
    "Assembly",
    "Narayanguda"
  ],

  "9F/E": [
    "Borabanda",
    "Bharathnagar Railway Station",
    "Egadda",
    "ESI"
  ],

  "9G": [
    "Rajiv Nagar",
    "GTS Colony",
    "SR Nagar",
    "Amberpet",
    "Panjagutta",
    "Kachiguda Bad",
    "Narayanguda",
    "MJ Market",
    "Afzalgunj"
  ],

  "9J": [
    "Koti",
    "Abids",
    "Narayanguda",
    "Lakdikapul",
    "Erramanjil",
    "Panjagutta",
    "Checkpost",
    "Jubilee Hills",
    "Padmalaya Studios",
    "Kondapur"
  ],
  "9J/84S": [
    "Peddammaguddi",
    "B. Hills",
    "R. Gutta",
    "Kachiguda Bad",
    "Lakdikapul",
    "Koti",
    "Malakpet",
    "Dilsukhnagar",
    "Gabbidannaram",
    "Saroor Nagar"
  ],

  "9K": [
    "JDM",
    "Shapur Nagar",
    "Balanagar",
    "Moosapet",
    "Egadda",
    "Amberpet",
    "Kachiguda Bad",
    "Nizam College",
    "Koti",
    "IBS",
    "Afzalgunj",
    "Charminar"
  ],

  "9K/102": [
    "Lab Quarters",
    "IS Sadan",
    "Saidabad",
    "Malakpet",
    "Chaderghat",
    "Amberpet",
    "Egadda",
    "Moosapet",
    "Balanagar",
    "Chintal"
  ],

  "9K/227": [
    "Charminar",
    "Afzalgunj",
    "G. Bhavan",
    "Narayanguda",
    "Kachiguda Bad",
    "Panjagutta",
    "Ameerpet",
    "SR Nagar",
    "Erragadda",
    "Moosapet",
    "Balanagar",
    "HMT",
    "Shapur",
    "Suraram Colony",
    "Bahadoorpally"
  ],

  "9M": [
    "Charminar",
    "Afzalgunj",
    "G. Bhavan",
    "Narayanguda",
    "Kachiguda Bad",
    "R. Gutta",
    "Amberpet",
    "SR Nagar",
    "Egadda",
    "Sanath Nagar"
  ],

  "9M/L": [
    "Charminar",
    "Afzalgunj",
    "Nampally",
    "Lakdikapul",
    "Khairatha Bad",
    "Panjagutta",
    "Ameerpet",
    "SR Nagar",
    "ESI",
    "Erra Gadda",
    "Balanagar",
    "HAL Colony"
  ],

  "9N": [
    "Charminar",
    "Afzalgunj",
    "Narayanguda",
    "Lakdikapul",
    "Kachiguda Bad",
    "Panjagutta",
    "Amberpet",
    "Udaynagar"
  ],

  "9D": [
    "Jeedimetla",
    "Shapoor Nagar",
    "Chintal",
    "Balanagar",
    "Sanath Nagar",
    "Egadda",
    "Ameerpet",
    "Kachiguda Bad",
    "Nampally",
    "MJ Market",
    "Afzalgunj",
    "Charminar",
    "Amberpet",
    "SR Nagar",
    "Udaynagar",
    "Keshavagiri"
  ],

  "9/10": [
    "Charminar",
    "Afzalgunj",
    "Osmangunj",
    "Assembly",
    "Lakdikapul",
    "Kachiguda Bad",
    "Panjagutta",
    "Green Lands",
    "Prakash Nagar",
    "Airport"
  ],

  "9Q": [
    "Quthbullapur",
    "Chintal",
    "Balanagar",
    "Sanath Nagar",
    "Egadda",
    "Amberpet",
    "Narayanguda",
    "Koti",
    "Charminar"
  ],

  "9R": [
    "A.G. Colony",
    "ESI",
    "SR Nagar",
    "Amberpet",
    "Panjagutta",
    "Kachiguda Bad",
    "MJ Market",
    "Charminar"
  ],

  "9V": [
    "Venkatagiri",
    "Indira Nagar",
    "Sri Nagar Colony",
    "Panjagutta",
    "Kachiguda Bad",
    "Lakdikapul",
    "Abids",
    "Koti"
  ],
  
  "187L": [
    "Koti",
    "Abids",
    "Nampally",
    "Lakdikapul",
    "Panjagutta",
    "Ameerpet",
    "Erragadda",
    "Kukatpally",
    "KPHB Phase 4 LIG"
  ],

  "187P": [
    "Pragathi Nagar",
    "Kukatpally",
    "Erragadda",
    "ESI Hospital"
  ],

  "187S": [
    "KPHB",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Secretariat",
    "Koti"
  ],

  "187Z": [
    "KPHB",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Secretariat",
    "Koti",
    "Afzalgunj",
    "Bahadurpura",
    "Zoo Park"
  ],

  "188": [
    "Mehdipatnam",
    "Langar Houz",
    "Hidharsha Court",
    "Bandlaguda",
    "Sharadadhamam",
    "Kismatpura",
    "Budwel",
    "Rajendranagar"
  ],

  "188H": [
    "Mehdipatnam",
    "Langar Houz",
    "Hidharsha Court",
    "Bandlaguda",
    "Sharadadhamam",
    "Kismatpura",
    "Kalukundarga",
    "LV Prasad",
    "Budwel",
    "Rajendranagar",
    "Himayathsagar"
  ],

  "188S": [
    "Shamshabad",
    "Satharai",
    "Gagan Pahad",
    "Collectorate"
  ],

  "251": [
    "College Cross Road",
    "Rajendranagar",
    "Budwel",
    "Kismatpura",
    "Sharadadhamam",
    "Bandlaguda",
    "Hidharsha Court",
    "Langar Houz",
    "Mehdipatnam"
  ],

  "189C": [
    "SR Naik Nagar",
    "Jeedimetla",
    "Shapur",
    "Chintal",
    "Balanagar",
    "Fathe Nagar",
    "Sanath Nagar",
    "Balkampet",
    "SR Nagar",
    "Ameerpet",
    "Lakdikapul",
    "Koti",
    "Ibrahimpatnam Bus Stand",
    "Afzalgunj",
    "Charminar"
  ],

  "189E": [
    "VST",
    "Balkampet",
    "Narayanguda",
    "Liberty",
    "Secretariat",
    "Lakdikapul",
    "Kukatpally",
    "Vasanth Nagar"
  ],

  "189F": [
    "Mehdipatnam",
    "Masab Tank",
    "Banjara Hills",
    "Panjagutta",
    "Ameerpet",
    "SR Nagar",
    "Erragadda",
    "Rangareddy Nagar",
    "Boribanda"
  ],

  "189L": [
    "Jagadgirigutta",
    "Balanagar",
    "Ameerpet",
    "Panjagutta",
    "Banjara Hills",
    "Masab Tank",
    "Langar Houz"
  ],

  "189M": [
    "Jeedimetla",
    "Shapur",
    "Chintal",
    "Balanagar",
    "Fathe Nagar",
    "Sanath Nagar",
    "Erragadda",
    "ESI Hospital",
    "Panjagutta"
  ],

  "185N": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally"
  ],

  "185S": [
    "Allwyn Colony",
    "Kukatpally",
    "Moosapet",
    "Allwyn Industrial Estate",
    "Sanath Nagar",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally",
    "Koti"
  ],

  "86B": [
    "Bharath Nagar Colony",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally"
  ],

  "186B": [
    "Bharath Nagar Colony",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally",
    "Afzalgunj"
  ],

  "186M": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally",
    "Afzalgunj"
  ],

  "186L": [
    "KPHB",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Abids",
    "Koti"
  ],

  "187": [
    "KPHB",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Koti"
  ],

  "187D": [
    "KPHB Colony",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Koti",
    "Malakpet",
    "Dilsukhnagar"
  ],

  "187E": [
    "KPHB Colony",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Koti"
  ],

  "187J-A": [
    "MIG Quarters",
    "JNTU College",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "SR Nagar",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally",
    "Afzalgunj"
  ],

  "187J-B": [
    "Imliban",
    "Koti",
    "Abids",
    "Nampally",
    "Lakdikapul",
    "Khairatabad",
    "Panjagutta",
    "Ameerpet",
    "Erragadda",
    "Kukatpally",
    "KPHB Phase 4 LIG"
  ],

  "187L-EXT": [
    "LB Nagar",
    "Kothapet",
    "Dilsukhnagar",
    "Malakpet",
    "Putlibowli",
    "Abids",
    "Nampally",
    "Khairatabad",
    "Panjagutta",
    "Ameerpet",
    "SR Nagar",
    "Moosapet",
    "Balanagar",
    "Kukatpally",
    "Kukatpally Village Phase 1"
  ],

  "7H": [
    "High Court",
    "Afzalgunj",
    "CBS",
    "Koti",
    "Abids",
    "Nampally",
    "Lakdikapul",
    "Khairatabad",
    "Panjagutta",
    "Ameerpet",
    "Erragadda",
    "Moosapet",
    "Kukatpally",
    "KPHB"
  ],

  "187J-C": [
    "KPHB Phase 4",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "Ameerpet",
    "NIMS",
    "Abids",
    "Koti",
    "MGBS"
  ],

  "187N": [
    "KPHB Colony",
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "SR Nagar",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Nampally"
  ],
  "176B": [
    "Bairamalguda",
    "Saroornagar",
    "Saidabad Colony",
    "Press Colony",
    "Jail Garden",
    "Koti",
    "Nampally"
  ],

  "176S": [
    "Saroornagar",
    "Shakeshwar Bazaar",
    "Bank Colony",
    "Saidabad",
    "Press Colony",
    "Malakpet",
    "Chaderghat",
    "Putlibowli",
    "Abids",
    "Nampally"
  ],

  "178": [
    "Charminar",
    "Aliabad",
    "Vattipally",
    "Katedan"
  ],

  "178R": [
    "Charminar",
    "Aliabad",
    "Engine Bowli",
    "Chandrayangutta",
    "Guttax Road",
    "Bandlaguda",
    "Wadenguda",
    "Mylardevpalli",
    "Premavathipet",
    "Mir Alam Darwaza",
    "Rajendranagar"
  ],

  "178V": [
    "Charminar",
    "Aliabad",
    "Engine Bowli",
    "Babika Chasma",
    "Vattapalli",
    "Katedan"
  ],

  "183": [
    "Koti",
    "Abids",
    "Nampally",
    "Lakdikapul",
    "Khairatabad",
    "Panjagutta",
    "Ameerpet",
    "SR Nagar",
    "Moosapet",
    "Balanagar",
    "Chintal",
    "Shapur",
    "Jeedimetla"
  ],

  "183A": [
    "APU Colony",
    "Jeedimetla",
    "Chintal",
    "Balanagar",
    "Moosapet",
    "Bharat Nagar",
    "Erragadda",
    "ESI Hospital",
    "SR Nagar",
    "Ameerpet"
  ],

  "183F": [
    "Jeedimetla",
    "Chintal",
    "Balanagar",
    "Moosapet",
    "Erragadda",
    "Boribanda"
  ],

  "183H": [
    "APU Colony",
    "Jeedimetla",
    "Shapur",
    "HMT Colony",
    "Balanagar",
    "Sanath Nagar",
    "ESI Hospital"
  ],

  "185": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "SR Nagar",
    "Ameerpet",
    "Panjagutta",
    "Lakdikapul",
    "Khairatabad",
    "Koti"
  ],

  "185C": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Koti",
    "Ibrahimpatnam Bus Stand",
    "Afzalgunj",
    "Charminar"
  ],

  "185D": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Panjagutta",
    "Khairatabad",
    "Koti",
    "Ibrahimpatnam Bus Stand",
    "Afzalgunj"
  ],

  "185G": [
    "Nampally",
    "Lakdikapul",
    "Khairatabad",
    "Panjagutta",
    "Ameerpet",
    "ESI Hospital",
    "Erragadda",
    "Kukatpally",
    "Widia Nagar",
    "Jagadgirigutta"
  ],

  "135M": [
    "Kukatpally",
    "Moosapet",
    "Erragadda",
    "ESI Hospital",
    "Ameerpet",
    "Khairatabad",
    "Nampally",
    "MJ Market",
    "Afzalgunj"
  ],
  "158Y/L": [
  "Karmika Nagar",
  "Panjagutta",
  "Khairatabad",
  "Lakdikapul",
  "Chermas",
  "Womens College",
  "Malakpet",
  "Dilsukhnagar",
  "LB Nagar"
],

"158Y/P": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Yousufguda",
  "Banjara Hills",
  "Checkpost",
  "Peddamma Gudi"
],

"105": [
  "Press Colony",
  "Malakpet",
  "Chaderghat",
  "Putlibowli",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "Erragadda",
  "Sanath Nagar"
],

"158/84": [
  "Sanath Nagar",
  "Erragadda",
  "Ameerpet",
  "Panjagutta",
  "Khairatabad",
  "Lakdikapul",
  "Chermas",
  "Womens College",
  "Chaderghat",
  "Malakpet",
  "Dilsukhnagar",
  "Kothapet",
  "SRR Nagar"
],

"158K/L": [
  "LB Nagar",
  "Kothapet",
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Putlibowli",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Karmika Nagar"
],

"171": [
  "Gajula Ramaram",
  "Shapur Cross Road",
  "Chintal",
  "Balanagar",
  "Bowenpally",
  "Tadbund",
  "Patny",
  "Secunderabad"
],

"171C": [
  "Charminar",
  "MJ Market",
  "Nampally",
  "Panjagutta",
  "Ameerpet",
  "ESI Hospital",
  "Erragadda",
  "Sanath Nagar",
  "Balanagar",
  "Chintal",
  "Shapur Cross Road",
  "Rhodamisri Nagar",
  "Chandragiri Nagar"
],

"171K": [
  "Gajula Ramaram",
  "Balanagar",
  "Sanath Nagar",
  "Erragadda",
  "ESI Hospital",
  "Ameerpet",
  "Panjagutta",
  "Nampally",
  "Abids",
  "Womens College",
  "CBS"
],

"171M": [
  "Charminar",
  "MJ Market",
  "Nampally",
  "Panjagutta",
  "Ameerpet",
  "ESI Hospital",
  "Erragadda",
  "Sanath Nagar",
  "Balanagar",
  "Chintal",
  "Shapur Cross Road",
  "Rhodamisri Nagar",
  "Chandragiri Nagar",
  "Gajula Ramaram"
],

"171S": [
  "Gajula Ramaram",
  "Shapur",
  "IDPL",
  "Balanagar",
  "Sanath Nagar"
],

"176": [
  "Nampally",
  "Abids",
  "Koti",
  "Nalgonda Cross Road",
  "Press Colony",
  "Saidabad",
  "Saroornagar",
  "Bairamalguda"
],
"156H": [
  "LB Nagar",
  "Dilsukhnagar",
  "Moosarambagh",
  "Amberpet",
  "Tilak Nagar",
  "Balkampet",
  "Narayanguda",
  "Himayatnagar",
  "Secretariat",
  "Masab Tank",
  "Mehdipatnam"
],

"156T": [
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Koti",
  "Abids",
  "Nampally",
  "Mehdipatnam",
  "Nanal Nagar",
  "Tallagadda"
],

"158": [
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Koti",
  "Abids",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "ESI Hospital",
  "Sanath Nagar"
],

"158A": [
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Dharushaffa",
  "MJ Market",
  "Nampally",
  "Khairatabad",
  "Ameerpet",
  "Erragadda",
  "Sanath Nagar"
],

"158B": [
  "BN Reddy Colony",
  "LB Nagar",
  "Dilsukhnagar",
  "Malakpet",
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "SR Nagar",
  "ESI Hospital",
  "Sanath Nagar"
],

"158L": [
  "LB Nagar",
  "Chaitanyapuri",
  "Dilsukhnagar",
  "Malakpet",
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "SR Nagar",
  "ESI Hospital",
  "Sanath Nagar"
],

"158F": [
  "Dilsukhnagar",
  "Malakpet",
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "SR Nagar",
  "ESI Hospital",
  "Boribanda"
],

"158R": [
  "Yousufguda",
  "Ameerpet",
  "Panjagutta",
  "Khairatabad",
  "Abids",
  "Ramkoti",
  "Dilsukhnagar"
],

"158M": [
  "Maruthi Nagar",
  "Mohan Nagar",
  "Kothapet",
  "Chaitanyapuri",
  "Dilsukhnagar",
  "Putlibowli",
  "Nampally",
  "Lakdikapul",
  "Erramanzil",
  "Ameerpet",
  "ESI Hospital",
  "Erragadda",
  "Sanath Nagar"
],

"158N": [
  "VV Nagar",
  "Court Office",
  "Chaitanyapuri",
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Koti",
  "Nampally",
  "Erramanzil",
  "Ameerpet",
  "ESI Hospital",
  "Erragadda",
  "Sanath Nagar"
],

"158V-A": [
  "NGO Colony",
  "LB Nagar",
  "Dilsukhnagar",
  "Malakpet",
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Ameerpet",
  "ESI Hospital"
],

"158S": [
  "Saidabad Colony",
  "Press Colony",
  "Jail Garden",
  "Womens College",
  "Nampally",
  "Khairatabad",
  "NIMS",
  "SR Nagar",
  "Erragadda",
  "Sanath Nagar"
],

"158V-B": [
  "Dilsukhnagar",
  "Malakpet",
  "Dharushaffa",
  "MJ Market",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "Yousufguda"
],
"141R": [
  "Nampally",
  "Abids",
  "King Koti",
  "YMCA",
  "Kachiguda",
  "Nimboliadda",
  "Six Number",
  "Amberpet",
  "Ramanthapur"
],

"141V": [
  "VR Nagar",
  "TV Studio",
  "Six Number",
  "Shivaji Nagar",
  "Balkampet",
  "Kachiguda",
  "Abids",
  "Koti"
],

"142K": [
  "Koti",
  "Lakdikapul",
  "Masab Tank",
  "Mehdipatnam",
  "Nanal Nagar",
  "Tolichowki",
  "Tombs",
  "Banjara Darwaja",
  "Golconda Fort"
],

"142NI": [
  "Nampally",
  "Koti",
  "Lakdikapul",
  "Masab Tank",
  "Mehdipatnam",
  "Nanal Nagar",
  "MD Lines",
  "Tolichowki",
  "Tombs",
  "Banjara Darwaja",
  "Golconda Fort"
],

"142S": [
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Mehdipatnam",
  "Tolichowki",
  "Tombs",
  "Shaikpet"
],

"143": [
  "Nampally",
  "Mallepally",
  "Asif Nagar",
  "Mehdipatnam Cross Road",
  "Murad Nagar",
  "Tallagadda"
],

"143A": [
  "Charminar",
  "MJ Market",
  "Nampally",
  "Latha Talkies",
  "Mallepally",
  "Noble Talkies",
  "Zera",
  "Ambedkar Nagar"
],

"143C": [
  "Charminar",
  "Madina",
  "MJ Market",
  "Nampally",
  "Mallepally",
  "Asif Nagar",
  "Salariguda",
  "Murad Nagar",
  "Gudimalkapur",
  "Sardar Nagar",
  "Tallagadda"
],

"143S": [
  "SRR Nagar",
  "Sarada Talkies",
  "Shankeshwar Bazaar",
  "Malakpet",
  "Putlibowli",
  "Nampally"
],

"152": [
  "Dilsukhnagar",
  "Malakpet",
  "Putlibowli",
  "Koti",
  "Abids",
  "Nampally"
],

"152A": [
  "Janapriya Colony",
  "Dilsukhnagar",
  "Malakpet",
  "Dharushaffa",
  "Afzalgunj",
  "MJ Market",
  "Gandhi Bhavan",
  "Nampally"
],

"152B": [
  "BN Reddy Colony",
  "Hastinapuram",
  "LB Nagar",
  "Kothapet",
  "Dilsukhnagar",
  "Moosarambagh",
  "Malakpet",
  "Koti",
  "Abids",
  "Nampally"
],

"152R": [
  "Dilsukhnagar",
  "Malakpet",
  "Nalgonda Cross Road",
  "Ramkoti",
  "Tilak Road",
  "Nampally"
],

"152G": [
  "Nampally",
  "Abids",
  "Womens College",
  "Putlibowli",
  "Malakpet",
  "Dilsukhnagar",
  "Ganeshpuri"
],

"153": [
  "Saidabad Colony",
  "LIC Colony",
  "Saidabad",
  "Press Colony",
  "Malakpet",
  "Chaderghat",
  "Putlibowli",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Mehdipatnam"
],

"153M": [
  "Nandhini Nagar",
  "Santhosh Nagar",
  "Issadan",
  "Saidabad",
  "Press Colony",
  "Malakpet",
  "Chaderghat",
  "Putlibowli",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Mehdipatnam"
],

"156": [
  "Dilsukhnagar",
  "Malakpet",
  "Nalgonda Cross Road",
  "Chaderghat",
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Mehdipatnam"
],

"156B": [
  "BN Reddy Colony",
  "LB Nagar",
  "Kothapet",
  "Chaitanyapuri",
  "Dilsukhnagar",
  "Moosarambagh",
  "Malakpet",
  "Chaderghat",
  "Womens College",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "JNTU",
  "Masab Tank",
  "NMDC",
  "Mehdipatnam"
],

"56G": [
  "Mehdipatnam",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Abids",
  "Womens College",
  "Chaderghat",
  "Malakpet",
  "Dilsukhnagar",
  "Fruit Market",
  "Mohan Nagar",
  "New Nagole",
  "GSI"
],

"1156": [
  "Mehdipatnam",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Abids"
],

"100G": [
  "Womens College",
  "Chaderghat",
  "Malakpet",
  "Dilsukhnagar",
  "Fruit Market",
  "Mohan Nagar",
  "Nagole",
  "GSI"
],

"156A": [
  "Mehdipatnam",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Abids"
],

"299": [
  "Womens College",
  "Chaderghat",
  "Malakpet",
  "Dilsukhnagar",
  "Fruit Market",
  "Kothapet",
  "LB Nagar",
  "Panama",
  "Sushma",
  "Auto Nagar",
  "Hayathnagar"
],

"156K": [
  "Tolichowki",
  "Mehdipatnam",
  "Masab Tank",
  "Lakdikapul",
  "Chermas",
  "Womens College",
  "Malakpet",
  "Dilsukhnagar"
],

"156L": [
  "Mehdipatnam",
  "Masab Tank",
  "Lakdikapul",
  "Chermas",
  "Womens College",
  "Malakpet",
  "Dilsukhnagar",
  "Kothapet",
  "LB Nagar"
],

"156P": [
  "Saroornagar",
  "Venkateshwar Colony",
  "Netaji Nagar",
  "Kothapet Cross Road",
  "Dilsukhnagar",
  "Malakpet",
  "Putlibowli",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Eye Hospital",
  "Mehdipatnam"
],

"156V": [
  "NGO Colony",
  "LB Nagar",
  "Dilsukhnagar",
  "Malakpet",
  "Chaderghat",
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Panjagutta",
  "Ameerpet",
  "ESI Hospital"
],
"127WI": [
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Road No 12 Banjara Hills",
  "MLA Colony"
],

"127N": [
  "Womens College",
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Nandhi Nagar"
],

"127P": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Peddamma Gudi"
],

"127S": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Checkpost",
  "Madhapur",
  "Cyber Towers",
  "Shilparamam"
],

"127T": [
  "Koti",
  "Abids",
  "Nampally",
  "Masab Tank",
  "NBT Nagar"
],

"127V": [
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Venkatagiri"
],

"127Y": [
  "Dilsukhnagar",
  "Malakpet",
  "Nalgonda Cross Road",
  "Chaderghat",
  "Koti",
  "Nampally",
  "Khairatabad",
  "NIMS",
  "Ameerpet",
  "Yousufguda"
],

"127Z": [
  "Koti",
  "Abids",
  "Nampally",
  "Masab Tank",
  "Zaheer Nagar",
  "IAS Colony",
  "Peddamma Gudi"
],

"127J/B": [
  "JB Blocks",
  "Issadan",
  "Saidabad Colony",
  "LIC Colony",
  "New Malakpet",
  "Nalgonda Cross Road",
  "Malakpet",
  "Chaderghat",
  "Putlibowli",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Checkpost",
  "Jubilee Hills"
],

"131": [
  "Saidabad Colony",
  "Press Colony",
  "Jail Garden",
  "Womens College",
  "Chikkadpally",
  "RTC Cross Road",
  "Musheerabad",
  "Bhoiguda",
  "Secunderabad"
],

"131K-A": [
  "Karanbagh",
  "SBH Colony",
  "Womens College",
  "YMCA",
  "RTC Cross Road",
  "Musheerabad",
  "Secunderabad"
],

"131K-B": [
  "Karmanghat",
  "Saroornagar",
  "Shankeshwar Bazaar",
  "Bank Colony",
  "LIC Colony",
  "Saidabad",
  "Malakpet",
  "Chaderghat",
  "Womens College",
  "YMCA",
  "Narayanguda",
  "RTC Cross Road",
  "Musheerabad",
  "Secunderabad"
],

"131S/29": [
  "HAL",
  "Balanagar",
  "Bowenpally",
  "Patny",
  "Secunderabad",
  "Musheerabad",
  "RTC Cross Road",
  "Narayanguda",
  "YMCA",
  "Womens College",
  "Chaderghat",
  "Malakpet",
  "Press Colony",
  "Saidabad",
  "LIC Colony",
  "State Bank Colony"
],

"131S": [
  "Green Park Colony",
  "Shankeshwar Bazaar",
  "Bank Colony",
  "LIC Colony",
  "Saidabad",
  "Press Colony",
  "Malakpet",
  "Womens College",
  "YMCA",
  "Narayanguda",
  "RTC Cross Road",
  "Musheerabad",
  "Secunderabad"
],

"131G": [
  "Green Park Colony",
  "Shankeshwar Bazaar",
  "Bank Colony",
  "Saidabad",
  "Malakpet",
  "Womens College",
  "YMCA",
  "Narayanguda",
  "Musheerabad",
  "Secunderabad"
],

"135": [
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "Erramanzil Colony"
],

"135A": [
  "Koti",
  "Nampally",
  "Lakdikapul",
  "Khairatabad",
  "ZP Office",
  "Sri Venkata Ramana Colony",
  "Erramanzil"
],

"136": [
  "Nampally",
  "Basheerbagh",
  "Old MLA Quarters",
  "Narayanguda",
  "AY Mandali",
  "Vidyanagar",
  "Osmania University",
  "Tarnaka"
],

"136D": [
  "Nampally",
  "Hyderguda",
  "Balkampet",
  "Fever Hospital",
  "Osmania University",
  "Tarnaka",
  "Moulali",
  "Kushaiguda",
  "Dammaiguda",
  "Balaji Nagar"
],

"136B": [
  "Nampally",
  "Old MLA Quarters",
  "Narayanguda",
  "Vidyanagar",
  "Osmania University",
  "Tarnaka",
  "Habsiguda",
  "NGRI",
  "Kalyanpuri"
],

"136H": [
  "Nampally",
  "Hyderguda",
  "Narayanguda",
  "Balkampet",
  "Fever Hospital",
  "Vidyanagar",
  "Osmania University",
  "Tarnaka",
  "Lalapet",
  "Moulali",
  "Kamalapur",
  "Kushaiguda",
  "ECIL Cross Road"
],

"136N": [
  "Nampally",
  "Hyderguda",
  "Narayanguda",
  "Balkampet",
  "Fever Hospital",
  "Vidyanagar",
  "Osmania University",
  "Tarnaka",
  "Habsiguda",
  "Nacharam Cross Road",
  "Hemanagar"
],

"136L": [
  "Tarnaka",
  "Osmania University",
  "Narayanguda",
  "Old MLA Quarters",
  "Hyderguda",
  "Basheerbagh",
  "AG Office",
  "Assembly",
  "Tallapally"
],

"136S": [
  "Ahobilamutt",
  "P&T Colony",
  "Tilak Nagar",
  "Fever Hospital",
  "AY Mandali",
  "Vidyanagar",
  "Narayanguda",
  "Old MLA Quarters",
  "Abids",
  "Nampally"
],

"136U": [
  "Uppal",
  "HUDA",
  "Tarnaka",
  "Balkampet",
  "Narayanguda",
  "Old MLA Quarters",
  "Basheerbagh",
  "Nampally",
  "Mallepally",
  "VN Colony",
  "NIP"
],

"136V": [
  "Nampally",
  "Hyderguda",
  "Old MLA Quarters",
  "Narayanguda",
  "Vidyanagar",
  "Osmania University",
  "Tarnaka",
  "Habsiguda",
  "Road No 8",
  "Public School",
  "Ramanthapur",
  "VR Nagar"
],

"137": [
  "VST",
  "Fever Hospital",
  "Balkampet",
  "Narayanguda",
  "Old MLA Quarters",
  "Basheerbagh",
  "Abids",
  "Nampally",
  "Aghapura",
  "Beerbanbagh"
],

"137A": [
  "VST",
  "Fever Hospital",
  "Balkampet",
  "Narayanguda",
  "Old MLA Quarters",
  "Basheerbagh",
  "Abids",
  "Nampally",
  "Aghapura",
  "Asif Nagar",
  "Ambedkar Nagar"
],

"137M": [
  "Wipro",
  "Mallepally",
  "Sitarambagh",
  "Nampally",
  "Hyderguda",
  "Old MLA Quarters",
  "Narayanguda",
  "VST"
],

"137S": [
  "Tarnaka",
  "Vidyanagar",
  "RTC Cross Road",
  "Indira Park",
  "Nampally",
  "Aghapura",
  "Asif Nagar",
  "Beerbanbagh"
],

"139": [
  "Secunderabad",
  "West Maredpally",
  "Ram Nagar",
  "VST",
  "Baghlingampally",
  "Narayanguda",
  "Secretariat",
  "Nampally",
  "Mallepally",
  "Vijaya Nagar Colony"
],

"139S": [
  "Secunderabad",
  "Subhash Nagar Mandi",
  "West Maredpally",
  "James Street",
  "Ram Nagar",
  "VST",
  "Baghlingampally",
  "Narayanguda",
  "Secretariat",
  "Nampally",
  "Mallepally",
  "VN Colony"
],

"141": [
  "Uppal",
  "Ramanthapur",
  "Amberpet",
  "Nimboliadda",
  "Kachiguda",
  "YMCA",
  "New Science College",
  "King Koti",
  "Abids",
  "Nampally"
],

"141-R": [
  "Nampally",
  "Nizam College",
  "Abids",
  "Boggulakunta",
  "Ramkoti",
  "Kachiguda",
  "Nimboliadda",
  "Amberpet",
  "Ramanthapur",
  "Uppal"
],

"141G": [
  "Gachibowli",
  "Durgam Cheruvu",
  "Tolichowki",
  "Mehdipatnam",
  "Welfare Centre",
  "VN Colony",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Abids",
  "King Koti",
  "YMCA",
  "Kachiguda",
  "Balkampet",
  "Fever Hospital",
  "Tilak Nagar",
  "Six Cross Road",
  "Sriramana Nagar",
  "Amberpet",
  "Ramanthapur",
  "Uppal"
],

"141M": [
  "Mehdipatnam",
  "Welfare Centre",
  "VN Colony",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Abids",
  "King Koti",
  "YMCA",
  "Kachiguda"
],
"113S": [
  "Uppal",
  "Ramanthapur",
  "Amberpet",
  "Shivam",
  "Vidyanagar",
  "VST",
  "Baghlingampally",
  "Narayanguda",
  "Secretariat",
  "Lakdikapul",
  "Khairatabad",
  "Peddamma Gudi",
  "Ameerpet",
  "ESI",
  "Erragadda",
  "Sanath Nagar"
],

"113V": [
  "Venkat Reddy Nagar",
  "Ramanthapur",
  "Amberpet",
  "Tilak Nagar",
  "Vidyanagar",
  "VST",
  "Aghungampally",
  "Narayanguda",
  "Secretariat",
  "Lakdikapul",
  "Khairatabad",
  "Peddamma Gudi",
  "Ameerpet",
  "Sanath Nagar",
  "ESI"
],

"113X": [
  "Masab Tank",
  "Masab Tank",
  "Lakdikapul",
  "Secretariat",
  "Himayath Nagar",
  "Narayanguda",
  "Fever Hospital",
  "Amberpet",
  "Ramanthapur"
],

"113Y": [
  "Uppal",
  "Ramanthapur",
  "Amberpet",
  "Shivam",
  "Vidyanagar",
  "VST",
  "Ashok Nagar",
  "Indira Park",
  "Secretariat",
  "New Bridge",
  "Khairatabad",
  "Peddamma Gudi",
  "Ameerpet",
  "Yousufguda"
],

"113B/M": [
  "Masab Tank",
  "Lakdikapul",
  "Liberty",
  "Himayath Nagar",
  "Narayanguda",
  "Fever Hospital",
  "Tilak Nagar",
  "Amberpet",
  "Ramanthapur",
  "Uppal",
  "X Road"
],

"113I/N": [
  "Masab Tank",
  "Lakdikapul",
  "Liberty",
  "Himayath Nagar",
  "Narayanguda",
  "Fever Hospital",
  "Tilak Nagar",
  "Amberpet",
  "Ramanthapur"
],

"114": [
  "Noorkhan Bazar",
  "Afzal Gunj",
  "Osmangunj",
  "Nampally",
  "Fatha Maidan"
],

"114D": [
  "Nampally",
  "Gandhi Bhavan",
  "MJ Market",
  "Siddameer Bazar",
  "Afzal Gunj",
  "Darulshifa",
  "Nagabowli"
],

"115": [
  "Uppal",
  "Chaderghat",
  "Ramanthapur",
  "Amberpet",
  "Golconda",
  "Nimboliadda",
  "Chaderghat",
  "Koti"
],

"115B": [
  "Koti",
  "Chaderghat",
  "Golnaka",
  "Six Cross Road",
  "Sriramana",
  "Amberpet",
  "Ramanthapur",
  "Uppal",
  "Boduppal"
],

"115C": [
  "Koti",
  "Chaderghat",
  "Amberpet",
  "Ramanthapur",
  "Rajendra Nagar",
  "Church Colony"
],

"115N": [
  "Uppal",
  "Ramanthapur",
  "Amberpet",
  "Sriramana",
  "Six Cross Road",
  "Golnaka",
  "Chaderghat",
  "Koti",
  "Abids",
  "Nampally"
],

"115R": [
  "RTC Colony",
  "Ramanthapur",
  "Amberpet",
  "Golnaka",
  "Nimboliadda",
  "Chaderghat",
  "Koti"
],

"115R/S": [
  "Ramanthapur",
  "TV Studio",
  "Amberpet Cross Road",
  "Golnaka",
  "Chaderghat",
  "Putlibowli",
  "Koti"
],

"115V": [
  "Koti",
  "Amberpet",
  "TV Studio",
  "Ganesh Nagar",
  "Venkat Reddy Nagar"
],

"115Z": [
  "Uppal",
  "Ramanthapur",
  "Amberpet",
  "Zinda Tilashmath Colony",
  "Patel Nagar"
],

"115/118": [
  "NIP",
  "Masab Tank",
  "Lakdikapul",
  "Nampally",
  "Koti",
  "Chaderghat",
  "Nimboliadda",
  "Amberpet",
  "Ramanthapur",
  "Uppal",
  "X Road"
],

"116": [
  "Koti",
  "Nampally",
  "Mallepally Mask",
  "Masab Tank",
  "Tolichowki",
  "Darga"
],

"116H": [
  "Hakeempet",
  "Masab Tank",
  "Asif Nagar",
  "Mallepally",
  "Bazar Ghat",
  "Nizam College",
  "Abids",
  "Koti"
],

"116N-A": [
  "Koti",
  "Nampally",
  "Ek Minar Masjid",
  "Bogguda",
  "Tolichowki",
  "Darga",
  "Nanak Ramguda"
],

"116N-B": [
  "Nampally",
  "Ek Minar Masjid",
  "Bogguda Khaman",
  "Masab Tank",
  "Tolichowki",
  "Darga",
  "Nanak Ramguda"
],

"116T": [
  "Tallagadda",
  "Muradnagar",
  "Nampally",
  "Bazargat",
  "Nizam College",
  "Abids",
  "Koti"
],

"117": [
  "Kukatpally",
  "ECIL",
  "Mallapur",
  "Nacharam",
  "Chilakanagar",
  "Hemanagar",
  "Uppal"
],

"118": [
  "Masab Tank",
  "Lakdikapul",
  "Assembly",
  "Abids",
  "Koti"
],

"118I": [
  "Tallagadda",
  "Masab Tank",
  "JNTU",
  "Lakdikapul",
  "Assembly",
  "Nizam College",
  "Abids",
  "Koti",
  "MG Bus Station"
],

"118G": [
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Masab Tank",
  "Tolichowki",
  "Darga",
  "Gachibowli"
],

"118M": [
  "MD Lines",
  "Masab Tank",
  "Lakdikapul",
  "Assembly",
  "Abids",
  "Koti"
],

"118T": [
  "Tallagadda",
  "Nanal Nagar",
  "Masab Tank",
  "Lakdikapul",
  "Assembly",
  "Abids",
  "Koti"
],

"118M/T": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Checkpost",
  "Peddamma Gudi",
  "Madhapur",
  "Cyber Towers",
  "Shilparamam",
  "Kondapur"
],

"119": [
  "Nampally",
  "Lakdikapul",
  "JNTU",
  "Masab Tank",
  "Golconda",
  "Golconda Fort"
],

"120": [
  "Masab Tank",
  "Langar Houz",
  "Ibrahim Bagh",
  "Narsingi",
  "Osman Sagar"
],

"120M": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "JNTU",
  "Masab Tank",
  "Nanal Nagar",
  "Langar Houz",
  "Ibrahim Bagh",
  "Narsingi",
  "Osman Sagar"
],

"122": [
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "VN Colony",
  "Mallepally",
  "Nampally",
  "Nizam College",
  "Central Bank",
  "Koti"
],

"122L": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "VN Colony",
  "Masab Tank",
  "Langar Houz"
],

"123": [
  "Masab Tank",
  "Nanal Nagar",
  "Tolichowki",
  "Toombs",
  "Shakpet",
  "Puppalguda",
  "Narsingi"
],

"127": [
  "Dilsukhnagar",
  "Masab Tank",
  "Nalgonda Cross Road",
  "Womens College",
  "Abids",
  "Nampally",
  "Masab Tank",
  "Jubilee Hills",
  "Madhapur"
],

"127D": [
  "B Blocks",
  "Issadan",
  "Saidabad Colony",
  "LIC Colony",
  "New Malakpet",
  "Nalgonda Cross Road",
  "Chaderghat",
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Checkpost",
  "Jubilee Hills"
],

"127F": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Film Nagar"
],

"127J": [
  "CMNR",
  "Afzal Gunj",
  "Osmangunj",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Jubilee Hills"
],

"127K": [
  "Koti",
  "Abids",
  "Nampally",
  "Lakdikapul",
  "Masab Tank",
  "Road No 12",
  "Apollo Hospital",
  "Checkpost",
  "Peddamma Gudi",
  "Madhapur",
  "Cyber Towers",
  "Shilparamam",
  "Kondapur"
],
  "96": ["Womens College","Chaderghat","Malakpet","TV Tower","Dilsukhnagar"],

  "96GA": ["Dilsukhnagar","Siripuram Colony","Nalgonda X Road","Putlibowli","Nampally","Lakdikapul","Ameerpet","ESI Hospital","Erragadda","Sanath Nagar"],

  "96L": ["LB Nagar","Kothapet","Dilsukhnagar","Malakpet","Chaderghat","Womens College"],

  "96N": ["New Nagole","Siripuram Colony","Dilsukhnagar","Malakpet","Nalgonda X Road","Koti"],

  "97A": ["Akbarbagh","Press","Nalgonda X Road","Malakpet","Dilsukhnagar","Kothapet","LB Nagar","Chintalkunta","Panama","Sushma","Vanastalipuram"],

  "97B": ["B Block","Super Bazaar","Womens College","Nampally","Lakdikapul","Masab Tank","Road Number 10","LV Prasad Hospital"],

  "98": ["Masab Tank","Mehdipatnam","Nampally","Abids","Putlibowli","Jail Garden","Kaladera"],

  "98M": ["Narayanguda","RTC X Road","Masab Tank","Secunderabad"],


"99": ["Vanasthalipuram", "LB Nagar", "Dilsukhnagar", "Nalgonda X Road", "Koti", "Kachiguda Station"],
"99V": ["Vanasthalipuram", "LB Nagar", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College"],
"99H": ["High Court", "Darulshifa", "IBS", "Chaderghat", "Malakpet", "Dilsukhnagar", "Kothapet", "LB Nagar", "Chintalkunta", "Panama", "Sushma", "Vanasthalipuram"],
"99K": ["Kachiguda Station", "Chaderghat", "Nalgonda X Road", "Malakpet", "Dilsukhnagar", "Kothapet", "LB Nagar", "Chintalkunta", "Panama", "Sushma", "Vanastalipuram"],
"99M": ["Sahara Estate", "Mansoorabad", "Kamineni Hospital", "LB Nagar", "Dilsukhnagar", "Malakpet", "Koti"],
"100": ["NGO’s Colony", "Panama", "Chintalkunta", "LB Nagar", "Kothapet", "Dilsukhnagar", "Malakpet", "Chaderghat", "IBS", "Darulshifa", "Afzal Gunj", "MJ Market", "Gandhi Bhavan", "Nampally", "AG Office", "Secretariat"],
"100A": ["Alkapuri", "RK Puram", "Kothapet", "Dilsukhnagar", "Womens College", "Abids", "Nampally", "Masab Tank"],
"100C": ["BNR Colony", "Vanastalipuram", "LB Nagar", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College", "Nampally"],
"100H": ["Green Hills Colony", "Dilsukhnagar", "Malakpet", "Nalgonda X Road", "Koti", "Abids", "Nampally"],
"100J": ["Jaipur Colony", "Maruthi Nagar", "Dilsukhnagar", "Malakpet", "Koti", "Abids", "Nampally"],
"100K": ["Nampally", "Abids", "Womens College", "Chaderghat", "Malakpet", "Dilsukhnagar", "SBI Colony"],
"100L": ["Nampally", "Abids", "Womens College", "Chaderghat", "Malakpet", "Dilsukhnagar", "Chaitanyapuri", "LB Nagar"],
"100M": ["Maruthi Nagar", "RK Puram", "Kothapet", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College", "Abids", "Nampally"],
"100N": ["NGO’s Colony", "LB Nagar", "Kothapet", "Dilsukhnagar", "Malakpet", "Koti", "Abids", "Nampally"],
"100R": ["Snehapuri Colony", "RK Puram", "Telephone Colony", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College", "Abids", "Nampally"],
"100H7N": ["Green Hills Colony", "Dilsukhnagar", "Malakpet", "Chaderghat", "Putlibowli", "Abids", "Nampally"],
"100M/R": ["Snehapuri Colony", "RK Puram", "Telephone Colony", "Mohan Nagar", "Fruit Market", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Chaderghat", "Putlibowli", "Abids", "Nampally"],
"100S": ["Sachikvalaya Nagar", "LB Nagar", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College"],
"100T": ["Telephone Colony", "Mohan Nagar", "Fruit Market", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College", "Abids", "Nampally"],
"100V": ["NGO’s Colony", "LB Nagar", "Kothapet", "Dilsukhnagar", "Malakpet", "Chaderghat", "Womens College", "Nampally"],
"100P/": ["Southend Park", "Alkapuri", "RK Puram", "Telephone Colony"],
"100D": ["Dilsukhnagar", "Triveni Nagar", "SB Colony", "Sidabad Colony", "LIC Colony", "Press", "Jail Garden", "Dharulshifa", "MJ Market", "Nampally", "Lakdikapul", "Khairatabad", "Peddamma Gudi", "Ameerpet", "S.Ram Nagar", "ESI"],
"113A": ["Uppal", "Ramanthapur", "Amberpet", "Syndicate Bank", "Shivam", "Vidyanagar", "VST", "Baghlingampally", "Narayanguda", "Himayathnagar", "Liberty", "AG Office", "Lakdikapul", "Khairatabad", "Peddamma Gudi", "Ameerpet", "S.Ram Nagar", "ESI", "AG Colony"],
"113B": ["Beerban Bagh", "Nampally", "Basheerbagh", "Liberty", "Himayathnagar", "Narayanguda", "Baghlingampally", "Ramnagar"],
"113E": ["Uppal Depot", "Uppal", "Ramanthapur", "Amberpet", "Shivam", "VST", "Baghlingampally", "Narayanguda", "Himayathnagar", "AG Office", "Lakdikapul", "Khairatabad", "Peddamma Gudi", "Ameerpet", "S.Ram Nagar", "ESI"],
"113F": ["Borabanda", "S.Ram Nagar", "Ameerpet", "Khairatabad", "Secretariat", "Narayanguda", "Nallakunta", "Shivam", "Amberpet", "Ramanthapur"],
"113K": ["K.P.", "Moosapet", "Erragadda", "ESI", "Ameerpet", "Khairatabad", "Secretariat", "Narayanguda", "Nallakunta", "Shivam", "Amberpet", "Ramanthapur", "Uppal"],
"113M": ["Uppal", "Ramanthapur", "Amberpet", "Tilaknagar", "Fever Hospital", "BKP", "Narayanguda", "Himayathnagar", "Secretariat", "Lakdikapul", "Masab Tank", "Masabpet"],
"84H": ["HUDA Complex", "Dilsukhnagar", "Malakpet", "Koti", "Old MLA Qtrs", "Basheerbagh", "Nampally"],
"84S": ["Saroornagar", "HUDA Complex", "P&T Colony", "Dilsukhnagar", "Malakpet", "Koti", "Nampally", "Lakdikapul", "Ameerpet", "Erragadda", "Sanath Nagar"],
"85": ["CMNR", "Aliabad", "Chandrayangutta", "Barkas", "Vadiavada", "Pahadi Shareef"],
"85B": ["Secunderabad", "Bata", "Tank Bund", "Nampally", "MJ Market", "CMNR", "Siddalipurta", "Aliabad", "Chandrayangutta", "Barkas", "Balapur"],
"85H": ["CMNR", "Aliabad", "Ingeen Bowli", "Chandrayangutta X Road", "DRDO", "Baba Nagar"],
"85J": ["CMNR", "Aliabad", "Chandrayangutta", "Barkas", "Badamori", "Sai Baba Temple", "Jelpally X Road", "Jelpally"],
"85M": ["CMNR", "Aliabad", "Chandrayangutta", "Barkas", "Badamori", "Vadiavada", "Pahadi Shareef", "Mammi Dipally"],
"85V": ["CMNR", "Aliabad", "Chandrayangutta", "Barkas X Road", "Salala", "Kothapet", "Venkatapur"],
"86": ["Secunderabad", "Chintalguda", "Mylargadda", "S Mandi", "Namala Gundur", "Sri Devi Nursing Home", "Warasiguda", "Boudhanagar", "J. Osmania", "Adikmet", "Ram Nagar Gundu", "Community Hall", "Ram Nagar", "VST", "Baghlingampally", "N. Guda", "YMCA", "Blood Bank", "Badichowdi", "Koti", "Afzal Gunj"],
"86C": ["Charminar", "Afzalgunj", "CBS", "Womens College", "YMCA", "Bagh Pally", "VST", "Warasiguda", "Secunderabad"],
"86K": ["Secunderabad", "Chintalguda", "S. Mandi", "Warasiguda", "J. Osmania", "Ram Nagar", "Baghlingampally", "Koti", "IBS", "Afzal Gunj", "CMNR", "Keshavagiri"],
"86H": ["Secunderabad", "Chintalguda", "S. Mandi", "Warasiguda", "J. Osmania", "Ram Nagar", "Baghlingampally", "YMCA", "Koti", "IBS", "Afzal Gunj", "High Court"],
"86I": ["SecBad", "S. Mandi", "Warasiguda", "J. Osmania", "Ram Nagar", "Bagh Pally", "YMCA", "Koti", "IBS"],
"86J": ["Jiyaguda", "Chudibazar", "JBS", "Womens College", "YMCA", "Baghlingampally", "Ram Nagar", "Warasiguda", "S. Mandi", "Chintalguda", "Secunderabad"],
"86N": ["SecBad", "S. Mandi", "Warasiguda", "Ram Nagar", "Baghlingampally", "YMCA", "Koti", "Malakpet", "Dilsukhnagar", "Vivekananda Nagar"],
"86S": ["SecBad", "S. Mandi", "Warasiguda", "J. Osmania", "Ram Nagar", "Baghlingampally", "YMCA", "Womens College", "Chaderghat", "Nalgonda X Road", "Dilsukhnagar", "Chaitanyapuri", "Kothapet", "RK Puram", "Snehapuri"],
"86/49M": ["Tolichowki", "Malakpet", "Banjara Hills", "Panjagutta", "Green Lands", "Balkampet", "Paradise", "Secunderabad", "S. Mandi", "Warasiguda", "J. Osmania"],
"86Y": ["SecBad", "Chintalguda", "S. Mandi", "Warasiguda", "J. Osmania", "Ram Nagar", "Bagh Palli", "YMCA"],
"86/118J": ["Malakpet", "Masab Tank", "Lakdikapul", "Nampally", "Ram Nagar", "Warasiguda", "Secunderabad"],
"87": ["CMNR", "Qilwat", "Hussaini Alum", "Kokathatti", "Putlibowli", "Mangalhat", "Prakash", "Agapura", "Taki Masjid", "Darga", "Latha", "Nampally"],
"87S": ["CMNR", "Qilwat", "Hussaini Alum", "Kokathatti", "Putlibowli", "Mangalhat", "Prakash", "Agapura", "Taki Masjid", "Darga", "Latha", "Nampally", "Secretariat", "Tank Bund", "Patny", "Secunderabad"],
"90A": ["SecBad", "Mettuguda", "Tarnaka", "Habsiguda", "UPL X Road", "Nagole X Road", "Haripuri Colony", "Dilsukhnagar", "Sod Dilsukhnagar", "Chaitanyapuri X Road", "Kothapet", "RK Puram X Road", "Ring Road X Road", "Uppal X Road", "Habsiguda", "Tarnaka", "Secunderabad"],
"90A/107V": ["SecBad", "Tarnaka", "H. Guda", "UPL X Road", "Nagole", "Alkapuri", "Mohan Nagar", "Chaitanyapuri", "Dilsukhnagar", "NCC", "V. Nagar", "J. Osmania", "S. Mudi", "Secunderabad"],
"90D/1D7V": ["SecBad", "Tarnaka", "H. Guda", "UPL X Road", "Nagole", "Alkapuri", "Mohan Nagar", "RK Puram", "Dilsukhnagar", "J. Osmania", "S. Mudi", "Secunderabad"],
"90D/203D": ["Nadargoel", "Meerpet", "Dilsukhnagar", "Kothapet", "Nagole", "UPL X Road", "Habsiguda", "Tarnaka", "Secunderabad", "JBS"],
"90J": ["Jaipuri Colony", "Nagole X Road", "UPL X Road", "Habsiguda", "Tarnaka", "Secunderabad"],
"90K": ["Keshavagiri", "LB Nagar X Road", "Nagole X Road", "UPL X Road", "H. Guda", "Tarnaka", "Secunderabad"],
"90L": ["LB Nagar", "Kamineni", "Alkapuri", "Snehapuri", "Nagole", "Uppal", "Habsiguda", "Tarnaka", "Secunderabad"],
"90M/S": ["Saidabad", "Dilsukhnagar", "Nagole", "UPL X Road", "Survey of India", "NGRI", "H. Guda", "Tarnaka", "Secunderabad"],
"90U": ["UPL", "UPL X Road", "Nagole", "Snehapuri Colony", "RK Puram", "Telephone Colony", "Kothapet", "Dilsukhnagar"],
"90M": ["Dilsukhnagar", "Chaitanyapuri X Road", "Mohan Nagar", "Ring Road X Road", "Uppal X Road", "Habsiguda", "Tarnaka", "Secunderabad"],
"90R": ["RCI", "Dilsukhnagar", "Nagole X Road", "UPL X Road", "Habsiguda", "Tarnaka", "Secunderabad"],
"90V": ["NGO’s Colony", "Panama", "Chintalkunta", "LB Nagar", "Alkapuri", "Nagole", "Uppal", "Ramanthapur", "TV Studio"],
"91I": ["Koti", "YMCA", "Ch. Pally", "RTC X Road", "MSRD", "Kavadiguda", "Bible House", "Bata", "Patny", "W. Marredpally", "Isaq Colony"],
"91D": ["Dilsukhnagar", "Malakpet", "Nimboliadda", "Kakhiguda", "Fever Hospital", "S Mutt X Road", "MSRD", "Kavadiguda", "Bata", "Clock Tower", "Secunderabad"],
"91E": ["Koti", "YMCA", "Ch. Pally", "RTC X Road", "MSRD", "Kavadiguda", "Bible House", "Bata", "Sangeet", "E. Marredpally", "E.N. Nagar"],
"91L": ["LB Nagar", "Kothapet", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Koti", "N. Guda", "MSRD", "Praga", "Kavadiguda", "Bible House", "Bata", "Patny", "W. Marredpally", "Isaq Colony"],
"91M": ["Koti", "YMCA", "Ch. Pally", "RTC X Road", "MSRD", "Kavadiguda", "Bible House", "Bata", "E. M. Pally"],
"92": ["Malakpet", "Langar Houz", "Athapur", "Upperapally", "Rajendranagar"],
"92E/N": ["NIRD", "Upperpalli", "Ring Road", "Jyothi Nagar", "Malakpet", "Banjara Hills", "Panjagutta", "Ameerpet", "ESI", "Sanath Nagar"],
"92ER": ["JNR", "Upperpally", "Ring Road", "Nanalnagar", "Malakpet", "Banjara Hills", "Panjagutta", "Ameerpet", "ESI", "Sanath Nagar"],
"92F": ["Borabanda", "Erragadda", "Panjagutta", "Banjara Hills", "Masab Tank"],
"92H": ["Himayath Sagar", "RJNR", "Chintalmet", "Upperpalli", "Langar Houz", "Nanal Nagar", "Malakpet"],
"92K": ["Katedan", "Upperpalli", "Ring Road", "Jothinopel", "Malakpet", "Banjara Hills", "Panjagutta", "Ameerpet", "ESI", "Sanath Nagar"],
"92K/": ["Sanath Nagar", "Erragadda", "Panjagutta", "Banjara Hills"],
"95": ["Masab Tank", "Malakpet", "Langar Houz", "Athapur", "Upperapally", "RJNR", "Bahadurpura", "Zoo Park", "Shivaram Pally", "Katedhan", "Madhuban Colony"],
"92S": ["RJNR", "Upperpally", "Langar Houz", "Malakpet", "Masab Tank", "Lakdikapul", "Secretariat", "Tank Bund", "Bata", "Secunderabad"],
"93A": ["Vijayapuri Colony", "Kharmanghat", "Is Sadan", "Nalgonda X Road", "Koti", "Abids", "Nampally"],
"93P": ["Bairamalguda", "Kharmanghat", "Is Sada", "Nalgonda X Road", "Koti", "Secunderabad"],
"92M": ["RJNR", "Upperpally", "Langar Houz", "Malakpet"],
"93B": ["B.N. Reddy Nagar", "Kharmanghat", "Is Sada", "Nalgonda X Road/Koti", "Abids", "Nampally"],
"93V": ["NGO’s Colony", "BNR Colony", "Sidabad", "Press", "Chaderghat", "Womens College"],
"94": ["AG College", "Sivaram Pally", "Zoo Park", "Bahudur Pura", "Putlibowli", "Madina", "Dharulshifa", "Nalgonda X Road", "Dilsukhnagar"],
"94A": ["AG College", "Tank Bund", "Zoo", "Bahudur Pura", "Putlibowli", "Afzal Gunj", "Koti"],
"94C": ["RJNR", "Kishanbagh", "Bahadurpura", "Madina", "CMNR"],
"94/1F": ["Borabanda", "Karmika Nagar", "Rahmath Nagar", "Erragadda", "ESI", "S.Ram Nagar", "Ameerpet", "Panjagutta", "K. Bad", "Nampally", "M. Market", "CMNR"],
"94D": ["Dilsukhnagar", "Malakpet", "Nalgonda X Road", "Dharulshifa", "Putlibowli", "Bahadurpura", "Kishanbagh", "V.T. College", "RJNR", "Himayath Sagar"],
"94H": ["Koti", "Afzal Gunj", "Putlibowli", "Bahadurpura", "Kishanbagh", "Pahadi", "V.T. College", "RJNR", "Himayath Sagar"],
"94K": ["Koti", "Afzal Gunj", "Putlibowli", "Bahadurpura", "Kishanbagh", "Budwell", "Kismathpura", "Himayath Sagar"],
"94L": ["RJNR", "Kishanbagh", "Bahadurpura", "Putlibowli", "Dharulshifa", "Chaderghat", "Nalgonda X Road", "Dilsukhnagar", "Chaitanyapuri", "Kothapet", "LB Nagar"],
"94R": ["RJNR", "Kishanbagh", "Bahadurpura", "Putlibowli", "Afzal Gunj", "IBS", "Koti"],
"94S": ["RJNR", "Kishanbagh", "Bahadurpura", "Putlibowli", "Afzal Gunj", "IBS", "Koti", "Abids", "Nampally", "Basheerbagh", "Tank Bund", "RNG", "Paradise", "Secunderabad"],
"94U": ["Koti", "Afzal Gunj", "Madina", "Putlibowli", "Bahadurpura", "Kishanbagh", "Athapur", "Yeruguda", "Upperpally", "Chintalmet", "V.T. College", "RJNR"],
"95A": ["AG College", "Shivaram Pally", "Zoo", "Bahadurpura", "Putlibowli", "Afzal Gunj", "IBS", "Koti"],
"95C": ["AG College", "Shivaram Pally", "Zoo", "Bahadurpura", "Putlibowli", "City College", "Afzal Gunj", "CBS", "Koti"],
"95H": ["Himayath Sagar", "Rajendranagar", "Kishanbagh", "Bahadurpura", "Pluranapool", "City College", "Afzalgunj", "CBS", "Koti"],
"95K": ["Koti", "IBS", "Afzal Gunj", "Putlibowli", "Zoo", "Sivaram Pally", "Khatadan", "Madhuban Colony"],
"95K/L": ["Madhuban Colony", "Khatadan", "Sivaram Pally", "Zoo", "Putlibowli", "City College", "Darulshifa", "IBS", "Chaderghat", "Malakpet", "Dilsukhnagar", "Kothapet", "LB Nagar"],
"95L/K": ["LB Nagar", "Kothapet", "Dilsukhnagar", "Malakpet", "Chaderghat", "Darulshifa", "Madina", "Putlibowli", "Bahadurpura", "Zoo", "Shivaram Pally", "Katedhan"],
"95L": ["LB Nagar", "Kothapet", "Chaitanyapuri", "Dilsukhnagar", "Malakpet", "Nalgonda X Road", "Darulshifa", "Madina", "Bahadurpura", "Zoo", "Shivaram Pally", "AG College"],
"95M": ["Koti", "Afzal Gunj", "Madina", "Putlibowli", "Bahadurpura", "Zoo", "Tank Bund", "Sastripuram Colony", "Y. Lardevpally"],
"95P": ["AG College", "Premavathipet", "Sivaram Pally", "Zoo", "Bahadurpura", "Putlibowli", "Afzal Gunj", "Koti"],
"95R": ["RJNR", "Naarm", "AG College", "Bahadurpura", "Afzal Gunj", "CBS", "Koti"],
"95S": ["Secunderabad", "Paradise", "RNG", "Tank Bund", "Basheerbagh", "Abids", "Koti", "IBS", "Afzal Gunj", "Putlibowli", "Bahadurpura", "Zoo", "Sivaram Pally", "AG College", "RJNR"],
"40V": ["KOTI", "N.S. COLLEGE", "GANDHI NAGAR", "R.P. ROAD", "BATA", "PATNEY", "Secunderabad"],
"41": ["JAGADGIRI GUTTA", "IDPL COLONY", "BALANAGAR", "SANATH NAGAR", "Ameerpet", "Panjagutta", "Kachiguda", "ABIDS", "KOTI"],
"41C": ["KOTI", "ABIDS", "Nallakunta", "Lakdikapul", "Kachiguda", "Panjagutta", "Ameerpet", "ESI", "Erragadda", "B.NAGAR", "IDPL COL", "ASBESTORS HILLS"],
"41K": ["JAGADGIRI GUTTA", "IDPL COLONY", "BALANAGAR", "SANATH NAGAR", "Erragadda", "ESI", "Ameerpet", "Panjagutta", "Kachiguda", "Nallakunta", "CBS"],
"41N": ["JAGADGIRI GUTTA", "IDPL COLONY", "BALANAGAR", "SANATH NAGAR", "Erragadda", "ESI", "Ameerpet", "Panjagutta", "Kachiguda", "Nallakunta"],
"42": ["Secunderabad", "BATA", "KAVADIGUDA", "KALPANA", "ASHOK NAGAR", "RTC X ROAD", "Sultan Bazar", "B.K.P", "K.GUDA"],
"43": ["Secunderabad", "PATNY", "JBS", "KHARKHANA", "LAL BAZAR", "MESS", "NEREDMET ‘X’ ROAD", "RADHIKA", "KAPRA", "YELLAREDDY GUDA", "VAMPUGUDA"],
"44": ["GANGAPUTRA COLONY", "PARSIGUTTA", "PADMARAO NAGAR", "Chikkadpally X RD", "Secunderabad"],
"44L": ["GANGAPUTRA COLONY", "PARSIGUTTA", "P.Ram Nagar", "Chikkadpally ‘X’ ROAD", "SANGEET", "RLY NILAYAM", "METTUGUDA", "LALAGUDA", "SOUTH LALAGUDA"],
"44X": ["Secunderabad", "CHILAKALGUDA ‘X’ RD", "PADMARAO NAGAR", "SKANDAGIRI", "PARSIGUTTA", "GANGAPUTRA COLONY"],
"45": ["VST", "GOLCONDA X’ ROAD", "MSRD", "BOLAKPUR", "KALPANA", "KAVADIGUDA", "RNG", "PARADISE", "Balkampet", "Ameerpet", "ESI"],
"45A": ["KOTI", "YMCA", "CH-PALLY", "RTC ‘X’ ROAD", "MSRD", "KAVADIGUDA", "BIBLE HOUSE", "BATA", "PATNY", "PARADISE", "Balkampet", "Ameerpet", "S Ram Nagar", "ESI", "AG.COL"],
"45G": ["RAM NAGAR", "BKP", "YMCA", "MSRD", "PARADISE", "Balkampet", "Panjagutta", "SRI NAGAR COLONY", "J.HILLS"],
"45J": ["JDM", "SHAPUR NAGAR", "CHINTAL", "Balanagar", "SANATH NAGAR", "BALKAMPET", "GREEN LANDS", "Balkampet", "RNG", "KAVADIGUDA", "MSRD", "RTC ‘X’ ROAD"],
"45K": ["KOTI", "YMCA", "Chintalpally", "RTC X ROAD", "MSRD", "KAVADIGUDA", "BIBLE HOUSE", "BATA", "PATNY", "PARADISE", "Balkampet", "Ameerpet", "S.Ram Nagar", "ESI", "Erragadda", "SANATH NAGAR"],
"4SY": ["KOTI", "RTC X ROAD", "MSRD", "KAVADIGUDA", "RNG", "PARADISE", "Balkampet", "GREEN LANDS", "AMEERPET", "YOUSUFGUDA"],
"45G/Y": ["JAGAPATHI HILLS", "BORABANDA", "YOUSUFGUDA", "Panjagutta", "Ameerpet", "GREEN LANDS", "PARADISE", "Jahanuma", "KAVADIGUDA", "KALPANA", "MSRD", "RTC ‘X’ ROAD", "VST", "RAMNAGAR"],
"45F": ["BORABANDA", "Erragadda", "Ameerpet", "GREEN LANDS", "PARADISE", "Jahanuma", "KAVADIGUDA", "MSRD", "RTC X RD", "Narayanaguda", "YMCA", "KOTI"],
"45R/F": ["RAM NAGAR", "MSRD", "PARADISE", "Balkampet", "Ameerpet", "SRI NAGAR", "BORABANDA"],
"46": ["PATS GADDA", "RASOOLPURA", "SINDHI COLONY", "PARADISE", "Secunderabad"],
"46P": ["PARSIGUTTA", "BAPUJI NAGAR", "PR NAGAR", "Chikkadpally ‘X’ ROAD", "Secunderabad", "PARADISE", "SINDHI COLONY", "RASOOLPURA", "PATIGADDA"],
"47": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Panjagutta", "SRINAGAR COLONY", "JUBILEE HILLS", "CHECK POST", "APOLLO HOSPITAL"],
"47C": ["FILM NAGAR", "YOUSUFGUDA", "CHECK POST", "KRISHNA NAGAR", "SRINAGAR COLONY", "Panjagutta", "GREEN LANDS", "Balkampet", "PARADISE", "Secunderabad"],
"47F": ["Secunderabad", "PARADISE", "ANAND", "Balkampet", "GREEN LANDS", "Panjagutta", "Ameerpet", "YOUSUFGUDA", "CHECK POST", "FILM NAGAR"],
"47G": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Panjagutta", "Ameerpet", "YOUSUFGUDA", "GPFA QTR"],
"47H": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Panjagutta", "SRNAGAR", "J.HILLS", "HITECH CITY", "KONDAPUR", "HAFIZPET"],
"47K": ["KONDAPUR", "SHILPARAMAM", "CYBERTOWERS", "SHER LINGAMPALLY", "PEDDAMMAGUDI", "YOUSUFGUDA", "Panjagutta", "Ameerpet", "GREEN LANDS", "BEGUMPET", "PARADISE", "SANGEET", "Secunderabad"],
"47L": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Panjagutta", "ROAD NO. 2", "LV PRASAD EYE HOSPITAL", "CHECK POST", "JUBILEE HILLS", "APOLLO HOSPITAL", "FILM NAGAR"],
"47Y": ["FILM NAGAR", "CHECK POST", "YOUSUFGUDA", "Panjagutta", "Ameerpet", "GREEN LANDS", "BEGUMPET", "PARADISE", "SANGEET", "Secunderabad"],
"47C/LE": ["Secunderabad", "PARADISE", "BEGUMPET", "GREEN LANDS", "Ameerpet", "Panjagutta", "ROAD NO. 2", "LV PRASAD EYE HOSPITAL", "CHECK POST", "J. HILLS", "AMBEDKAR UNIVERSITY"],
"47S": ["Secunderabad", "PARADISE", "BEGUMPET", "GREEN LANDS", "Ameerpet", "Panjagutta", "YOUSUFGUDA", "CHECK POST", "PEDDAMMAGUDI", "CYBERTOWERS", "SHILPARAMAM"],
"47Y/G": ["Secunderabad", "PARADISE", "BEGUMPET", "GREEN LANDS", "Ameerpet", "Panjagutta", "YOUSUFGUDA", "GAYATHRI NAGAR", "FILM NAGAR"],
"49E": ["GACHIBOWLI", "HCU", "DARGA", "M.PATNAM", "Masab Tank", "Banjara Hills", "Panjagutta", "GREEN LANDS", "BEGUMPET", "POLICE LINES", "PLAZA", "SANGEET", "Secunderabad"],
"48": ["KACHIGUDA", "Sultan Bazar", "RTC ‘X’ ROAD", "MSRD", "KAVADIGUDA", "RNG", "PARADISE", "Ameerpet", "Erragadda", "SANATH NAGAR"],
"49": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "RAJ BHAVAN ROAD", "Kachiguda", "Lakdikapul", "Nallakunta"],
"49A": ["JAHEER NAGAR", "Panjagutta", "GREEN LANDS", "Balkampet", "ANAND", "PARADISE", "SANGEET", "Secunderabad"],
"49J": ["Secunderabad", "PARADISE", "ANAND", "Balkampet", "GREEN LANDS", "Panjagutta", "BANJARA HILLS", "JUBILEE HILLS", "CHECK POST"],
"49K": ["Secunderabad", "PARADISE", "ANAND", "POLICE LINES", "Balkampet", "GREEN LANDS", "RAJ BHAVAN", "Kachiguda", "LIBERTY", "OLD MLA QTRS", "RAM KOTI", "KACHIGUDA"],
"49L": ["Secunderabad", "PARADISE", "ANAND", "POLICE LINES", "Balkampet", "GREEN LANDS", "Panjagutta", "BANJARA HILLS", "JUBILEE HILLS", "MLA COLONY"],
"49WI": ["Secunderabad", "PARADISE", "ANAND", "POLICE LINES", "Balkampet", "GREEN LANDS", "Panjagutta", "BANJARA HILLS", "MASAB TANK", "Malakpet"],
"49N": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Panjagutta", "ZAHEER NAGAR", "NANDI NAGAR"],
"49P": ["Secunderabad", "SANGEET", "PLAZA", "POLICE LINES", "Balkampet", "GREEN LANDS", "BLUE MOON", "Panjagutta", "Kachiguda", "Lakdikapul", "ASSEMBLY", "Nallakunta"],
"49V": ["Secunderabad", "YMCA", "PARADISE", "Balkampet", "SHAMLAL", "GREEN LANDS", "Panjagutta", "ERRAMANZIL"],
"49/86": ["Secunderabad", "PATNY", "PARADISE", "Balkampet", "SHAMLAL", "GREEN LANDS", "RAJBHAVAN", "Kachiguda", "Lakdikapul", "Nallakunta", "MJ MARKET", "Afzal Gunj", "YMCA", "RAMNAGAR", "J. OSMANIA", "S.MUDI", "Secunderabad"],
"508": ["BODUPPAL", "UPPAL DEPOT", "UPPAL", "HABSIGUDA", "Tarnaka", "METTUGUDA", "Secunderabad"],
"51": ["Secunderabad", "METTUGUDA", "HABSIGUDA", "NACHARAM", "MALLAPUR", "ECIL ‘X’ ROAD"],
"57S": ["Secunderabad", "S MANDI", "W.GUDA", "J. OSMANIA", "RAMNAGAR", "RTC ‘X’ ROAD", "DOMALGUDA", "LIBERTY", "ABIDS", "KOTI", "Afzal Gunj", "CMNR"],
"57ST": ["Secunderabad", "PARADISE", "RNG", "T. BUND", "SECRETARIAT", "Lakdikapul", "M. TANK", "Malakpet", "TALLAGADDA"],
"60": ["Secunderabad", "METTUGUDA", "NEW BRIDGE", "MALKAJGIRI", "SAFILGUDA", "AOC CENTRE", "MARREDPALLY", "KEY’S HIGH SCHOOL", "Secunderabad"],
"63B": ["AHMEDNAGAR", "Malakpet", "MASAB TANK", "BAZARGHAT", "LATHA", "G. BHAVAN", "M.J. MARKET", "Afzal Gunj", "CMNR"],
"63K": ["AHMEDNAGAR", "M.P", "MASAB TANK", "LK POOL", "ABIDS", "KOTI", "CMNR"],
"63M": ["AHMEDNAGAR", "Malakpet", "Masab Tank", "LK POOL", "ASSEMBLY", "Nallakunta", "M.J. MARKET", "Afzal Gunj", "CMNR"],
"63S": ["SAYEED NAGAR", "MP", "Masab Tank", "LK POOL", "MJ MARKET", "MADINA", "CMNR"],
"63S/B": ["SAYEED NAGAR", "BAJHARGHAT", "LATHA", "GANDHI BHAVAN", "Afzal Gunj", "CHARMINAR"],
"65": ["TOLICHOWKI", "DARGA", "M.P", "Masab Tank", "LK POOL", "ABIDS", "KOTI", "IBS", "Afzal Gunj", "CMNR"],
"65A": ["AMBEDKAR NAGAR", "ASIF NAGAR", "M.P", "Masab Tank", "Lakdikapul", "KOTI", "CMNR"],
"65C": ["MOTHI DARWAJA", "MP", "Masab Tank", "Lakdikapul", "NAMPALLY", "AFZALGUNJ", "CHARMINAR"],
"65/85": ["MEHDIPATNAM", "Masab Tank", "LK. POOL", "NAMPALLY", "Afzal Gunj", "CMNR", "CHANORAYANGUTTA", "BARKAS"],
"65M": ["TOLICHOWKI", "MP", "Masab Tank", "J.K.POOL", "Nallakunta", "Afzal Gunj", "CHARMINAR"],
"65G": ["CMNR", "KOTI", "ABIDS", "Nallakunta", "LK POOL", "Masab Tank", "NA NAL NAGAR", "LANGAR HOUZ", "RAM DEVGUDA", "GOLCONDA FORT"],
"65G/P": ["GOLCONDA FORT", "PUPPLGUDA", "MP", "Masab Tank", "LK POOL", "NAMPALLY", "MJ.MARKET", "MADINA", "CMNR"],
"65P": ["PUPPALGUDA", "Malakpet", "Masab Tank", "LK POOL", "Nallakunta", "MJ MARKET", "MADINA", "CMNR"],
"65S": ["CMNR", "MJ MARKET", "GOSHAMAHAL", "SITARAM BAGH", "MALLEPALLY", "M.R.", "M.D. LINES", "SHAIKPET"],
"300": ["UPPAL", "NAGOLE", "LB NAGAR", "OWAISI HOSPITAL", "BANDLAGUDA", "MAILARDEVPALLY", "ARAMGHAR", "ATTAPUR", "MEHDIPATNAM"],
"65T": ["CMNR", "Afzal Gunj", "KOTI", "Nallakunta", "Lakdikapul", "Masab Tank", "Malakpet", "TALLAGADDA"],
"65V": ["CMNR", "Afzal Gunj", "KOTI", "Nallakunta", "Lakdikapul", "Masab Tank", "V.N COLONY", "Malakpet"],
"65Z": ["ZOO-PARK", "BAHADURPURA", "MADINA", "Afzal Gunj", "IBS", "KOTI", "Nallakunta", "Lakdikapul", "Masab Tank", "Malakpet", "L.HOUZ"],
"66G": ["CMNR", "MJ. MARKET", "BAZARGHAT", "Masab Tank", "Malakpet", "LANGAR HOUZ", "GOLCONDA FORT"],
"66P": ["GOLCONDA FORT", "LANGAR HOUZ", "Malakpet", "Masab Tank", "BAZARGHAT", "MJ. MARKET", "CMNR", "BARKAS", "PA HADI SHAREER"],
"21W": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "BARGA", "WEST V. PURAM"],
"22": ["RISALABAZAR", "BOLARAM", "ALWAL", "LALBAZAR", "KHARKANA", "JBS", "Secunderabad"],
"22/1P": ["MGBS", "KOTI", "Narayanaguda", "RTCXRD", "MSRD", "PADMA RAO NAGAR", "Secunderabad", "JBS", "ALWAL", "BOLLARAM", "RISA LA BAZAR"],
"22C": ["SECBAD", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "ALWAL", "LKADAWALA", "BALAJI NAGAR", "CHENNAPURAM"],
"22D": ["SECBAD", "JBS", "KHARKANA", "LAL BAZAR", "ALWAL", "BOLARUM", "RISALA BAZAR", "KOUKUR", "MB.DURGA"],
"22L": ["RISALA BAZAR", "BOLARAM", "ALWAL", "LAL BAZAR", "KHARKANA", "JBS", "Secunderabad", "BHOIGUDA", "MSRD", "RTC ‘X’ ROAD", "CH PALLY", "YMCA", "KOTI", "C GHAT", "NLG ‘X’ ROAD", "PRESS", "SAIDABAD", "PISAL BANOA", "MIDHANI", "LAB QTRS"],
"22K": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "BOLARUM", "KOURKUR ‘X’ ROAD", "KOURK UR"],
"22M": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "ALWAL", "OLD ALWAL", "MACHA BOLARUM"],
"22R": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "NAGADEVATHA TEMPLE", "EME HEAD QTRS", "RSI CLUB", "KOKUR X ROAD", "RISALA BAZAR", "TUKAPALLY"],
"22T": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "ALWAL", "BOLARUM", "TURKAPALLY"],
"22/102": ["RISALABAZAR", "BOLARAM", "ALWAL", "LALBAZAR", "KHARKANA", "JBS", "Secunderabad", "MUSHEERABAD", "RTC’X’ RD", "Narayanaguda", "YMCA", "W.COLLEGE", "CH.GHAT", "MALAKPET", "SAIDABAD", "IS. SADAN", "SANTHOSH NAGAR", "PISALLEANDA", "KESHAVAGIRI"],
"22S": ["RISALA BAZAR", "BOLARUM", "ALWAL", "LAL BAZAR", "KHARHANA", "JBS", "PATNY", "PARADISE", "BEGUMPET", "Ameerpet", "ESI", "Erragadda", "SANATH NAGAR"],
"23": ["SECBAD", "JBS", "KHARKANA", "TIRUMALGIRI", "LALGUNROCK", "RTC COLONY", "SUBASH NAGR"],
"23B": ["BHUDEVINAGAR", "FAMILY QTRS", "LOTHUKUNTA", "LALBAZAR", "TIRUMALGIRI", "KHARKANA", "JBS", "Secunderabad"],
"23G": ["Secunderabad", "JBS", "SUBASH NAGAR", "RTC COLONY", "KHARKHANA", "Secunderabad"],
"23M": ["Secunderabad", "JBS", "KHARKANA", "TIRUMAL GIR", "RTC COLONY", "GUN ROCK", "SUBASH COLONY", "INDIRA NAGAR", "MD.FORM", "QUTHBULLAPUR"],
"23M/Q": ["QUTHBULLAPUR", "MD.FORM", "INDIRANAGAR", "SUBASH COLONY", "GUN ROCK", "RTC COLONY", "TIRUMALAGIRI", "KHARKANA", "JBS", "Secunderabad"],
"24": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "NAGADEVATHA TEMPLE", "EME HEAD QTRS", "EME CANTEEN", "AMMEGUA", "YAPRAL"],
"24B": ["Secunderabad", "JBS", "KHARKANA", "LALABAZAR", "AMMUGUDA", "YAPRAL", "BALAJI NAGAR"],
"24C": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "AMGUA", "YAPRAL", "CHENNAPURAM"],
"24E": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "AMMGUA", "NIRMAL NAGAR", "VYUPURI", "SAINIKPURI", "A S.RAO NAGAR", "RAIKA", "ECIL ‘X’ ROAD"],
"24E/31": ["KPHB COLONY", "KP", "B.NAGAR", "Bahadurpura", "LALBAZAR", "AMMUGUDA", "NIRMAL NAGAR", "SAINIKPURI", "ASRAO NAGAR", "RADHIKA", "ECIL ‘X’ ROAD"],
"24C/D": ["DHAMMA1GUDA", "KG", "MOULALI", "JTS", "RLY QTRS", "LALAPET", "SHANTINAGAR", "LALAGUDA", "METTUGUDA", "Secunderabad", "JBS", "KHARKANA", "LALBAZAR", "AMMUGUDA", "YAPRAL", "CHENNAPURAM"],
"24K": ["Secunderabad", "JBS", "KHARKANA", "LALBAZAR", "AMMUGUDA", "YAPRAL", "KALYANI GARDENS"],
"25": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "ALWAL", "ALWAL PS. TEMPLE", "ALWAL", "OLD ALWAL"],
"25A": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "ALWAL", "ALWAL PS. TEMPLE", "ALWAL", "OLD ALWAL", "AMBEDKAR NAGAR"],
"25B": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "ALWAL", "TEMPLE ALWAL", "OLD ALWAL", "FATHER BALAYYANAGAR", "BANK COLONY"],
"25J": ["Secunderabad", "JBS", "LAL BAZAR", "ALWAL", "LAYOLA ACADEMY", "JDM"],
"25M": ["Secunderabad", "JBS", "LAL BAZAR", "ALWAL", "MGNAGAR", "MACHA BOLARUM"],
"26": ["Secunderabad", "KSIKH VILLAGE", "BHEL COLONY", "HASMATHPET", "OLD BOYANPALLY"],
"26A": ["Secunderabad", "PLAZA", "RACE COURSE", "AKBAR ROAD", "HASMATH PET", "Secunderabad"],
"26D": ["Secunderabad", "MUDFURD", "AKBER’S ‘X’ RD", "MANOVIKAS NAGAR", "HASMATHPET", "SHAPUR NAGAR"],
"26M": ["CHARMINAR", "MADINA", "Afzal Gunj", "NAMPALLY", "Kachiguda", "Panjagutta", "Ameerpet", "GREEN LANDS", "BEGUMPET", "MUDFURD", "AKBER’S ‘X’ RD", "MANOVIKAS NAGAR", "HASMATHPET", "BANK COLONY"],
"26M/V": ["Secunderabad", "PLAZA", "RACE COURSE", "AKBAR ROAD", "HASMATHPET", "Bahadurpura"],
"26N": ["Secunderabad", "MUDFURD", "AKBAR’S ‘X’ ROAD", "MANOVIKAS NAGAR", "HASMATHPET", "OLD BOYANPALLY"],
"28": ["Secunderabad", "JBS", "KHARKANA", "AKBAR’S ‘X’ ROAD", "MAHALAXMI MOTORS", "MANOVIKAS NAGAR", "MD.NAGAR"],
"29": ["JDM", "SHAPUR NAGAR", "CHINTAL", "IDPL COLONY", "BALANAGAR", "FEROZGUA", "Bahadurpura", "THOKATA", "TADBUN", "SIKH VILLAGE", "PATNY", "Secunderabad"],
"29B": ["JDM", "SHAPUR", "CHINTAL", "IDPL COL", "BALANAGAR", "Bahadurpura", "TADBUN", "PATNY", "Secunderabad"],
"29C": ["Secunderabad", "PATNY", "Bahadurpura", "FEROZGUA", "BALANAGAR", "SRI RAM NAGAR"],
"29H": ["AKURUPA COL", "JDM", "SHAPUR NAGAR", "HMT COLONY", "B.NAGAR", "Bahadurpura", "TADBUN", "PATNY", "Secunderabad"],
"29Q": ["QUTHBULLAPUR", "B.NAGAR", "Bahadurpura", "TADBUND", "PATNY", "Secunderabad"],
"29R": ["APURPUPA COLONY", "JDM", "SHAPUR NAGAR", "CHINTAL", "B.NAGAR", "Bahadurpura", "PATNY", "SANGEET", "Secunderabad"],
"29S": ["JDM", "SHAPURNAGAR", "SUBASH NAGAR", "B.NAGAR", "Bahadurpura", "TADBUND", "PATNY", "Secunderabad"],
"30": ["JAGAGIRI GUTTA", "ROAD NO 4", "IDPL COLONY", "B.NAGAR", "Bahadurpura", "SIKH VILLAGE", "RACE COURSE", "PATNY", "Secunderabad"],
"30A": ["Secunderabad", "PATNY", "SIKH VILLAGE", "Bahadurpura", "B.NAGAR", "IDPL", "GANDHINAGAR", "ALLWYN COLONY"],
"30C": ["Secunderabad", "PATNY", "SIKH VILLAGE", "Bahadurpura", "B.NAGAR", "IDPL", "GANDHINAGAR", "ASBESTAS COLONY"],
"30M": ["Secunderabad", "PATNY", "RACE COURSE", "SIKH VILLAGE", "Bahadurpura", "B.NAGAR", "IDPL COLONY", "ROAD NO 4", "JAGAGIRI GUTTA", "MAGDOOM NAGAR"],
"30S": ["Secunderabad", "Bahadurpura", "B.NAGAR", "GANDHINAGAR", "RANGA REDDY NAGAR", "MAGDOOM NAGAR", "SRINIVASA NAGAR"],
"31": ["Secunderabad", "PATNY", "TADBUND", "Bahadurpura", "FEROZGUDA", "B.NAGAR", "KUKUTPALLY", "KPHB"],
"31A": ["Secunderabad", "PATNY", "TADBUND", "Bahadurpura", "OLD AIRPORT", "SHOBAA", "B.NAGAR", "K.P"],
"31H": ["KPHB", "KP", "B.NAGAR", "FEROZGUA", "Bahadurpura", "TADBUND", "PATNY", "Secunderabad"],
"31M": ["Secunderabad", "PATNY", "TADBUND", "Bahadurpura", "B.NAGAR", "KP", "KPHB", "JNTU", "MIG QTRS"],
"31P": ["Secunderabad", "TADBUND", "OLD ALWAL", "OLD AIRPORT", "Bahadurpura", "B.NAGAR", "HMT NAGAR", "PRAGATINAGAR", "SAI NAGAR"],
"31V": ["Secunderabad", "PATNY", "TADBUND", "Bahadurpura", "B.NAGAR", "KP", "KPHB", "JNTU", "VASANTH NAGAR"],
"31L": ["Secunderabad", "PATNY", "TADBUND", "BOWENPALLY", "BALANAGAR", "K.P", "KPHB"],
"33S": ["Secunderabad", "PATNY", "TADBUND", "Bahadurpura", "B.NAGAR", "KP", "VIVEKANANDA NAGAR", "ALLWYN COLONY"],
"35": ["Secunderabad", "METTUGUDA", "NEW BRIDGE", "MALKAJGIRI", "SAFILGUDA", "NEREDMET ‘X’ ROAD", "SAINIKPURI", "A.S.RAO NAGAR"],
"37": ["ECIL ‘X’ ROAD", "RADHIKA", "SAINIKPURI SHOPPING CENTRE", "DEFENCE COLONY", "NEREDMET ‘X’ ROAD", "R.K.PURAM", "MESS", "AOC GATE", "MARREDPALLY", "PATNY", "Secunderabad"],
"37A/L": ["ECIL ‘X’ RD", "RADHIKA", "SAINIKPURI", "NEREDMET ‘X’ RD", "R.K PURAM", "MESS", "AOC", "MARREDPALLY", "SANGEET", "Secunderabad"],
"37B": ["Secunderabad", "YMCA", "AOC", "MESS", "R.K.PURAM", "N.MET ‘X’ ROAD", "KAPRA", "DAMMAL GUDA", "AMBEDKAR NAGAR"],
"37D": ["Secunderabad", "YMCA", "MARREDPALLY", "AOC", "MESS", "R.K. PURAM", "N.MET ‘X’ ROAD", "KAPRA", "RADHIKA", "DAMMALGUDA"],
"37D/L": ["Secunderabad", "WEST MARREDPALLY", "AOC GATE", "A.S.RAO NAGAR", "NEREDMET ‘X’ RD", "RADHIKA", "KAPRA", "DOMMUGUDA", "AMBEDKAR NAGAR"],
"37E": ["Secunderabad", "WEST MARREDPALLY", "ARUL COLONY", "AOC GATE", "R.K.PURAM", "NEREDMET X ROAD", "SHOPPING CENTRE", "ECIL ‘X’ ROAD"],
"37H": ["Secunderabad", "YMCA", "MARREDPALLY", "AOC GATE", "MESS", "R.K.PURAM", "N.MET", "KAPRA", "RADHIKA", "ECIL ‘X’ ROAD"],
"37S": ["SAINIKPURI", "SHOPPING CENTRE", "DEFENCE COLONY", "NEREDMET ‘X’ ROAD", "R.K.PURAM", "MESS", "AOC GATE", "MARREDPALLY", "PATNY", "SANGEET", "Secunderabad"],
"37N": ["ECIL ‘X’ ROAD", "SHOPPING CENTRE", "DEFENCE COLONY", "NEREDMET X ROAD", "R.K.PURAM", "MESS", "AOC GATE", "MARREDPALLY", "PATNY", "BATA", "BOATS CLUB", "TANK BUND", "SECRETARIAT", "Nallakunta"],
"37R/K": ["Jahanuma", "PARADISE", "MARREDPALLY", "AOC GATE", "MESS", "R.K.PURAM", "NEREDMET ‘X’ RD", "DEFENCE COLONY", "SHOPPING CENTRE", "SAINIKPURI", "RADHIKA", "ECIL X ROAD", "KUSHAIGUDA"],
"38": ["Afzal Gunj", "IBS", "KOTI", "Nallakunta", "B.BAGH", "TANK BUND", "BATA", "Secunderabad", "SANGEET", "SHENOY", "ADDAGUTTA", "TUKARAM GATE"],
"38A": ["RTC COLONY", "E.A.BAGH", "SAFILGUDA", "AOC", "SHENOY", "SANGEETH", "Secunderabad"],
"38E": ["Secunderabad", "SANGEET", "SHENOY", "ADDAGUTTA", "TUKARAM GATE"],
"38EX": ["Secunderabad", "ADDAGUTTA", "TUKARAM GATE", "SAFILGUDA", "AOC", "SHENOY", "Secunderabad"],
"38H": ["Secunderabad", "SANGEET", "SHENOY", "NEHRU NAGAR", "SAFILGUDA", "MALUKARJUNA NAGAR", "HANUMANPET"],
"36K": ["KOTI", "Nallakunta", "B.BAGH", "TANK BUND", "UNG", "PARADISE", "SANGEET", "SHENOY", "ADDAGUTTA", "TUKARAM GATE", "HANUMANPET", "MALLIKARJUNA NAGAR"],
"38L/C": ["Secunderabad", "JBS", "LAXMINAGAR", "AOC", "SAFILGUDA", "N.MET", "ASRAO NAGAR", "RADHIKA", "ECIL ‘X’ ROAD"],
"38T": ["Nallakunta", "AG. OFFICE", "SECRETARIAT", "TANK BUND", "BATA", "PATNY", "SANGEET", "SHENOY", "ADDAGUTTA", "TUKARAM GATE"],
"38X": ["Secunderabad", "SHENOY", "AOC", "SAFILGUDA", "TUKARAM GATE", "Secunderabad"],
"40": ["Secunderabad", "BATA", "KAVADIGUDA", "ASHOK NAGAR", "HIMAYATH NAGAR", "OLD MLA QTRS", "ABIDS", "KOTI"],
"40D": ["Secunderabad", "BATA", "KAVADIGUDA", "ASHOK NAGAR", "KOTI", "MALAKPET", "MOOSARAMBAGH", "DSNR"],
"40E": ["EAST MARREDPALLY", "Secunderabad", "BATA", "KAVADI GUDA", "ASHOK NAGAR", "HIMAYATH NAGAR", "OLD MLA QTRS", "ABIDS", "KOTI"],
"40N": ["Secunderabad", "BATA", "KAVADIGUDA", "ASHOK NAGAR", "HIMAYATH NAGAR", "OLD MLA QTRS", "Nallakunta"],
"401": ["Secunderabad", "BATA", "KAVADIGUDA", "ASHOK NAGAR", "HIMAYATH NAGAR", "OLD MLA QTRS", "KOTI", "I.B.S"],
"40T": ["KOTI", "RAMKOTI", "N.S.COLLEGE", "GANDHINAGAR", "R.P.ROAD", "BATA", "PATNEY", "Secunderabad"],
"10H": ["Secunderabad", "PARADISE", "BEGUMPET", "GREEN LANDS", "Ameerpet", "YOUSUFGUDA", "HITECH CITY", "KONDAPUR"],
"10J/K": ["JAGADGRIGUTTA", "PRAGATHI NAGAR", "ASBESTORS COLONY", "KP", "MOOSAPER", "Erragadda", "ESI", "AMEERPET", "BEGUMPET", "PATNY", "Secunderabad"],
"10K": ["KPHB COLONY", "KPHB MOSSAPET", "Erragadda", "ESI", "Ameerpet", "GREEN LANDS", "BEGUMPET", "PARADISE", "Secunderabad"],
"10K/L": ["KPHB IV LIG", "KPHB", "KP", "MOOSAPET", "Erragadda", "SRam Nagar", "Ameerpet", "GREEN LANDS", "BEGUMPET", "PARADISE", "SANGEET", "Secunderabad"],
"10J": ["SOUTH LALAGUDA", "ALUGADDA BHAVI", "SEC. BAD", "PARADISE", "Balkampet", "GREEN LANDS", "BALKAMPET", "SANATH NAGAR", "Erragadda", "MOOSAPET", "KP", "KPHB", "JNTUC"],
"10L": ["Secunderabad", "PATNY", "Balkampet", "AMIRPET", "ESI", "Erragadda", "MOOSAPET", "KP", "KPHB VI PHASE"],
"10N": ["Secunderabad", "PARADISE", "Balkampet", "GREEN LANDS", "Ameerpet", "Panjagutta", "NANDHI NAGAR"],
"10P/F": ["Secunderabad", "BEGUMPET", "GREEN LANDS", "YELLAMMA TEMPLE", "E GADDA", "SRINAGAR", "MOTINAGAR", "BORABANDA"],
"10R": ["Secunderabad", "PARADISE", "ANAND", "Balkampet", "PUBLIC SCHOOL", "GREEN LANDS", "Ameerpet", "YOUSUFGUDA", "REHMATH NAGAR"],
"10U": ["UPPAL", "HUBSIGUDA", "Tarnaka", "SANGEET", "PATNY", "PARADISE", "Balkampet", "GREEN LANDS", "Ameerpet", "YOUSUFGUDA", "J. HILLS"],
"10Y": ["Secunderabad", "PARADISE", "ANAND", "POLICE LINES", "Balkampet", "PUBLIC SCHOOL", "GREEN LANDS", "Ameerpet", "YOUSUFGUDA"],
"10Y/F": ["BORABANDA", "Erragadda", "SR NAGAR", "AMEERPET", "GREEN LANDS", "BEGUMPET", "PARADISE", "SANGEET", "Secunderabad"],
"10Y/H": ["GAYATHRI HILLS", "VENKATGIRI", "Ameerpet", "Balkampet", "PARADISE", "PATNY", "Secunderabad"],
"10Z": ["Secunderabad", "BEGUMPET", "GREEN LANDS", "Panjagutta", "ROAD NO. 2", "L.V. PRASAD HOSPITAL", "B.T CANCER HOSPITAL"],
"11M": ["N. PALLY", "G. BHAVAN", "ML. MARKET", "Osmania General Hospital", "Afzal Gunj", "MGBS", "KOTI", "ABIDS", "N. PALLY"],
"11N": ["N. PALLY", "NIZAMCOLLEGE", "ABIDS", "KOTI", "MGBS", "Afzal Gunj", "Osmania General Hospital", "ML. MARKET", "G. BHAVAN", "N. PALLY"],
"14": ["Secunderabad", "METTUGUDA", "LALAGUDA", "SHANTHI NAGAR", "LALAPET"],
"14P": ["UPPERGUDA", "RLY QTRS", "PRASHANTH NAGAR", "LALAPET", "SHANTHI NAGAR", "TUKARAM GATE", "LALAGUDA", "SANGEET", "Secunderabad"],
"15": ["KG", "ECIL ‘X’ ROAD", "KAMAL NAGAR", "S.P.NAGAR", "MOULALI", "JTS", "INDL. ESTATE", "RFC", "RLY QTRS", "LALAPET", "SHANTI NAGAR", "TUKARAM GATE", "LALAGUDA", "METTUGUDA", "ALUGADDA BHAVI", "RLY NILAYAM", "SANGEET", "Secunderabad"],
"15D": ["AMBEDKAR NAGAR", "DAMMAIGUDA", "KG", "MOULALI", "JTS", "RLY QTRS", "LALAPET", "SHANTI NAGAR", "LALAGUDA", "METTUGUDA", "Secunderabad"],
"15H": ["HB. COLONY", "JTS", "LALAPET", "SHANTI NAGAR", "METTUGUDA", "SANGEET", "Secunderabad", "JBS"],
"16A": ["ECIL ‘X’ ROAD", "RADHIKA", "SAINIKPURI", "NEREDMETLA ‘X’ ROAD", "SAFILGUDA", "MALKAJGIRI", "NEW BRIDGE", "C. GUDA ‘X’ RD", "Secunderabad"],
"16A/5N": ["ECIL ‘X’ RD", "NEREDMET ‘X’ RD", "SAFILGUDA", "MALKAJGIRI", "MEERJALGUDA", "METTUGUDA", "Secunderabad", "PARADISE", "RNG", "TANK BUND", "N TR GHAT"],
"16B": ["Secunderabad", "METTUGUDA", "MIRJALGUDA", "MALKAJGIRI", "SAFILGUDA", "NEREDMET", "A.S. RAO NAGAR", "ECIL ‘X’ ROAD"],
"16C": ["Secunderabad", "M.GUDA", "MALKAJGIRI", "SAFILGUDA", "ASRAO NAGAR", "RADHIKA", "ECIL"],
"16D": ["NEREDMET", "SAFILGUDA", "MALKAJGIRI", "METTUGUDA", "C. GUDA ‘X’ ROAD", "MSRD", "RTC ‘X’ ROAD", "S. MUTT", "KOTI", "CH. GHAT", "Malakpet", "DSNR"],
"16E": ["Secunderabad", "METTUGUDA", "Malkajgiri", "E.ANANDBAGH", "NMDC", "MOULAALI"],
"102": ["RTC ‘X’ RD", "KOTI", "IBS", "CMNR", "KEHAVAGIRI", "ISES MOULALI", "MALKAJGIRI", "MIRJALGUDA", "NEW BRIDGE", "METTUGUDA", "Secunderabad", "PARADISE", "B PET", "GREEN LANDS", "BALKAMPET", "SANTOSH NAGAR"],
"16H": ["Secunderabad", "M.GUDA", "Malkajgiri", "E.A. BAGH", "NMDC", "ZTS", "ECIL X ROAD"],
"16H/47L": ["ECIL X’ RD", "KAMALA NAGAR", "SP NAGAR", "NMDC", "E.A. BAGH", "RK NAGAR", "Malkajgiri", "M.GUDA", "Secunderabad", "PARADISE", "POLICE LINES", "GREEN LANDS", "Panjagutta", "L.V. PRASAD HOSP.", "APOLLO", "FILM NAGAR"],
"16K": ["NEREDMET ‘X’ ROAD", "VINAYAK NAGAR", "SAFILGUDA", "MALKAJGIRI", "NEW BRIDGE", "METTUGUDA", "C. GUDA ‘X’ ROAD", "MSRD", "RTC ‘X’ ROAD", "S. MUTT", "FEVER HOSPITAL", "N. GUDA", "YMCA", "KOTI", "CH. GHAT", "M PET", "DSNR"],
"16K/L": ["RANIGUNJ", "JAMES STREET", "PARADISE", "PATNY", "Secunderabad", "MUSHEERABAD", "RTC X RD", "Narayanaguda", "YMCA", "W.COLLEGE", "CHADERGHAT", "MALAKPET", "DSNR", "KOTHAPET", "LBalanagar"],
"16L": ["Secunderabad", "ALLUGADDA BHAVI MARKET", "RAMESWAR", "SHANDLICE", "LAXMINAGAR"],
"16M": ["Secunderabad", "Chikkadpally", "NEW BRIDGE", "MIRJALGUDA", "MALKAJGIRI", "SARASWATHI NAGAR", "MOULALI"],
"16P": ["Secunderabad", "A.BHAVI", "M.GUDA", "MIRJALGUDA", "M. GIRI", "POLICE STATION", "PRASANTHNAGAR"],
"16/86": ["HIGHCOURT", "Afzal Gunj", "CBS", "W.COLLEGE", "YMCA", "BAGHPALLY", "VST", "RAMNAGAR", "W GUDA", "S MUNDI", "Chikkadpally X ROAD", "M.GUDA", "M. GIRI", "SAFILGUDA", "NEREDMET", "ECIL ‘X’ ROAD"],
"16K/N": ["KESHAVGIRI", "PHISALBANDA", "ISSADAN", "SAIDABAD", "MAIAKPET", "CH. GHAT", "W. COLLEGE", "YMCA", "N. GUDA", "CHIKKADAPALLY", "MUSHEERABAD", "C. GUDA ‘X’ RD", "NEW BRIDGE", "MALKAJGIRI", "SAFILGUDA", "NEREDMET ‘X’ ROAD"],
"16M/P": ["Secunderabad", "METTIGUDA", "MIRJALGUDA", "M. GIRI", "POLICE STATION", "PRASANTH NAGAR"],
"16N/49M": ["TOLICHOWKI", "M.P", "BANJARA HILLS", "P.GUTA", "GREEN LANDS", "Balkampet", "PARADISE", "Secunderabad", "METTUGUDA", "MALKAJGIRI", "SAFILGUDA", "NEREDMET ‘X’ RD"],
"16R": ["Secunderabad", "ALI", "ALUGADDA BHAVI", "M.GUDA", "Malkajgiri", "ANANDBAGH", "ASRAO NAGAR", "ECIL ‘X’ ROAD"],
"16R/K": ["Secunderabad", "ALUGADDA BHAVI", "METTUGUDA", "MIRJALGUDA", "Malkajgiri", "SAFILGUDA", "SAINIKPURI", "R.K.PURAM"],
"16S": ["SAFILGUDA", "ANAND BAGH", "R.K NAGAR", "SAI NAGAR", "MALKAJGIRI", "METTUGUDA", "C. GUDA ‘X’ ROAD", "S. MANDI", "Warasiguda", "J OSMANIA", "Sultan Bazar", "BKP", "YMCA", "KOTI"],
"16T": ["SAINIKPURI", "NEREDMET", "VINAYAK NAGAR", "SAFILGUDA", "MALKAJGIRI", "NEW BRIDGE", "METTUGUDA", "INK", "ARTS COLLEGE", "S. MUTT", "BKP", "N. GUDA", "Basheerbagh", "ABIDS", "N. PALLY"],
"16U": ["SAFILGUDA", "ANAND BAGH", "R.K. NAGAR", "MALKAJGIRI", "METTUGUDA", "Tarnaka", "HUBSIGUDA", "KAKATIYA NAGAR", "CHURCH COLONY", "R. PUR"],
"17": ["KG", "ECIL ‘X’ ROAD", "KAMALANAGAR", "S.Ram Nagar", "MOULALI", "JTS", "INDL. ESTATE", "RFC", "RLY QTRS", "LALAPET", "WHITE HOUSE", "Tarnaka", "METTUGUDA", "ALUGADDA BHAVI", "RLY NILAYAM", "SANGEET", "Secunderabad"],
"17B": ["Secunderabad", "Tarnaka", "LALAPET", "MOULALI", "K.GUDA", "NAGARAM", "DAMMAIGUDA", "BJR NAGAR"],
"17D": ["DAMMAIGUDA", "NAGARAM", "KG", "MOULALI", "LALAPET", "Tarnaka", "M.GUDA", "SANGEET", "Secunderabad"],
"17H": ["ECIL X ROAD", "KAMALANAGAR", "SR NAGAR", "MOULALI", "JTS", "INDUSTRIAL ESTATE", "RFC", "RLY QTRS", "LALAPET", "WHITE HOUSE", "Tarnaka", "METTUGUDA", "Secunderabad", "PATNY", "BOWENPALLY", "SUCHITRA", "KOMPALLY", "POCHAMPALLY", "KANDLAKOYA", "MEDCHAL"],
"18": ["Secunderabad", "ALUGADDA BHAVI", "METTUGUDA", "NIN. Tarnaka", "STATE ARCHIVES", "CCMB", "HUBSIGUDA", "NGRI", "SURVEY OF INDIA", "UPPAL ‘X’ ROAD", "ELECTRIC JUNCTION", "GANDHI STATUE", "UPL", "FERZAJIGUDA", "BOOUPPAL X ROAD", "UPL DEPO"],
"18B": ["Secunderabad", "Tarnaka", "HUBSIGUDA", "UPL", "UPL DEPO", "BODUPPAL"],
"18C": ["Secunderabad", "Tarnaka", "HUBSIGUDA", "SURVEY OF INDIA", "UPL", "UPL DEPO", "CHENGI CHERLA"],
"18M": ["MEDPALLY", "UPL", "H.GUDA", "Tarnaka", "METTUGUDA", "Secunderabad", "RNG", "TANK BUND", "BIRLA MANDIR", "Lakdikapul", "Masab Tank", "Malakpet"],
"18K": ["Secunderabad", "Tarnaka", "HUBSIGUDA", "KRANTI NAGAR", "UPPAL"],
"18R": ["Secunderabad", "Tarnaka", "HUBSIGUDA", "RAMANTHAPUR", "RTC COLONY"],
"18T": ["Secunderabad", "Tarnaka", "HUBSIGUDA", "NACHARAM ‘X’ ROAD", "LAXMI STAR CHVC ILKANAGAR", "UPL"],
"18V": ["Secunderabad", "M.GUDA", "Tarnaka", "H.GUDA", "NRGL", "R.PUR", "V.R.NAGAR"],
"18/10L": ["UPPAL", "H.GUDA", "Tarnaka", "SANGEET", "Secunderabad", "Balkampet", "Ameerpet", "ESI", "Erragadda", "KP", "KPHB IV PHASE"],
"19K/S": ["MP", "Masab Tank", "CHECKPOST", "ROAD NO. 7", "J. HILLS", "SIET", "SR NAGAR", "ESI", "Erragadda", "KP"],
"19Y/F": ["BORABANDA", "Erragadda", "ESI", "S.Ram Nagar", "SIET", "JUBILEE HILLS", "CHECK POST", "ROAD NO. 7", "MASAB TANK", "M.P"],
"19M": ["KPHB", "KP", "Erragadda", "ESI", "S.Ram Nagar", "SIET", "JUBILEE HILLS", "CHECK POST", "ROAD NO. 7", "MASAB TANK", "M.P"],
"19V": ["Ameerpet", "S.R NAGAR", "ESI", "Erragadda", "MOOSAPET", "KP", "KPHB", "JNTUC", "VASANTH NAGAR"],
"19V/M": ["M.P", "Masab Tank", "ROAD NO. 7", "JUBILEE HILLS", "SIET", "S.Ram Nagar", "ESI", "Erragadda", "KP", "VASAVI NAGAR"],
"19Y": ["JUBILEE HILLS", "CHECK POST", "SIET", "Ameerpet", "Kachiguda", "KOTI"],
"20D": ["JBS", "Secunderabad", "MSRD", "KAVADIGUDA", "GANDHI NAGAR", "INDIRA PARK", "SECRETARIAT", "AG OFFICE", "N. PALLY"],
"20M": ["Secunderabad", "MSRD", "KAVADIGUDA", "GANDHI NAGAR", "ASHOK NAGAR", "INDIRA PARK", "SECRETARIAT", "Nallakunta", "MALLAPALLY", "V.N.COLONY"],
"20P": ["Secunderabad", "PADMARAO NAGAR", "MSRD ‘X’ ROAD", "P&T COLONY", "INDIRA NAGAR", "SECRETARIATE", "AG. OFFICE", "Nallakunta"],
"20V": ["Secunderabad", "MSRD", "KAVADIGUDA", "GANDHI NAGAR", "ASHOK NAGAR", "INDIRA PARK", "SECRETARIAT", "Nallakunta", "MALLAPALLY", "V.N. COLONY"],
"21": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "VENKATAPURAM"],
"21B": ["Secunderabad", "JBS", "KHARKANA", "LAL BAZAR", "LOTHUKUNTA", "FAMILY QTRS", "BUDEVINAGAR"],
"9X": ["JDM", "SHAPUR NAGAR", "BALANAGAR", "MOOSAPET", "Erragadda", "ESI", "Ameerpet", "Panjagutta", "Kachiguda", "L.K. POOL", "KCTI", "IBS", "Afzal Gunj", "CMNR"],
"9Y": ["YOUSUFGUDA", "SIET", "STATE HOME", "Ameerpet", "Panjagutta", "Kachiguda", "N. PALLY", "MJ. MARKET", "Afzal Gunj"],
"9Y/F": ["BORABANDA", "YOUSUFGUDA", "Ameerpet", "NIMS", "Kachiguda", "LK. POOL", "N. PALLY", "MJ. MARKET", "CMNR"],
"9Y/G": ["KARMIKANAGAR", "YOUSUFGUDA", "Panjagutta", "Kachiguda", "LK. POOL", "NAMPALLY", "MJ. MARKET", "AFZALGUNJ"],
"9Y/H": ["GAYATRI HILLS", "SRINAGAR COLONY", "Panjagutta", "NIMS", "Kachiguda", "LK. POOL", "ABIDS", "KOTI"],
"9Z": ["N. PALLY", "Kachiguda", "Panjagutta", "Ameerpet", "S.Ram Nagar", "ESI", "Erragadda", "RLY CROSSING", "SIFCO", "ZINKALWADA", "BALANAGAR"],
"10": ["Secunderabad", "PATNY", "PARADISE", "ANAND", "POLICE LINES", "BEGUMPET", "SHAMLAL", "PUBLIC SCHOOL", "GREEN LANDS", "SESHMAHAL", "Ameerpet", "S.Ram Nagar", "ESI", "Erragadda", "ALLWYN", "INDL. ESTATE", "SANATH NAGAR"],
"10A7S": ["ALLWYN COLONY", "KPHB", "KP", "Erragadda", "ESI", "SR NAGAR", "AMEERPET", "GREEN LANDS", "BEGUMPET", "PATNY", "Secunderabad"],
"10B": ["Secunderabad", "PARADISE", "ANAND", "POLICE LINES", "BEGUMPET", "PUBLIC SCHOOL", "GREEN LANDS", "Ameerpet", "S.Ram Nagar", "ESI", "Erragadda", "BARATH NAGAR"],
"10B/K": ["UDYNAGAR COLONY", "KPHB", "KP", "MOOSAPET", "Erragadda", "SANATH NAGAR", "BALKAMPET", "GREEN LANDS", "BEGUMPET", "PARADISE", "SANGEET", "Secunderabad"],
"10F": ["BORABANDA", "PANDURANGA NAGAR", "Erragadda", "S.Ram Nagar", "Ameerpet", "GREEN LANDS", "Balkampet", "PARADISE", "SANGEET", "Secunderabad"]              
,"104A": ["KOTI WOMENS COLLEGE","CHADERGHAT","CHADERGHAT BUS STOP","MALAKPET SOHAIL HOTEL","GOVERNMENT PRINTING PRESS","SAIDABAD","MADANAPET","I.S SADAN","CHAMPAPET","CHAMPAPET R.T.C COLONY / I.B.P","GREENPARK COLONY","KARMANGHAT","KARMANGHAT X ROAD","KRANTI NAGAR","T.K.R KAMAN / SHAKTI NAGAR","GAYATRI NAGAR X ROAD","MANDA MALLAMA X ROAD","VV NAGAR","JILLELGUDA","LALITHA NAGAR X ROAD","MEERPET X ROAD","MEERPET SWIMMING POOL","SITA HOMES COLONY","PRASHANTHI HILLS","ALMASGUDA","ALMASGUDA P.G COLLEGE","ALMASGUDA","C.Y.R COLONY","MADURA NAGAR","MARUTI NAGAR / Y.S.R NAGAR","RAJIV GRUHA KALPA ALMASGUDA"],

"277": ["IBRAHIMPATNAM", "MANGALPALLY X ROAD", "KOHEDA X ROAD", "BONGLOOR X ROAD", "TURKAYAMJAL", "INJAPUR", "GURRAM GUDA X ROAD", "B.N. REDDY NAGAR", "CHAMPAPET", "I.S. SADAN", "SAIDABAD", "CHADERGHAT", "MGBS"],
"555": [
  "Dilsukhnagar",
  "LB Nagar",
  "Vanasthalipuram",
  "Hayathnagar",
  "Pedda Amberpet",
  "Abdullapurmet",
  "Kothaguda",
  "Toopranpet",
  "Choutuppal (Terminus)"
],
"103": ["KOTI WOMENS COLLEGE","KOTI BUS TERMINAL","KOTI BUS STOP","KOTI","PUTLIBOWLI BUS STOP","CHADERGHAT","CHADERGHAT BUS STOP","NALGONDA CROSS ROADS","SOHAIL HOTEL BUS STOP","CHANCHALGUDA","CHANCHALGUDA JAIL","SAIDABAD","SAIDABAD X ROAD","SAIDABAD BUS STOP","IS SADAN","IS SADAN / SANTOSH NAGAR","CHAMPAPET (BRILLIANT GL SCHOOL)","CHAMPAPET GANDHI PUTLA","OWAISI HOSPITAL","MIDANI X ROADS","DRDL","HAFIZ BABA NAGAR BUS STOP","BABA NAGAR","JUNCTION BUS STOP","KESHAVAGIRI","CHANDRAYAN GUTTA POLICE STATION BUS STOP","CHANDRAYANAGUTTA","ABBAS STADIUM BARKAS","BARKAS","PELI DARGA","YERRAKUNTA X ROAD","SADATH NAGAR","SHAHEEN NAGAR / OSMANIA HOTEL","QUBA COLONY","QUBA COLONY","JALAPALLI","PAHADI SHARIF"],

"277K": [
  "Koti Womens College",
  "Chaderghat",
  "Chaderghat Bus Stop",
  "Malakpet Sohail Hotel",
  "Government Printing Press",
  "Saidabad",
  "Madanapet",
  "I.S Sadan",
  "Champapet",
  "Champapet RTC Colony / IBP",
  "Greenpark Colony",
  "Karmanghat",
  "Mytri Nagar",
  "Bairamalguda",
  "LB Nagar",
  "Omkar Nagar",
  "Santoshi Mata Mandir",
  "Hastinapuram",
  "Hastinapur South (Naveena College)",
  "Teachers Colony",
  "B.N Reddy Nagar (Bager Hospital)",
  "B.N Reddy Nagar",
  "Sagar Complex",
  "Swami Narayan Colony",
  "Gurram Guda X Road",
  "Injapur",
  "Yamjal Katta Maisamma",
  "Rokkam Sathi Reddy Garden",
  "Turkyamjal",
  "Brahmanpally",
  "Ragannaguda",
  "Manneguda X Road",
  "Bongloor X Road",
  "Koheda X Road",
  "Mangalpally X Road",
  "Mangalpally",
  "Saheeb Guda X Road",
  "Kongara Kalan"
]};


async function seedDB() {
  try {

 const formattedRoutes = Object.entries(routes1).map(
      ([busNumber, stops]) => ({
        busNumber,
        stops
      })
    );
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas connected");

     await Route.deleteMany({});
     console.log("🗑️ Old routes cleared");

     await Route.insertMany(formattedRoutes);
    console.log("Routes inserted successfully");

  } catch (err) {
    console.error("❌ Error seeding DB:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected");
  }
}

seedDB();
