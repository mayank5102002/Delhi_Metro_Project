const numToStations = {};
const stationsToNum = {};
const graph = {};
const interchangeStation = {};
const noOfStations = 295;


//Stations with their respective numbering
numToStations[1] = "Adarsh Nagar";
numToStations[2] = "Aiims";
numToStations[3] = "Airport (T-3)";
numToStations[4] = "Akshardham";
numToStations[5] = "Anand Vihar ISBT";
numToStations[6] = "Anand Vihar ISBT - Blue Line";
numToStations[7] = "Anand Vihar ISBT - Pink Line";
numToStations[8] = "Arjan Garh";
numToStations[9] = "Arthala";
numToStations[10] = "Ashok Park Main";
numToStations[11] = "Ashram";
numToStations[12] = "Azadpur";
numToStations[13] = "Azadpur - Yellow Line";
numToStations[14] = "Azadpur - Pink Line";
numToStations[15] = "Badarpur Border";
numToStations[16] = "Badkal Mor";
numToStations[17] = "Bahadurgarh City";
numToStations[18] = "Barakhamba Road";
numToStations[19] = "Bata Chowk";
numToStations[20] = "Belvedere Towers";
numToStations[21] = "Bhikaji Cama Place";
numToStations[22] = "Botanical Garden";
numToStations[23] = "Botanical Garden - Blue Line";
numToStations[24] = "Botanical Garden - Magenta Line";
numToStations[25] = "Brigadier Hoshiyar Singh";
numToStations[26] = "Central Secretariat";
numToStations[27] = "Central Secretariat - Yellow Line";
numToStations[28] = "Central Secretariat - Violet Line";
numToStations[29] = "Chandni Chowk";
numToStations[30] = "Chawri Bazar";
numToStations[31] = "Chhatarpur";
numToStations[32] = "Chirag Delhi";
numToStations[33] = "Civil Lines";
numToStations[34] = "Cyber City";
numToStations[35] = "Dabri Mor - Janakpuri South";
numToStations[36] = "Dashrath Puri";
numToStations[37] = "Delhi Aerocity";
numToStations[38] = "Delhi Cantonment";
numToStations[39] = "Delhi Gate";
numToStations[40] = "Dhansa Bus Stand";
numToStations[41] = "Dhaula Kuan";
numToStations[42] = "Dhaula Kuan - Orange Line";
numToStations[43] = "Dhaula Kuan - FOB";
numToStations[44] = "Dilli Haat - INA";
numToStations[45] = "Dilli Haat - INA - Yellow Line";
numToStations[46] = "Dilli Haat - INA - Pink Line";
numToStations[47] = "Dilshad Garden";
numToStations[48] = "Durgabai Deshmukh South Campus";
numToStations[49] = "Durgabai Deshmukh South Campus - Pink Line";
numToStations[50] = "Durgabai Deshmukh South Campus - FOB";
numToStations[51] = "Dwarka";
numToStations[52] = "Dwarka - Grey Line";
numToStations[53] = "Dwarka - Blue Line";
numToStations[54] = "Dwarka Mor";
numToStations[55] = "Dwarka Sector 10";
numToStations[56] = "Dwarka Sector 11";
numToStations[57] = "Dwarka Sector 12";
numToStations[58] = "Dwarka Sector 13";
numToStations[59] = "Dwarka Sector 14";
numToStations[60] = "Dwarka Sector 21";
numToStations[61] = "Dwarka Sector 21 - Blue Line";
numToStations[62] = "Dwarka Sector 21 - Orange Line";
numToStations[63] = "Dwarka Sector 8";
numToStations[64] = "Dwarka Sector 9";
numToStations[65] = "East Azad Nagar";
numToStations[66] = "East Vinod Nagar - Mayur Vihar-II";
numToStations[67] = "Escorts Mujesar";
numToStations[68] = "ESI - Basaidarapur";
numToStations[69] = "Ghevra Metro Station";
numToStations[70] = "Ghitorni";
numToStations[71] = "Gokulpuri";
numToStations[72] = "Golf Course";
numToStations[73] = "Govindpuri";
numToStations[74] = "Greater Kailash";
numToStations[75] = "Green Park";
numToStations[76] = "Guru Teg Bahadur(GTB) Nagar";
numToStations[77] = "Guru Dronacharya";
numToStations[78] = "Haiderpur Badli Mor";
numToStations[79] = "Harkesh Nagar Okhla";
numToStations[80] = "Hauz Khas";
numToStations[81] = "Hauz Khas - Yellow Line";
numToStations[82] = "Hauz Khas - Magenta Line";
numToStations[83] = "Hindon River";
numToStations[84] = "HUDA City Centre";
numToStations[85] = "IFFCO Chowk";
numToStations[86] = "IIT Delhi";
numToStations[87] = "I.P.Extension";
numToStations[88] = "Sector-54 Chowk";
numToStations[89] = "Inderlok";
numToStations[90] = "Inderlok - Green Line";
numToStations[91] = "Inderlok - Red Line";
numToStations[92] = "Indraprastha";
numToStations[93] = "ITO";
numToStations[94] = "Jafrabad";
numToStations[95] = "Jahangirpuri";
numToStations[96] = "Jama Masjid";
numToStations[97] = "Jamia Millia Islamia";
numToStations[98] = "Janakpuri East";
numToStations[99] = "Janakpuri West";
numToStations[100] = "Janakpuri West - Blue Line";
numToStations[101] = "Janakpuri West - Magenta Line";
numToStations[102] = "Jangpura";
numToStations[103] = "Janpath";
numToStations[104] = "Jasola Vihar Shaheen Bagh";
numToStations[105] = "Jasola-Apollo";
numToStations[106] = "Jhandewalan";
numToStations[107] = "Jhilmil";
numToStations[108] = "JLN(Jawaharlal Nehru) Stadium";
numToStations[109] = "Johri Enclave";
numToStations[110] = "Jor Bagh";
numToStations[111] = "Kailash Colony";
numToStations[112] = "Kalindi Kunj";
numToStations[113] = "Kalkaji Mandir";
numToStations[114] = "Kalkaji Mandir - Violet Line";
numToStations[115] = "Kalkjaji Mandir - Magenta Line";
numToStations[116] = "Kanhaiya Nagar";
numToStations[117] = "Karkarduma";
numToStations[118] = "Karkarduma - Blue Line";
numToStations[119] = "Karkarduma - Pink Line";
numToStations[120] = "Karkarduma Court";
numToStations[121] = "Karol Bagh";
numToStations[122] = "Kashmere Gate";
numToStations[123] = "Kashmere Gate - Yellow Line";
numToStations[124] = "Kashmere Gate - Red Line";
numToStations[125] = "Kashmere Gate - Violet Line";
numToStations[126] = "Kaushambi";
numToStations[127] = "Keshav Puram";
numToStations[128] = "Khan Market";
numToStations[129] = "Kirti Nagar";
numToStations[130] = "Kirti Nagar - Blue Line";
numToStations[131] = "Kirti Nagar - Green Line";
numToStations[132] = "Kohat Enclave";
numToStations[133] = "Krishna Nagar";
numToStations[134] = "Lajpat Nagar";
numToStations[135] = "Lajpat Nagar - Violet Line";
numToStations[136] = "Lajpat Nagar - Pink Line";
numToStations[137] = "Lal Qila";
numToStations[138] = "Laxmi Nagar";
numToStations[139] = "Lok Kalyan Marg";
numToStations[140] = "Madipur";
numToStations[141] = "Maharaja Surajmal Stadium";
numToStations[142] = "Majlis Park";
numToStations[143] = "Major Mohit Sharma Rajendra Nagar";
numToStations[144] = "Malviya Nagar";
numToStations[145] = "Mandawali - West Vinod Nagar";
numToStations[146] = "Mandi House";
numToStations[147] = "Mandi House - Blue Line";
numToStations[148] = "Mandi House - Violet Line";
numToStations[149] = "Mansarovar Park";
numToStations[150] = "Maujpur - Babarpur";
numToStations[151] = "Mayapuri";
numToStations[152] = "Mayur Vihar Extension";
numToStations[153] = "Mayur Vihar-I";
numToStations[154] = "Mayur Vihar-I - Blue Line";
numToStations[155] = "Mayur Vihar-I - Pink Line";
numToStations[156] = "Mayur Vihar Pocket I";
numToStations[157] = "Mewala Maharajpur";
numToStations[158] = "MG Road";
numToStations[159] = "Model Town";
numToStations[160] = "Mohan Estate";
numToStations[161] = "Mohan Nagar";
numToStations[162] = "Moolchand";
numToStations[163] = "Moti Nagar";
numToStations[164] = "Moulsari Avenue";
numToStations[165] = "Mundka";
numToStations[166] = "Mundka Industrial Area(MIA)";
numToStations[167] = "Munirka";
numToStations[168] = "Najafgarh";
numToStations[169] = "Nangli";
numToStations[170] = "Nangloi";
numToStations[171] = "Nangloi Railway Station";
numToStations[172] = "Naraina Vihar";
numToStations[173] = "Nawada";
numToStations[174] = "Neelam Chowk Ajronda";
numToStations[175] = "Nehru Enclave";
numToStations[176] = "Nehru Place";
numToStations[177] = "Netaji Subhash Place";
numToStations[178] = "Netaji Subhash Place - Red Line";
numToStations[179] = "Netaji Subhash Place - Pink Line";
numToStations[180] = "New Ashok Nagar";
numToStations[181] = "New Delhi";
numToStations[182] = "New Delhi - Yellow Line";
numToStations[183] = "New Delhi - Orange Line";
numToStations[184] = "NHPC Chowk";
numToStations[185] = "Nirman Vihar";
numToStations[186] = "Noida City Centre";
numToStations[187] = "Noida Electronic City";
numToStations[188] = "Noida Sector 15";
numToStations[189] = "Noida Sector 16";
numToStations[190] = "Noida Sector 18";
numToStations[191] = "Okhla Bird Sanctuary";
numToStations[192] = "Okhla NSIC";
numToStations[193] = "Okhla Vihar";
numToStations[194] = "Old Faridabad";
numToStations[195] = "Palam";
numToStations[196] = "Panchsheel Park";
numToStations[197] = "Pandit Shree Ram Sharma";
numToStations[198] = "Paschim Vihar East";
numToStations[199] = "Paschim Vihar West";
numToStations[200] = "Patel Chowk";
numToStations[201] = "Patel Nagar";
numToStations[202] = "Peeragarhi";
numToStations[203] = "Phase-1";
numToStations[204] = "Phase-2";
numToStations[205] = "Phase-3";
numToStations[206] = "Pitampura";
numToStations[207] = "Pratap Nagar";
numToStations[208] = "Preet Vihar";
numToStations[209] = "Pul Bangash";
numToStations[210] = "Punjabi Bagh";
numToStations[211] = "Punjabi Bagh West";
numToStations[212] = "Punjabi Bagh West - Pink Line";
numToStations[213] = "Punjabi Bagh West - Green Line";
numToStations[214] = "Qutab Minar";
numToStations[215] = "R. K. Puram";
numToStations[216] = "Raj Bagh";
numToStations[217] = "Raja Nahar Singh(Ballabhgarh)";
numToStations[218] = "Rajdhani Park";
numToStations[219] = "Rajendra Place";
numToStations[220] = "Rajiv Chowk";
numToStations[221] = "Rajiv Chowk - Yellow Line";
numToStations[222] = "Rajiv Chowk - Blue Line";
numToStations[223] = "Rajouri Garden";
numToStations[224] = "Rajouri Garden - Blue Line";
numToStations[225] = "Rajouri Garden - Pink Line";
numToStations[226] = "Ramesh Nagar";
numToStations[227] = "Rithala";
numToStations[228] = "Ramakrishna Ashram Marg";
numToStations[229] = "Rohini East";
numToStations[230] = "Rohini West";
numToStations[231] = "Rohini Sector 18, 19";
numToStations[232] = "Sadar Bazaar Cantonment";
numToStations[233] = "Saket";
numToStations[234] = "Samaypur Badli";
numToStations[235] = "Sant Surdas (Sihi)";
numToStations[236] = "Sarai";
numToStations[237] = "Sarai Kale Khan - Nizamuddin";
numToStations[238] = "Sarita Vihar";
numToStations[239] = "Sarojini Nagar";
numToStations[240] = "Satguru Ram Singh Marg";
numToStations[241] = "Sector-34 Noida";
numToStations[242] = "Sector-52 Noida";
numToStations[243] = "Sector-59 Noida";
numToStations[244] = "Sector-61 Noida";
numToStations[245] = "Sector-62 Noida";
numToStations[246] = "Sector-42-43";
numToStations[247] = "Sector-53-54";
numToStations[248] = "Sector 28";
numToStations[249] = "Seelampur";
numToStations[250] = "Shadipur";
numToStations[251] = "Shahdara";
numToStations[252] = "Shaheed Nagar";
numToStations[253] = "Shaheed Sthal(New Bus Adda)";
numToStations[254] = "Shakurpur";
numToStations[255] = "Shalimar Bagh";
numToStations[256] = "Shankar Vihar";
numToStations[257] = "Shastri Nagar";
numToStations[258] = "Shastri Park";
numToStations[259] = "Shiv Vihar";
numToStations[260] = "Shivaji Park";
numToStations[261] = "Shivaji Stadium";
numToStations[262] = "Shyam Park";
numToStations[263] = "Sikanderpur";
numToStations[264] = "Sikanderpur - Yellow Line";
numToStations[265] = "Sikanderpur - RMGL";
numToStations[266] = "Sir M. Vishweshwaraiah Moti Bagh";
numToStations[267] = "South Extension";
numToStations[268] = "Subhash Nagar";
numToStations[269] = "Sukhdev Vihar";
numToStations[270] = "Sultanpur";
numToStations[271] = "Supreme Court";
numToStations[272] = "Tagore Garden";
numToStations[273] = "Terminal 1-IGI Airport";
numToStations[274] = "Tikri Border";
numToStations[275] = "Tikri Kalan";
numToStations[276] = "Tilak Nagar";
numToStations[277] = "Tis Hazari";
numToStations[278] = "Trilokpuri-Sanjay Lake";
numToStations[279] = "Tughlakabad Station";
numToStations[280] = "Udyog Bhawan";
numToStations[281] = "Udyog Nagar";
numToStations[282] = "Uttam Nagar East";
numToStations[283] = "Uttam Nagar West";
numToStations[284] = "Vaishali";
numToStations[285] = "Vasant Vihar";
numToStations[286] = "Vidhan Sabha";
numToStations[287] = "Vinobapuri";
numToStations[288] = "VishwaVidyalaya";
numToStations[289] = "Welcome";
numToStations[290] = "Welcome - Red Line";
numToStations[291] = "Welcome - Pink Line";
numToStations[292] = "Yamuna Bank";
numToStations[293] = "Yamuna Bank - Blue Line - Platform 1";
numToStations[294] = "Yamuna Bank - Blue Line - PlatForm 3";
numToStations[295] = "Sector 55-56";

//Numbering with their respective Stations name
stationsToNum["Adarsh Nagar"] = 1;
stationsToNum["Aiims"] = 2;
stationsToNum["Airport (T-3)"] = 3;
stationsToNum["Akshardham"] = 4;
stationsToNum["Anand Vihar ISBT"] = 5;
stationsToNum["Anand Vihar ISBT - Blue Line"] = 6;
stationsToNum["Anand Vihar ISBT - Pink Line"] = 7;
stationsToNum["Arjan Garh"] = 8;
stationsToNum["Arthala"] = 9;
stationsToNum["Ashok Park Main"] = 10;
stationsToNum["Ashram"] = 11;
stationsToNum["Azadpur"] = 12;
stationsToNum["Azadpur - Yellow Line"] = 13;
stationsToNum["Azadpur - Pink Line"] = 14;
stationsToNum["Badarpur Border"] = 15;
stationsToNum["Badkal Mor"] = 16;
stationsToNum["Bahadurgarh City"] = 17;
stationsToNum["Barakhamba Road"] = 18;
stationsToNum["Bata Chowk"] = 19;
stationsToNum["Adarsh Nagar"] = 1;
stationsToNum["Belvedere Towers"] = 20;
stationsToNum["Bhikaji Cama Place"] = 21;
stationsToNum["Botanical Garden"] = 22;
stationsToNum["Botanical Garden - Blue Line"] = 23;
stationsToNum["Botanical Garden - Magenta Line"] = 24;
stationsToNum["Brigadier Hoshiyar Singh"] = 25;
stationsToNum["Central Secretariat"] = 26;
stationsToNum["Central Secretariat - Yellow Line"] = 27;
stationsToNum["Central Secretariat - Violet Line"] = 28;
stationsToNum["Chandni Chowk"] = 29;
stationsToNum["Chawri Bazar"] = 30;
stationsToNum["Chhatarpur"] = 31;
stationsToNum["Chirag Delhi"] = 32;
stationsToNum["Civil Lines"] = 33;
stationsToNum["Cyber City"] = 34;
stationsToNum["Dabri Mor - Janakpuri South"] = 35;
stationsToNum["Dashrath Puri"] = 36;
stationsToNum["Delhi Aerocity"] = 37;
stationsToNum["Delhi Cantonment"] = 38;
stationsToNum["Delhi Gate"] = 39;
stationsToNum["Dhansa Bus Stand"] = 40;
stationsToNum["Dhaula Kuan"] = 41;
stationsToNum["Dhaula Kuan - Orange Line"] = 42;
stationsToNum["Dhaula Kuan - FOB"] = 43;
stationsToNum["Dilli Haat - INA"] = 44;
stationsToNum["Dilli Haat - INA - Yellow Line"] = 45;
stationsToNum["Dilli Haat - INA - Pink Line"] = 46;
stationsToNum["Dilshad Garden"] = 47;
stationsToNum["Durgabai Deshmukh South Campus"] = 48;
stationsToNum["Durgabai Deshmukh South Campus - Pink Line"] = 49;
stationsToNum["Durgabai Deshmukh South Campus - FOB"] = 50;
stationsToNum["Dwarka"] = 51;
stationsToNum["Dwarka - Grey Line"] = 52;
stationsToNum["Dwarka - Blue Line"] = 53;
stationsToNum["Dwarka Mor"] = 54;
stationsToNum["Dwarka Sector 10"] = 55;
stationsToNum["Dwarka Sector 11"] = 56;
stationsToNum["Dwarka Sector 12"] = 57;
stationsToNum["Dwarka Sector 13"] = 58;
stationsToNum["Dwarka Sector 14"] = 59;
stationsToNum["Dwarka Sector 21"] = 60;
stationsToNum["Dwarka Sector 21 - Blue Line"] = 61;
stationsToNum["Dwarka Sector 21 - Orange Line"] = 62;
stationsToNum["Dwarka Sector 8"] = 63;
stationsToNum["Dwarka Sector 9"] = 64;
stationsToNum["East Azad Nagar"] = 65;
stationsToNum["East Vinod Nagar - Mayur Vihar-II"] = 66;
stationsToNum["Escorts Mujesar"] = 67;
stationsToNum["ESI - Basaidarapur"] = 68;
stationsToNum["Ghevra Metro Station"] = 69;
stationsToNum["Ghitorni"] = 70;
stationsToNum["Gokulpuri"] = 71;
stationsToNum["Golf Course"] = 72;
stationsToNum["Govindpuri"] = 73;
stationsToNum["Greater Kailash"] = 74;
stationsToNum["Green Park"] = 75;
stationsToNum["Guru Teg Bahadur(GTB) Nagar"] = 76;
stationsToNum["Guru Dronacharya"] = 77;
stationsToNum["Haiderpur Badli Mor"] = 78;
stationsToNum["Harkesh Nagar Okhla"] = 79;
stationsToNum["Hauz Khas"] = 80;
stationsToNum["Hauz Khas - Yellow Line"] = 81;
stationsToNum["Hauz Khas - Magenta Line"] = 82;
stationsToNum["Hindon River"] = 83;
stationsToNum["HUDA City Centre"] = 84;
stationsToNum["IFFCO Chowk"] = 85;
stationsToNum["IIT Delhi"] = 86;
stationsToNum["I.P.Extension"] = 87;
stationsToNum["Sector-54 Chowk"] = 88;
stationsToNum["Inderlok"] = 89;
stationsToNum["Inderlok - Green Line"] = 90;
stationsToNum["Inderlok - Red Line"] = 91;
stationsToNum["Indraprastha"] = 92;
stationsToNum["ITO"] = 93;
stationsToNum["Jafrabad"] = 94;
stationsToNum["Jahangirpuri"] = 95;
stationsToNum["Jama Masjid"] = 96;
stationsToNum["Jamia Millia Islamia"] = 97;
stationsToNum["Janakpuri East"] = 98;
stationsToNum["Janakpuri West"] = 99;
stationsToNum["Janakpuri West - Blue Line"] = 100;
stationsToNum["Janakpuri West - Magenta Line"] = 101;
stationsToNum["Jangpura"] = 102;
stationsToNum["Janpath"] = 103;
stationsToNum["Jasola Vihar Shaheen Bagh"] = 104;
stationsToNum["Jasola-Apollo"] = 105;
stationsToNum["Jhandewalan"] = 106;
stationsToNum["Jhilmil"] = 107;
stationsToNum["JLN(Jawaharlal Nehru) Stadium"] = 108;
stationsToNum["Johri Enclave"] = 109;
stationsToNum["Jor Bagh"] = 110;
stationsToNum["Kailash Colony"] = 111;
stationsToNum["Kalindi Kunj"] = 112;
stationsToNum["Kalkaji Mandir"] = 113;
stationsToNum["Kalkaji Mandir - Violet Line"] = 114;
stationsToNum["Kalkjaji Mandir - Magenta Line"] = 115;
stationsToNum["Kanhaiya Nagar"] = 116;
stationsToNum["Karkarduma"] = 117;
stationsToNum["Karkarduma - Blue Line"] = 118;
stationsToNum["Karkarduma - Pink Line"] = 119;
stationsToNum["Karkarduma Court"] = 120;
stationsToNum["Karol Bagh"] = 121;
stationsToNum["Kashmere Gate"] = 122;
stationsToNum["Kashmere Gate - Yellow Line"] = 123;
stationsToNum["Kashmere Gate - Red Line"] = 124;
stationsToNum["Kashmere Gate - Violet Line"] = 125;
stationsToNum["Kaushambi"] = 126;
stationsToNum["Keshav Puram"] = 127;
stationsToNum["Khan Market"] = 128;
stationsToNum["Kirti Nagar"] = 129;
stationsToNum["Kirti Nagar - Blue Line"] = 130;
stationsToNum["Kirti Nagar - Green Line"] = 131;
stationsToNum["Kohat Enclave"] = 132;
stationsToNum["Krishna Nagar"] = 133;
stationsToNum["Lajpat Nagar"] = 134;
stationsToNum["Lajpat Nagar - Violet Line"] = 135;
stationsToNum["Lajpat Nagar - Pink Line"] = 136;
stationsToNum["Lal Qila"] = 137;
stationsToNum["Laxmi Nagar"] = 138;
stationsToNum["Lok Kalyan Marg"] = 139;
stationsToNum["Madipur"] = 140;
stationsToNum["Maharaja Surajmal Stadium"] = 141;
stationsToNum["Majlis Park"] = 142;
stationsToNum["Major Mohit Sharma Rajendra Nagar"] = 143;
stationsToNum["Malviya Nagar"] = 144;
stationsToNum["Mandawali - West Vinod Nagar"] = 145;
stationsToNum["Mandi House"] = 146;
stationsToNum["Mandi House - Blue Line"] = 147;
stationsToNum["Mandi House - Violet Line"] = 148;
stationsToNum["Mansarovar Park"] = 149;
stationsToNum["Maujpur - Babarpur"] = 150;
stationsToNum["Mayapuri"] = 151;
stationsToNum["Mayur Vihar Extension"] = 152;
stationsToNum["Mayur Vihar-I"] = 153;
stationsToNum["Mayur Vihar-I - Blue Line"] = 154;
stationsToNum["Mayur Vihar-I - Pink Line"] = 155;
stationsToNum["Mayur Vihar Pocket I"] = 156;
stationsToNum["Mewala Maharajpur"] = 157;
stationsToNum["MG Road"] = 158;
stationsToNum["Model Town"] = 159;
stationsToNum["Mohan Estate"] = 160;
stationsToNum["Mohan Nagar"] = 161;
stationsToNum["Moolchand"] = 162;
stationsToNum["Moti Nagar"] = 163;
stationsToNum["Moulsari Avenue"] = 164;
stationsToNum["Mundka"] = 165;
stationsToNum["Mundka Industrial Area(MIA)"] = 166;
stationsToNum["Munirka"] = 167;
stationsToNum["Najafgarh"] = 168;
stationsToNum["Nangli"] = 169;
stationsToNum["Nangloi"] = 170;
stationsToNum["Nangloi Railway Station"] = 171;
stationsToNum["Naraina Vihar"] = 172;
stationsToNum["Nawada"] = 173;
stationsToNum["Neelam Chowk Ajronda"] = 174;
stationsToNum["Nehru Enclave"] = 175;
stationsToNum["Nehru Place"] = 176;
stationsToNum["Netaji Subhash Place"] = 177;
stationsToNum["Netaji Subhash Place - Red Line"] = 178;
stationsToNum["Netaji Subhash Place - Pink Line"] = 179;
stationsToNum["New Ashok Nagar"] = 180;
stationsToNum["New Delhi"] = 181;
stationsToNum["New Delhi - Yellow Line"] = 182;
stationsToNum["New Delhi - Orange Line"] = 183;
stationsToNum["NHPC Chowk"] = 184;
stationsToNum["Nirman Vihar"] = 185;
stationsToNum["Noida City Centre"] = 186;
stationsToNum["Noida Electronic City"] = 187;
stationsToNum["Noida Sector 15"] = 188;
stationsToNum["Noida Sector 16"] = 189;
stationsToNum["Noida Sector 18"] = 190;
stationsToNum["Okhla Bird Sanctuary"] = 191;
stationsToNum["Okhla NSIC"] = 192;
stationsToNum["Okhla Vihar"] = 193;
stationsToNum["Old Faridabad"] = 194;
stationsToNum["Palam"] = 195;
stationsToNum["Panchsheel Park"] = 196;
stationsToNum["Pandit Shree Ram Sharma"] = 197;
stationsToNum["Paschim Vihar East"] = 198;
stationsToNum["Paschim Vihar West"] = 199;
stationsToNum["Patel Chowk"] = 200;
stationsToNum["Patel Nagar"] = 201;
stationsToNum["Peeragarhi"] = 202;
stationsToNum["Phase-1"] = 203;
stationsToNum["Phase-2"] = 204;
stationsToNum["Phase-3"] = 205;
stationsToNum["Pitampura"] = 206;
stationsToNum["Pratap Nagar"] = 207;
stationsToNum["Preet Vihar"] = 208;
stationsToNum["Pul Bangash"] = 209;
stationsToNum["Punjabi Bagh"] = 210;
stationsToNum["Punjabi Bagh West"] = 211;
stationsToNum["Punjabi Bagh West - Pink Line"] = 212;
stationsToNum["Punjabi Bagh West - Green Line"] = 213;
stationsToNum["Qutab Minar"] = 214;
stationsToNum["R. K. Puram"] = 215;
stationsToNum["Raj Bagh"] = 216;
stationsToNum["Raja Nahar Singh(Ballabhgarh)"] = 217;
stationsToNum["Rajdhani Park"] = 218;
stationsToNum["Rajendra Place"] = 219;
stationsToNum["Rajiv Chowk"] = 220;
stationsToNum["Rajiv Chowk - Yellow Line"] = 221;
stationsToNum["Rajiv Chowk - Blue Line"] = 222;
stationsToNum["Rajouri Garden"] = 223;
stationsToNum["Rajouri Garden - Blue Line"] = 224;
stationsToNum["Rajouri Garden - Pink Line"] = 225;
stationsToNum["Ramesh Nagar"] = 226;
stationsToNum["Rithala"] = 227;
stationsToNum["Ramakrishna Ashram Marg"] = 228;
stationsToNum["Rohini East"] = 229;
stationsToNum["Rohini West"] = 230;
stationsToNum["Rohini Sector 18, 19"] = 231;
stationsToNum["Sadar Bazaar Cantonment"] = 232;
stationsToNum["Saket"] = 233;
stationsToNum["Samaypur Badli"] = 234;
stationsToNum["Sant Surdas (Sihi)"] = 235;
stationsToNum["Sarai"] = 236;
stationsToNum["Sarai Kale Khan - Nizamuddin"] = 237;
stationsToNum["Sarita Vihar"] = 238;
stationsToNum["Sarojini Nagar"] = 239;
stationsToNum["Satguru Ram Singh Marg"] = 240;
stationsToNum["Sector-34 Noida"] = 241;
stationsToNum["Sector-52 Noida"] = 242;
stationsToNum["Sector-59 Noida"] = 243;
stationsToNum["Sector-61 Noida"] = 244;
stationsToNum["Sector-62 Noida"] = 245;
stationsToNum["Sector-42-43"] = 246;
stationsToNum["Sector-53-54"] = 247;
stationsToNum["Sector 28"] = 248;
stationsToNum["Seelampur"] = 249;
stationsToNum["Shadipur"] = 250;
stationsToNum["Shahdara"] = 251;
stationsToNum["Shaheed Nagar"] = 252;
stationsToNum["Shaheed Sthal(New Bus Adda)"] = 253;
stationsToNum["Shakurpur"] = 254;
stationsToNum["Shalimar Bagh"] = 255;
stationsToNum["Shankar Vihar"] = 256;
stationsToNum["Shastri Nagar"] = 257;
stationsToNum["Shastri Park"] = 258;
stationsToNum["Shiv Vihar"] = 259;
stationsToNum["Shivaji Park"] = 260;
stationsToNum["Shivaji Stadium"] = 261;
stationsToNum["Shyam Park"] = 262;
stationsToNum["Sikanderpur"] = 263;
stationsToNum["Sikanderpur - Yellow Line"] = 264;
stationsToNum["Sikanderpur - RMGL"] = 265;
stationsToNum["Sir M. Vishweshwaraiah Moti Bagh"] = 266;
stationsToNum["South Extension"] = 267;
stationsToNum["Subhash Nagar"] = 268;
stationsToNum["Sukhdev Vihar"] = 269;
stationsToNum["Sultanpur"] = 270;
stationsToNum["Supreme Court"] = 271;
stationsToNum["Tagore Garden"] = 272;
stationsToNum["Terminal 1-IGI Airport"] = 273;
stationsToNum["Tikri Border"] = 274;
stationsToNum["Tikri Kalan"] = 275;
stationsToNum["Tilak Nagar"] = 276;
stationsToNum["Tis Hazari"] = 277;
stationsToNum["Trilokpuri-Sanjay Lake"] = 278;
stationsToNum["Tughlakabad Station"] = 279;
stationsToNum["Udyog Bhawan"] = 280;
stationsToNum["Udyog Nagar"] = 281;
stationsToNum["Uttam Nagar East"] = 282;
stationsToNum["Uttam Nagar West"] = 283;
stationsToNum["Vaishali"] = 284;
stationsToNum["Vasant Vihar"] = 285;
stationsToNum["Vidhan Sabha"] = 286;
stationsToNum["Vinobapuri"] = 287;
stationsToNum["VishwaVidyalaya"] = 288;
stationsToNum["Welcome"] = 289;
stationsToNum["Welcome - Red Line"] = 290;
stationsToNum["Welcome - Pink Line"] = 291;
stationsToNum["Yamuna Bank"] = 292;
stationsToNum["Yamuna Bank - Blue Line - Platform 1"] = 293;
stationsToNum["Yamuna Bank - Blue Line - PlatForm 3"] = 294;
stationsToNum["Sector 55-56"] = 295;


//Interchanges
interchangeStation[5] = true;
interchangeStation[12] = true;
interchangeStation[22] = true;
interchangeStation[26] = true;
interchangeStation[41] = true;
interchangeStation[44] = true;
interchangeStation[48] = true;
interchangeStation[51] = true;
interchangeStation[60] = true;
interchangeStation[80] = true;
interchangeStation[89] = true;
interchangeStation[99] = true;
interchangeStation[113] = true;
interchangeStation[117] = true;
interchangeStation[122] = true;
interchangeStation[129] = true;
interchangeStation[134] = true;
interchangeStation[146] = true;
interchangeStation[153] = true;
interchangeStation[177] = true;
interchangeStation[181] = true;
interchangeStation[211] = true;
interchangeStation[220] = true;
interchangeStation[223] = true;
interchangeStation[263] = true;
interchangeStation[289] = true;
interchangeStation[292] = true;

//Graph of Delhi Metro
graph[1] = [[95, 2], [13, 2]];
graph[2] = [[45, 1], [75, 2]];
graph[3] = [[62, 4], [37, 6]];
graph[4] = [[293, 3], [154, 2]];
graph[5] = [[6, 0], [7, 0]];
graph[6] = [[7, 5], [126, 2], [118, 2]];
graph[7] = [[6, 5], [119, 2], [87, 4]];
graph[8] = [[70, 3], [77, 3]];
graph[9] = [[161, 1], [83, 2]];
graph[10] = [[90, 2], [210, 2], [240, 3]];
graph[11] = [[237, 2], [287, 3]];
graph[12] = [[13, 0], [14, 0]];
graph[13] = [[14, 10], [1, 2], [159, 2]];
graph[14] = [[13, 10], [255, 2], [142, 3]];
graph[15] = [[279, 2], [236, 2]];
graph[16] = [[248, 2], [194, 2]];
graph[17] = [[25, 2], [197, 2]];
graph[18] = [[222, 2], [147, 1]];
graph[19] = [[174, 2], [67, 2]];
graph[20] = [[204, 2]];
graph[21] = [[266, 2], [239, 2]];
graph[22] = [[23, 0], [24, 0]];
graph[23] = [[24, 5], [190, 1], [72, 2]];
graph[24] = [[23, 5], [191, 3]];
graph[25] = [[17, 2]];
graph[26] = [[27, 0], [28, 0]];
graph[27] = [[28, 5], [200, 2], [280, 2]];
graph[28] = [[27, 5], [128, 4], [103, 2]];
graph[29] = [[123, 2], [30, 2]];
graph[30] = [[29, 2], [182, 1]];
graph[31] = [[214, 2], [270, 2]];
graph[32] = [[196, 1], [72, 1]];
graph[33] = [[286, 2], [123, 2]];
graph[34] = [[20, 2]];
graph[35] = [[36, 2], [101, 2]];
graph[36] = [[35, 2], [195, 2]];
graph[37] = [[3, 6], [42, 6]];
graph[38] = [[172, 2], [49, 5]];
graph[39] = [[96, 2], [93, 2]];
graph[40] = [[168, 1]];
graph[41] = [[42, 0], [43, 0]];
graph[42] = [[37, 6], [261, 6], [43, 5]];
graph[43] = [[42, 5], [50, 15]];
graph[44] = [[45, 0], [46, 0]];
graph[45] = [[46, 10], [110, 2], [2, 1]];
graph[46] = [[45, 10], [239, 2], [267, 2]];
graph[47] = [[107, 1], [252, 2]];
graph[48] = [[49, 0], [50, 0]];
graph[49] = [[50, 5], [38, 5], [266, 2]];
graph[50] = [[49, 5], [43, 15]];
graph[51] = [[52, 0], [53, 0]];
graph[52] = [[53, 5], [169, 2]];
graph[53] = [[52, 5], [54, 2], [59, 2]];
graph[54] = [[53, 2], [173, 1]];
graph[55] = [[56, 1], [64, 2]];
graph[56] = [[57, 2], [55, 1]];
graph[57] = [[58, 1], [56, 2]];
graph[58] = [[57, 1], [59, 1]];
graph[59] = [[58, 1], [53, 2]];
graph[60] = [[61, 0], [62, 0]];
graph[61] = [[62, 5], [63, 3]];
graph[62] = [[61, 5], [3, 4]];
graph[63] = [[64, 1], [62, 3]];
graph[64] = [[63, 1], [55, 2]];
graph[65] = [[133, 1], [291, 2]];
graph[66] = [[145, 2], [278, 2]];
graph[67] = [[19, 2], [235, 2]];
graph[68] = [[212, 2], [225, 1]];
graph[69] = [[275, 2], [166, 2]];
graph[70] = [[270, 2], [8, 3]];
graph[71] = [[109, 2], [150, 2]];
graph[72] = [[186, 1], [23, 2]];
graph[73] = [[79, 2], [114, 1]];
graph[74] = [[32, 1], [175, 2]];
graph[75] = [[2, 2], [81, 2]];
graph[76] = [[159, 2], [288, 1]];
graph[77] = [[8, 3], [264, 1]];
graph[78] = [[231, 2], [95, 2]];
graph[79] = [[73, 2], [105, 2]];
graph[80] = [[81, 0], [82, 0]];
graph[81] = [[82, 10], [75, 2], [144, 2]];
graph[82] = [[81, 10], [86, 1], [196, 2]];
graph[83] = [[9, 2], [253, 1]];
graph[84] = [[85, 2]];
graph[85] = [[84, 2], [158, 2]];
graph[86] = [[215, 1], [82, 1]];
graph[87] = [[145, 2], [7, 4]];
graph[89] = [[90, 0], [91, 0]];
graph[90] = [[91, 5], [10, 2]];
graph[91] = [[90, 5], [116, 2], [257, 2]];
graph[92] = [[271, 1], [293, 2],[294,2]];
graph[93] = [[39, 2], [148, 2]];
graph[94] = [[150, 2], [291, 3]];
graph[95] = [[78, 2], [1, 2]];
graph[96] = [[137, 2], [39, 2]];
graph[97] = [[269, 2], [193, 2]];
graph[98] = [[276, 1], [100, 1]];
graph[99] = [[100, 0], [101, 0]];
graph[100] = [[101, 10], [98, 2], [282, 2]];
graph[101] = [[100, 10], [35, 5]]
graph[102] = [[108, 2], [135, 2]];
graph[103] = [[148, 3], [28, 2]];
graph[104] = [[112, 3], [193, 3]];
graph[105] = [[79, 2], [238, 2]];
graph[106] = [[121, 2], [228, 2]];
graph[107] = [[149, 2], [47, 2]];
graph[108] = [[128, 3], [102, 2]];
graph[109] = [[259, 2], [71, 2]];
graph[110] = [[45, 2], [139, 2]];
graph[111] = [[162, 2], [176, 2]];
graph[112] = [[191, 2], [104, 2]];
graph[113] = [[114, 0], [115, 0]];
graph[114] = [[115, 10], [176, 2], [73, 2]];
graph[115] = [[114, 10], [175, 2], [192, 2]];
graph[116] = [[91, 2], [127, 2]];
graph[117] = [[118, 0], [119, 0]];
graph[118] = [[119, 10], [6, 2], [208, 2]];
graph[119] = [[118, 10], [120, 2], [7, 2]];
graph[120] = [[119, 2], [133, 2]];
graph[121] = [[219, 2], [106, 2]];
graph[122] = [[123, 0], [124, 0], [125, 0]];
graph[123] = [[125, 10], [124, 10], [33, 2], [29, 2]];
graph[124] = [[125, 10], [123, 10], [258, 3], [277, 2]];
graph[125] = [[123, 10], [124, 10], [137, 2]];
graph[126] = [[284, 2], [6, 2]];
graph[127] = [[116, 2], [178, 2]];
graph[128] = [[28, 4], [108, 3]];
graph[129] = [[131, 0], [130, 0]];
graph[130] = [[131, 5], [250, 2], [163, 2]];
graph[131] = [[130, 5], [240, 2]];
graph[132] = [[206, 2], [178, 2]];
graph[133] = [[65, 2], [120, 2]];
graph[134] = [[135, 0], [136, 0]];
graph[135] = [[136, 5], [102, 2], [162, 2]];
graph[136] = [[135, 5], [287, 3], [267, 3]];
graph[137] = [[125, 2], [96, 2]];
graph[138] = [[294, 3], [185, 3]];
graph[139] = [[280, 2], [110, 2]];
graph[140] = [[260, 2], [198, 2]];
graph[141] = [[281, 2], [170, 2]];
graph[142] = [[14, 4]];
graph[143] = [[216, 2], [262, 2]];
graph[144] = [[81, 3], [233, 2]];
graph[145] = [[87, 3], [66, 2]];
graph[146] = [[147, 0], [148, 0]];
graph[147] = [[148, 5], [18, 2], [271, 2]];
graph[148] = [[147, 5], [93, 2], [103, 3]];
graph[149] = [[107, 2], [251, 2]];
graph[150] = [[71, 2], [94, 2]];
graph[151] = [[225, 3], [172, 3]];
graph[152] = [[154, 2], [180, 2]];
graph[153] = [[154, 0], [155, 0]];
graph[154] = [[155, 5], [4, 3], [152, 2]];
graph[155] = [[154, 5], [237, 5], [156, 2]];
graph[156] = [[155, 2], [278, 6]];
graph[157] = [[248, 2], [184, 2]];
graph[158] = [[85, 2], [264, 2]];
graph[159] = [[13, 2], [76, 2]];
graph[160] = [[238, 2], [279, 20]];
graph[161] = [[9, 2], [262, 2]];
graph[162] = [[135, 2], [111, 2]];
graph[163] = [[130, 2], [226, 2]];
graph[164] = [[34, 2]];
graph[165] = [[166, 2], [218, 2]];
graph[166] = [[165, 2], [69, 2]];
graph[167] = [[215, 2], [285, 2]];
graph[168] = [[169, 4], [40, 5]];
graph[169] = [[168, 4], [52, 2]];
graph[170] = [[171, 2], [141, 2]];
graph[171] = [[170, 2], [218, 2]];
graph[172] = [[38, 3], [151, 3]];
graph[173] = [[283, 2], [54, 2]];
graph[174] = [[19, 2], [194, 2]];
graph[175] = [[115, 2], [74, 2]];
graph[176] = [[114, 2], [111, 2]];
graph[177] = [[178, 0], [179, 0]];
graph[178] = [[179, 10], [132, 2], [127, 2]];
graph[179] = [[178, 10], [254, 3], [255, 3]];
graph[180] = [[188, 2], [152, 2]];
graph[181] = [[182, 0], [183, 0]];
graph[182] = [[183, 10], [221, 2], [30, 2]];
graph[183] = [[182, 10], [261, 3]];
graph[184] = [[236, 2], [157, 2]];
graph[185] = [[138, 2], [208, 2]];
graph[186] = [[72, 2], [241, 2]];
graph[187] = [[245, 2]];
graph[188] = [[189, 2], [180, 2]];
graph[189] = [[188, 2], [190, 2]];
graph[190] = [[189, 2], [23, 2]];
graph[191] = [[24, 3], [112, 2]];
graph[192] = [[115, 2], [269, 2]];
graph[193] = [[97, 2], [104, 5]];
graph[194] = [[16, 2], [174, 2]];
graph[195] = [[232, 4], [36, 2]];
graph[196] = [[32, 2], [82, 3]];
graph[197] = [[274, 2], [17, 2]];
graph[198] = [[199, 2], [140, 2]];
graph[199] = [[198, 2], [202, 2]];
graph[200] = [[221, 2], [27, 2]];
graph[201] = [[250, 2], [219, 2]];
graph[202] = [[281, 2], [199, 2]];
graph[203] = [[265, 2], [246, 2]];
graph[204] = [[205, 2], [265, 2]];
graph[205] = [[164, 2]];
graph[206] = [[229, 2], [132, 2]];
graph[207] = [[257, 2], [209, 2]];
graph[208] = [[118, 2], [185, 2]];
graph[209] = [[207, 2], [277, 2]];
graph[210] = [[10, 2], [213, 2]];
graph[211] = [[212, 0], [213, 0]];
graph[212] = [[213, 5], [254, 3], [68, 3]];
graph[213] = [[210, 2], [260, 2], [212, 5]];
graph[214] = [[233, 3], [31, 3]];
graph[215] = [[167, 2], [86, 2]];
graph[216] = [[143, 2], [252, 2]];
graph[217] = [[235, 4]];
graph[218] = [[171, 2], [165, 2]];
graph[219] = [[201, 2], [121, 2]];
graph[220] = [[221, 0], [222, 0]];
graph[221] = [[222, 5], [200, 2], [182, 2]];
graph[222] = [[221, 5], [18, 2], [228, 2]];
graph[223] = [[224, 0], [225, 0]];
graph[224] = [[225, 10], [226, 2], [272, 2]];
graph[225] = [[224, 10], [68, 2], [151, 3]];
graph[226] = [[224, 2], [163, 2]];
graph[227] = [[230, 2]];
graph[228] = [[222, 2], [106, 2]];
graph[229] = [[206, 2], [230, 2]];
graph[230] = [[229, 2], [227, 2]];
graph[231] = [[78, 3], [234, 2]];
graph[232] = [[273, 3], [195, 4]];
graph[233] = [[214, 3], [144, 2]];
graph[234] = [[231, 2]];
graph[235] = [[217, 4], [67, 3]];
graph[236] = [[15, 3], [184, 3]];
graph[237] = [[11, 3], [155, 5]];
graph[238] = [[160, 2], [105, 2]];
graph[239] = [[46, 2], [21, 2]];
graph[240] = [[10, 3], [131, 2]];
graph[241] = [[186, 2], [242, 2]];
graph[242] = [[241, 2], [244, 2]];
graph[243] = [[244, 2], [245, 2]];
graph[244] = [[242, 2], [243, 2]];
graph[245] = [[243, 2], [187, 2]];
graph[246] = [[203, 2], [247, 2]];
graph[247] = [[246, 2], [88, 2]];
graph[88] = [[247, 2], [295, 2]]
graph[248] = [[16, 2], [157, 2]];
graph[249] = [[258, 2], [290, 2]];
graph[250] = [[201, 2], [130, 2]];
graph[251] = [[149, 2], [290, 2]];
graph[252] = [[216, 2], [47, 2]];
graph[253] = [[83, 2]];
graph[254] = [[212, 2], [179, 2]];
graph[255] = [[14, 3], [179, 3]];
graph[256] = [[273, 3], [285, 3]];
graph[257] = [[91, 2], [207, 2]];
graph[258] = [[249, 2], [124, 3]];
graph[259] = [[109, 2]];
graph[260] = [[213, 2], [140, 2]];
graph[261] = [[42, 6], [183, 3]];
graph[262] = [[161, 2], [143, 2]];
graph[263] = [[264, 0], [265, 0]];
graph[264] = [[265, 10], [158, 2], [77, 2]];
graph[265] = [[203, 2], [204, 2], [264, 10]];
graph[266] = [[21, 3], [49, 3]];
graph[267] = [[136, 3], [46, 2]];
graph[268] = [[272, 2], [276, 2]];
graph[269] = [[192, 2], [97, 2]];
graph[270] = [[31, 3], [70, 2]];
graph[271] = [[147, 2], [92, 2]];
graph[272] = [[224, 2], [268, 2]];
graph[273] = [[232, 3], [256, 3]];
graph[274] = [[197, 2], [275, 2]];
graph[275] = [[274, 2], [69, 3]];
graph[276] = [[268, 2], [98, 2]];
graph[277] = [[209, 2], [124, 2]];
graph[278] = [[156, 6], [66, 2]];
graph[279] = [[160, 3], [15, 2]];
graph[280] = [[27, 2], [139, 2]];
graph[281] = [[202, 2], [141, 2]];
graph[282] = [[100, 2], [283, 2]];
graph[283] = [[282, 2], [173, 2]];
graph[284] = [[126, 2]];
graph[285] = [[256, 3], [167, 3]];
graph[286] = [[33, 2], [288, 2]];
graph[287] = [[11, 3], [136, 3]];
graph[288] = [[286, 2], [76, 2]];
graph[289] = [[290, 0], [291, 0]];
graph[290] = [[249, 2], [251, 2], [291, 5]];
graph[291] = [[290, 5], [65, 2], [94, 3]];
graph[292] = [[293, 0], [294, 0]];
graph[293] = [[92, 3], [4, 3], [294, 5]];
graph[294] = [[92, 3], [138, 3], [293, 5]];
graph[295] = [[88, 2]];



module.exports = {
  stationsToNum,
  numToStations,
  graph,
  interchangeStation,
  noOfStations
};