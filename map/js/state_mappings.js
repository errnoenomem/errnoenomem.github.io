/* 
    Create key/value pair mappings below
    Create get method to get value via key
    Modify 'overlay.js' by inserting into openOverlay method where needed
    Keys must be 'st_x', (x = 1 - 50)
*/

var state_mapping =  {
    "st_1": "Alabama",
    "st_2": "Alaska",
    "st_3": "Arizona",
    "st_4": "Arkansas",
    "st_5": "California",
    "st_6": "Colorado",
    "st_7": "Connecticut",
    "st_8": "Delaware",
    "st_9": "Florida",
    "st_10": "Georgia",
    "st_11": "Hawaii",
    "st_12": "Idaho",
    "st_13": "Illinois",
    "st_14": "Indiana",
    "st_15": "Iowa",
    "st_16": "Kansas",
    "st_17": "Kentucky",
    "st_18": "Louisiana",
    "st_19": "Maine",
    "st_20": "Maryland",
    "st_21": "Massachusetts",
    "st_22": "Michigan",
    "st_23": "Minnesota",
    "st_24": "Mississippi",
    "st_25": "Missouri",
    "st_26": "Montana",
    "st_27": "Nebraska",
    "st_28": "Nevada",
    "st_29": "New Hampshire",
    "st_30": "New Jersey",
    "st_31": "New Mexico",
    "st_32": "New York",
    "st_33": "North Carolina",
    "st_34": "North Dakota",
    "st_35": "Ohio",
    "st_36": "Oklahoma",
    "st_37": "Oregon",
    "st_38": "Pennsylvania",
    "st_39": "Rhode Island",
    "st_40": "South Carolina",
    "st_41": "South Dakota",
    "st_42": "Tennessee",
    "st_43": "Texas",
    "st_44": "Utah",
    "st_45": "Vermont",
    "st_46": "Virginia",
    "st_47": "Washington",
    "st_48": "West Virginia",
    "st_49": "Wisconsin",
    "st_50": "Wyoming"
}

function getState(key) {
    return state_mapping[key];
}

var state_img = {
    "st_1": "alabama.jpg",
    "st_2": "alaska.jpg",
    "st_3": "arizona.jpg",
    "st_4": "arkansas.jpg",
    "st_5": "california.jpg",
    "st_6": "colorado.jpg",
    "st_7": "connecticut.jpg",
    "st_8": "delaware.jpg",
    "st_9": "florida.jpg",
    "st_10": "georgia.jpg",
    "st_11": "hawaii.jpg",
    "st_12": "idaho.jpg",
    "st_13": "illinois.jpg",
    "st_14": "indiana.jpg",
    "st_15": "iowa.jpg",
    "st_16": "kansas.jpg",
    "st_17": "kentucky.jpg",
    "st_18": "louisiana.jpg",
    "st_19": "maine.jpg",
    "st_20": "maryland.jpg",
    "st_21": "massachusetts.jpg",
    "st_22": "michigan.jpg",
    "st_23": "minnesota.jpg",
    "st_24": "mississippi.jpg",
    "st_25": "missouri.jpg",
    "st_26": "montana.jpg",
    "st_27": "nebraska.jpg",
    "st_28": "nevada.jpg",
    "st_29": "newhampshire.jpg",
    "st_30": "newjersey.jpg",
    "st_31": "newmexico.jpg",
    "st_32": "newyork.jpg",
    "st_33": "northcarolina.jpg",
    "st_34": "northdakota.jpg",
    "st_35": "ohio.jpg",
    "st_36": "oklahoma.jpg",
    "st_37": "oregon.jpg",
    "st_38": "pennsylvania.jpg",
    "st_39": "rhodeisland.jpg",
    "st_40": "southcarolina.jpg",
    "st_41": "southdakota.jpg",
    "st_42": "tennessee.jpg",
    "st_43": "texas.jpg",
    "st_44": "utah.jpg",
    "st_45": "vermont.jpg",
    "st_46": "virginia.jpg",
    "st_47": "washington.jpg",
    "st_48": "westvirginia.jpg",
    "st_49": "wisconsin.jpg",
    "st_50": "wyoming.jpg"
}

function getStateImg(key) {
    return state_img[key];
}

var opt_img = {
    "st_1": "",
    "st_2": "",
    "st_3": "",
    "st_4": "",
    "st_5": "",
    "st_6": "",
    "st_7": "",
    "st_8": "",
    "st_9": "",
    "st_10": "",
    "st_11": "",
    "st_12": "",
    "st_13": "",
    "st_14": "",
    "st_15": "",
    "st_16": "",
    "st_17": "",
    "st_18": "",
    "st_19": "",
    "st_20": "",
    "st_21": "",
    "st_22": "",
    "st_23": "",
    "st_24": "",
    "st_25": "",
    "st_26": "",
    "st_27": "",
    "st_28": "",
    "st_29": "",
    "st_30": "",
    "st_31": "",
    "st_32": "",
    "st_33": "",
    "st_34": "",
    "st_35": "",
    "st_36": "",
    "st_37": "",
    "st_38": "",
    "st_39": "",
    "st_40": "",
    "st_41": "",
    "st_42": "",
    "st_43": "",
    "st_44": "",
    "st_45": "",
    "st_46": "",
    "st_47": "",
    "st_48": "",
    "st_49": "",
    "st_50": ""
}

function getOptImg(key) {
    return opt_img[key];
}

var state_brief = {

    "st_1": "Alabama was the 22nd state in the USA; it became a state on December 14, 1819. <br><br> <b><u>State Abbreviation</b></u> - AL <br> <b><u>State Capital</b></u> - Montgomery <br> <b><u>Largest City</b></u> - Birmingham <br> <b><u>Area</b></u> - 52,423 square miles [Alabama is the 30th biggest state in the USA] <br> <b><u>Population </b></u>- 4,833,722 (as of 2013) [Alabama is the 23rd most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Alabamans <br> <b><u>Major Industries</b></u> - agriculture (cotton, corn, peanuts, soybeans, poultry, and livestock), hydroelectric power, mining (coal, limestone, iron ore), steel-making <br> <b><u>Total Retail Sales </b></u> - $58,564,965,000.00 <br> <br> <b><u>Origin of the Name </b></u> - Alabama means \"tribal town\" in the language of the local Creek Indians <br> <b><u>State Nickname </b></u> - Heart of Dixie, \"Yellowhammer State\" <br> <b><u>State Motto </b></u> - \"Audemus jura nostra defendere\" - We Dare Defend Our Rights <br> <b><u>State Song </b></u> - Alabama",

    "st_2": "Alaska was the 49th state in the USA; it became a state on January 3, 1959. <br> <br> State Abbreviation - AK <br> State Capital - Juneau <br> Largest City - Anchorage <br> Area - 656,425 square miles [Alaska is the biggest state in the USA] <br> Population - 735,132 (as of 2013) [Alaska is the 47th most populous state in the USA] <br> Name for Residents - Alaskans <br> Major Industry - oil (petroleum) <br> Total Retail Sales - $10,474,275,000.00 <br> <br> Origin of the Name - The word Alaska is from the Aleut Indian word \"alaxsxaq\" or \"agunalaksh\" that mean the mainland or shore. <br> State Nickname - The Last Frontier <br> State Motto - \"North To The Future\" <br> State Song - Alaska's Flag",

    "st_3": "Arizona was the 48th state in the USA; it became a state on February 14, 1912. <br> <br> State Abbreviation - AZ <br> State Capital - Phoenix <br> Largest City - Phoenix <br> Area - 114,006 square miles [Arizona is the 6th biggest state in the USA] <br> Population - 6,626,624 (as of 2013) [Arizona is the 15th most populous state in the USA] <br> Name for Residents - Arizonans <br> Major Industry - mining (copper, molybdenum, gold, and silver), manufacturing, and tourism <br> Total Retail Sales - $84,716,542,000.00 <br> <br> Origin of the Name - The word Arizona comes from one of the following (its origin is not certain): the Aztec Indian word \"arizuma,\" that means \"silver-bearing,\" from the Tohono O'odham Indian word \"Aleh-zone\" which means \"small spring,\" or the Pima Indian word \"Ali shonak\" which also means \"small spring.\" <br> State Nickname - Grand Canyon State <br> State Motto -  \"Ditat Deus,\" God Enriches <br> State Song - Arizona March Song",

    "st_4": "Arkansas was the 25th state in the USA; it became a state on June 15, 1836. <br> <br> State Abbreviation - AR <br> State Capital - Little Rock <br> Largest City - Little Rock <br> Area - 53,182 square miles [Arkansas is the 29th biggest state in the USA] <br> Population - 2,959,373 (as of 2013) [Arkansas is the 32nd most populous state in the USA] <br> Name for Residents - Arkansans <br> Major Industry - agriculture (chickens, soybeans, rice, cotton), paper and wood products (including furniture), electronic equipment, mining (aluminum and diamonds) <br> Total Retail Sales - $36,815,256,000.00 <br> <br> Origin of the Name - Arkansas is from the Quapaw (Sioux) word \"acansa,\" which means \"downstream place\" or \"south wind.\" <br> State Nickname - The Natural State <br> State Motto -  \"Regnat populus\" - The people rule <br> State Song - \"Arkansas\", by Wayland Holyfield, and \"Oh Arkansas\", by Terry Rose and Gary Klaff",

    "st_5": "California was the 31st state in the USA; it was admitted on September 9, 1850. <br> <br> State Abbreviation - CA <br> State Capital - Sacramento <br> Largest City - Los Angeles, San Diego, San Francisco <br> Area -  163,707 square miles [California is the 3rd biggest state in the USA - only Alaska and Texas are bigger] <br> Population - 38,332,521 (as of 2013) [California is the most populous state in the USA] <br> Name for Residents - Californians <br> Major Industry -  agriculture (many, many products), oil, mining, electronics, movie making/entertainment, and tourism <br> Total Retail Sales - $481,800,461,000.00 <br> <br> Origin of the Name - The name California comes from a mythical Spanish island ruled by a queen called Califia that was featured in a Spanish romance (\"Las Sergas de Esplandian\") written by Garcia Ordonez de Montalvo in 1510. The Spanish explorers originally thought that California was an island. <br> State Nickname -  The Golden State <br> State Motto -  Eureka (I have found it) <br> State Song - \"I Love You, California\" ",

    "st_6": "Colorado was the 38th state in the USA; it became a state on August 1, 1876 . <br> <br> State Abbreviation - CO <br> State Capital - Denver<br> Largest City - Denver <br> Area - 104,100 square miles [Colorado is the 8th biggest state in the USA] <br> Population - 5,268,367 (as of 2013) [Colorado is the 22nd most populous state in the USA] <br> Name for Residents - Coloradans <br> Major Industry - agriculture (wheat, cattle, sheep), tourism (especially skiers), mining (gold, silver), oil, finance, and manufacturing <br> Total Retail Sales - $67,815,200,000.00 <br> <br> Origin of the Name - The word Colorado is Spanish for the \"color red,\" and refers to the muddy Colorado River <br> State Nickname -  Centennial State, Colorful Colorado <br> State Motto - \"Nil sine Numine\" - Nothing Without Providence <br> State Song - Where the Columbines Grow ",

    "st_7": "Connecticut was the 5th state in the USA; it became a state on January 9, 1788 . <br> <br> State Abbreviation - CT <br> State Capital - Hartford <br> Largest City - Bridgeport <br> Area - 5,544 square miles [Connecticut is the 48th biggest state in the USA] <br> Population -  3,596,080 (as of 2013) [Connecticut is the 29th most populous state in the USA] <br> Name for Residents - Connecticuters <br> Major Industry - agriculture, industry (especially insurance), tourism <br> Total Retail Sales - $51,632,467,000.00 <br> <br> Origin of the Name - The name Connecticut is from a Mohican/Algonquin Indian word \"quonehtacut\", which means \"long tidal river.\" <br> State Nickname - Constitution State <br> State Motto - \"Qui transtulit sustinet\" - He Who Transplanted Still Sustains  <br> State Song - Yankee Doodle",

    "st_8": "Delaware was the 1st state in the USA; it became a state on December 7, 1787 . <br> <br> State Abbreviation - DE <br> State Capital - Dover <br> Largest City - Wilmington <br> Area - 1,954 square miles [Delaware is the 49th biggest state in the USA] <br> Population - 925,749 (as of 2013) [Delaware is the 45th most populous state in the USA] <br> Name for Residents - Delawareans <br> Major Industry - business, agriculture and tourism <br> Total Retail Sales - $14,456,001,000.00 <br> <br> Origin of the Name - Delaware was named to honor the early Virginia governor, Lord De La Warr. <br> State Nickname -  First State (this is because on Dec. 7, 1787, Delaware was the first of the 12 US states to ratify the new US Constitution), Diamond State, Blue Hen State, Small Wonder <br> State Motto -  \"Liberty and Independence\" <br> State Song - Our Delaware ",

    "st_9": "Florida was the 27th state in the USA; it was admitted on March 3, 1845. <br> <br> State Abbreviation - FL <br> State Capital - Tallahassee <br> Largest City -  Jacksonville <br> Area - 65,758 square miles [Florida is the 22nd biggest state in the USA] <br> Population - 19,552,860 (as of 2013) [Florida is the fourth most populous state in the USA, after California, New York and Texas] <br> Name for Residents - Floridians <br> Major Industry - tourism, agriculture (oranges, grapefruit, tomatos), electronics  <br> Total Retail Sales - $273,867,145,000.00 <br> <br> Origin of the Name - Florida was first seen by the Spanish explorer Ponce de Leon on Palm Sunday on April 2, 1513 - he then named the \"Pascua de Florida,\" meaning \"Feast of Flowers\" and claimed it for Spain <br> State Nickname - The Sunshine State <br> State Motto -  \"In God we trust.\"<br> State Song - \"Swanee River\" ",

    "st_10": "Georgia was the 4th state in the USA; it became a state on January 2, 1788. <br> <br> State Abbreviation -  GA <br> State Capital - Atlanta <br> Largest City - Atlanta <br> Area -  59,441 square miles [Georgia is the 24th biggest state in the USA] <br> Population -  9,992,167 (as of 2013) [Georgia is the 8th most populous state in the USA] <br> Name for Residents - Georgians <br> Major Industry - textiles, timber (especially pine), agriculture (cotton, corn, peanuts, soybeans, poultry)  <br> Total Retail Sales - $119,801,495,000.00 <br> <br> Origin of the Name - Georgia was named to honor King George II of England. <br> State Nickname -  Empire State of the South, Peach State <br> State Motto - \"Wisdom, Justice, and Moderation\" <br> State Song - Georgia on My Mind ",

    "st_11": "Hawaii was the 50th state in the USA; it became a state on August 21, 1959. It consists of a long chain of islands in the Pacific Ocean. <br> <br> State Abbreviation - HI <br> State Capital - Honolulu <br> Largest City - Honolulu <br> Area - 10,932 square miles [Hawaii is the 43rd biggest state in the USA] <br> Population - 1,404,054 (as of 2013) [Hawaii is the 40th most populous state in the USA] <br> Name for Residents - Hawaii residents <br> Major Industry - tourism, agriculture (bananas, pineapples, macadamia nuts, taro) <br> Total Retail Sales - $18,901,745,000.00 <br> <br> Origin of the Name - Hawaii may been named for the traditional home of the Polynesians, Hawaii or Hawaiki, called \"Owhyhee\".<br> State Nickname - Aloha State <br> State Motto -  \"Ua mau ke ea o ka aina I ka pono\" - The life of the land is perpetuated in righteousness<br> State Song - Hawaii Ponoi (meaning Hawaii's Own) ",

    "st_12": "Idaho was the 43rd state in the USA; it became a state on July 3, 1890 <br> <br> State Abbreviation - ID <br> State Capital - Boise <br> Largest City - Boise <br> Area -  83,574 square miles [Idaho is the 14th biggest state in the USA] <br> Population - 1,612,136 (as of 2013) [Idaho is the 39th most populous state in the USA] <br> Name for Residents - Idahoans <br> Major Industry - agriculture (potatoes, wheat, sugar beets, barley), lumber, mining <br> Total Retail Sales - $20,444,278,000.00 <br> <br> Origin of the Name - Unknown <br> State Nickname - Gem State <br> State Motto - \"Esto perpetua\" - May it Endure Forever <br> State Song - Here We Have Idaho",

    "st_13": "Illinois was the 21st state in the USA; it became a state on December 3, 1818. <br> <br> State Abbreviation - IL <br> State Capital - Springfield <br> Largest City - Chicago <br> Area - 57,918 square miles [Illinois is the 25th biggest state in the USA] <br> Population - 12,882,135 (as of 2013) [Illinois is the fifth most populous state in the USA, after California, New York, Texas, and Florida] <br> Name for Residents - Illinoisan <br> Major Industry - agriculture (corn, soybeans, wheat, oats, barley, rye, sorghum), cattle, manufacturing, mining  <br> Total Retail Sales - $166,634,514,000.00 <br> <br> Origin of the Name -  Illinois comes from the word Illini, a confederation of the Cahokia, Kaskaskia, Michigamea, Moingwena, Peoria and Tamaroa Indian tribes. <br> State Nickname - Prairie State <br> State Motto - State Sovereignty, National Union <br> State Song - \"Illinois\" ",

    "st_14": "Indiana was the 19th state in the USA; it became a state on December 11, 1816. <br> <br> State Abbreviation - IN <br> State Capital - Indianapolis <br> Largest City - Indianapolis <br> Area - 36,420 square miles [Indiana is the 38th biggest state in the USA] <br> Population - 6,570,902 (as of 2013) [Indiana is the 16th most populous state in the USA] <br> Name for Residents - Indianians or Hoosiers <br> Major Industry - agriculture (corn, soybeans, wheat), manufacturing, mining (coal, limestone), steel-making  <br> Total Retail Sales - $85,857,962,000.00 <br> <br> Origin of the Name - Indiana is a word that refers to the local Indians. <br> State Nickname - Hoosier State <br> State Motto - The Crossroads of America <br> State Song - On the Banks of the Wabash, Far Away ",

    "st_15": "Iowa was the 29th state in the USA; it became a state on December 28, 1846. <br> <br> State Abbreviation - IA <br> State Capital - Des Moines <br> Largest City - Des Moines <br> Area - 56,276 square miles [Iowa is the 26th biggest state in the USA] <br> Population - 3,090,416 (as of 2013) [Iowa is the 30th most populous state in the USA] <br> Name for Residents - Iowans <br> Major Industry - agriculture (corn, soybeans, hogs, pigs), food manufacturing, insurance <br> Total Retail Sales - $44,905,624,000.00 <br> <br> Origin of the Name - The name Iowa comes from Ioway, the French word for the Bah-kho-je Indian tribe that lived in the area. <br> State Nickname - Hawkeye State <br> State Motto - Our liberties we prize and our rights we will maintain <br> State Song - The Song of Iowa",

    "st_16": "Kansas was the 34th state in the USA; it became a state on January 29, 1861. <br> <br> State Abbreviation - KS <br> State Capital - Topeka <br> Largest City - Wichita <br> Area - 82,282 square miles [Kansas is the 15th biggest state in the USA] <br> Population - 2,893,957 (as of 2013) [Kansas is the 34th most populous state in the USA] <br> Name for Residents - Kansans <br> Major Industry - agriculture (wheat and other grains), aircraft manufacturing, automobile manufacturing <br> Total Retail Sales - $38,276,461,000.00 <br> <br> Origin of the Name - Kansas was named for Konza (also called Kansa or Kaw) Indians who lived in the area. <br> State Nickname - Sunflower State <br> State Motto - \"Ad astra per aspera\" - To the stars through difficulties  <br> State Song - Home on the Range",

    "st_17": "Kentucky was the 15th state in the USA; it became a state on June 1, 1792. <br> <br> State Abbreviation - KY <br> State Capital - Frankfort <br> Largest City - Louisville <br> Area - 40,411 square miles [Kentucky is the 37th biggest state in the USA] <br> Population - 4,395,295 (as of 2013) [Kentucky is the 26th most populous state in the USA] <br> Name for Residents - Kentuckians <br> Major Industry - agriculture (tobacco, corn, peanuts, wheat), mining (anthracite coal), horse-raising, whiskey manufacturing, automobile and truck manufacturing, chemical manufacturing <br> Total Retail Sales - $54,869,978,000.00 <br> <br> Origin of the Name - Kentucky is from the Iroquois Indian word \"Ken-tah-ten,\" which means \"land of tomorrow.\"  <br> State Nickname - Bluegrass State <br> State Motto - United we stand, divided we fall <br> State Song - My Old Kentucky Home, by Stephen Foster ",

    "st_18": "Louisiana was the 18th state in the USA; it became a state on April 30, 1812. <br> <br> State Abbreviation - LA <br> State Capital - Baton Rouge <br> Largest City - New Orleans <br> Area - 51,843 square miles [Louisiana is the 31st biggest state in the USA] <br> Population - 4,625,470 (as of 2013) [Louisiana is the 25th most populous state in the USA] <br> Name for Residents - Louisianans or Louisianians <br> Major Industry - agriculture (rice, cotton, soybeans), salt production, oil and natural gas, fishing (especially shellfish) <br> Total Retail Sales - $61,396,364,000.00 <br> <br> Origin of the Name - Louisiana was named by the French explorer Sieur de La Salle in 1682 to honor King Louis XIV (14) of France. <br> State Nickname - Sportsman's Paradise (previously - Pelican State) <br> State Motto - Union, Justice, and Confidence <br> State Song - \"Give Me Louisiana\" and \"You Are My Sunshine\" ",

    "st_19": "Maine was the 23rd state in the USA; it became a state on March 15, 1820. <br> <br> State Abbreviation - ME <br> State Capital - Augusta <br> Largest City - Portland <br> Area - 35,387 square miles [Maine is the 39th biggest state in the USA] <br> Population - 1,328,302 (as of 2013) [Maine is the 41st most populous state in the USA] <br> Name for Residents - Mainers <br> Major Industry - agriculture (especially potatoes), shipbuiding, fishing (especially lobsters), footwear, machinery, electronics, tourism <br> Total Retail Sales - $21,521,714,000.00 <br> <br> Origin of the Name - Maine refers to the mainland <br> State Nickname - Pine Tree State <br> State Motto - \"Dirigo\" - I direct <br> State Song - \"State of Maine Song\" ",

    "st_20": "Maryland was the 7th state in the USA; it became a state on April 28,1788. <br> <br> State Abbreviation - MD <br> State Capital - Annapolis <br> Largest City - Baltimore <br> Area - 12,407 square miles [Maryland is the 42nd biggest state in the USA] <br> Population - 5,928,814 (as of 2013) [Maryland is the 19th most populous state in the USA] <br> Name for Residents - Marylanders <br> Major Industry - farming (corn, soybeans, tobacco, poultry and dairy products), mining (coal), steel products, communications equipment, fishing (crabs and oysters), government services  <br> Total Retail Sales - $76,379,707,00.00 <br> <br> Origin of the Name - Maryland was named to honor the Queen consort Henrietta Maria (1609-1669), the wife of Britain's King Charles I <br> State Nickname - Old Line State <br> State Motto - \"Fatti Maschii, Parole Femine\" Manly Deeds, Womanly Words <br> State Song - Maryland, My Maryland",

    "st_21": "Massachusetts was the 6th state in the USA; it became a state on February 6, 1788. <br> <br> State Abbreviation - MA <br> State Capital - Boston <br> Largest City - Boston <br> Area - 10,555 square miles [Massachusetts is the 44th biggest state in the USA] <br> Population - 6,692,824 (as of 2013) [Massachusetts is the 14th most populous state in the USA] <br> Name for Residents - Massachusettsans <br> Major Industry - textiles, electronics, publishing, education, tourism, fishing  <br> Total Retail Sales - $92,915,380,000.00 <br> <br> Origin of the Name - Massachusetts was named for an Algonquian Indian word that means \"a big hill place.\" <br> State Nickname - Bay State <br> State Motto - \"Ense petit placidam sub libertate quietem\" - ( By the sword we seek peace, but peace only under liberty) <br> State Song - All Hail to Massachusetts",

    "st_22": "Michigan was the 26th state in the USA; it became a state on January 26, 1837. <br><br> <b><u> State Abbreviation </b></u> - MI <br> <b><u> State Capital </b></u> - Lansing <br> <b><u> Largest City </b></u> - Detroit <br> <b><u> Area </b></u> - 96,810 square miles [Michigan is the 11th biggest state in the USA] <br> <b><u> Population </b></u> - 9,895,622 (as of 2013) [Michigan is the 9th most populous state in the USA, after California, New York, Texas, Florida, Illinois, Pennsylvania and Ohio] <br> <b><u>Name for Residents</b></u> - Michiganders, Michiganians or Michiganites <br> <b><u> Major Industries </b></u> - car manufacturing, farming (corn, soybeans, wheat), timber, fishing  <br> <b><u>Total Retail Sales </b></u> - $119,302,046,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Michigan is from an Algonquian Chippewa Indian word \"meicigama\" that means \"big sea wate\" (referring to the Great Lakes). <br> <b><u> State Nickname </b></u> - Wolverine State <br> <b><u> State Motto </b></u> - \"Si quaeris peninsulam amoenam, circum spice\" [If you are seeking a amenable (pleasant) peninsula, look around you] <br> <b><u> State Song </b></u> - Michigan, My Michigan ",

    "st_23": "Minnesota was the 32nd state in the USA; it became a state on May 11, 1858. <br><br> <b><u> State Abbreviation </b></u> - MN <br> <b><u> State Capital </b></u> - St. Paul <br> <b><u> Largest City </b></u> - Minneapolis <br> <b><u> Area </b></u> - 86,943 square miles [Minnesota is the 12th biggest state in the USA] <br> <b><u> Population </b></u> - 5,420,380 (as of 2013) [Minnesota is the 21st most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Minnesotans <br> <b><u> Major Industries </b></u> - farming (corn, soybeans, sugar beets, wheat, dairy products), paper pulp, mining (iron ore) <br> <b><u>Total Retail Sales </b></u> - 78,898,182,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Minnesota is from a Dakota Sioux Indian word that means \"cloudy water\" or \"sky water\" and refers to local rivers. <br> <b><u> State Nickname </b></u> - Gopher State. North Star State <br> <b><u> State Motto </b></u> - \"L'Etoile du Nord\" - The Star of the North <br> <b><u> State Song </b></u> -Hail Minnesota ",

    "st_24": "Mississippi was the 20th state in the USA; it became a state on December 10, 1817. <br><br> <b><u> State Abbreviation </b></u> - MS <br> <b><u> State Capital </b></u> - Jackson <br> <b><u> Largest City </b></u> - Jackson <br> <b><u> Area </b></u> - 48,434 square miles [Mississippi is the 32nd biggest state in the USA] <br> <b><u> Population </b></u> - 2,991,207 (as of 2013) [Mississippi is the 31st most populous state in the USA] s<br> <b><u>Name for Residents</b></u> - Mississippians <br> <b><u> Major Industries </b></u> - farming (cotton, corn, soybeans, rice), oil, textiles, electronic equipment, transportation equipment, fishing  <br> <b><u>Total Retail Sales </b></u> - $37,053,190.00 <br> <br> <b><u> Origin of the Name </b></u> - Mississippi is perhaps from the Ojibwa (Chippewa) Indian words \"mici zibi,\" which means \"great river\" or \"gathering of waters\" <br> <b><u> State Nickname </b></u> - Magnolia State <br> <b><u> State Motto </b></u> - \"Virtute et armis\" - By valor and arms <br> <b><u> State Song </b></u> - Go Mis-sis-sip-pi ",

    "st_25": "Missouri was the 24th state in the USA; it became a state on August 10, 1821. <br><br> <b><u> State Abbreviation </b></u> - MO <br> <b><u> State Capital </b></u> - Jefferson City <br> <b><u> Largest City </b></u> - Kansas City  <br> <b><u> Area </b></u> - 69,709 square miles [Missouri is the 21st biggest state in the USA] <br> <b><u> Population </b></u> - 6,044,171 (as of 2013) [Missouri is the 18th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Missourians  <br> <b><u> Major Industries </b></u> - farming (corn, soybeans), mining (zinc, lead), aircraft equipment, cars, beer <br> <b><u>Total Retail Sales </b></u> - $90,546,581,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Missouri was named for an Algonquian Indian word that means \"river of the big canoes.\" <br> <b><u> State Nickname </b></u> - The Show Me State <br> <b><u> State Motto </b></u> - \"Salus populi suprema lex esto\" - The welfare of the people shall be the supreme law <br> <b><u> State Song </b></u> - Missouri Waltz ",

    "st_26": "Montana was the 41st state in the USA; it became a state on November 8,1889. <br><br> <b><u> State Abbreviation </b></u> - MT <br> <b><u> State Capital </b></u> - Helena <br> <b><u> Largest City </b></u> - Billings <br> <b><u> Area </b></u> - 147,046 square miles [Montana is the 4th biggest state in the USA] <br> <b><u> Population </b></u> - 1,015,165 (as of 2013) [Montana is the 44th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Montanans <br> <b><u> Major Industries </b></u> - farming (wheat, sugar beets), cattle ranching, mining (gold, silver, copper, coal), oil, lumber, tourism  <br> <b><u>Total Retail Sales </b></u> - $15,623,573,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Montana is the from the Spanish word from mountainous.<br> <b><u> State Nickname </b></u> - Big Sky Country, Treasure State <br> <b><u> State Motto </b></u> - \"Oro y plata\" - Gold and Silver <br> <b><u> State Song </b></u> - Montana",

    "st_27": "Nebraska was the 37th state in the USA; it became a state on March 1, 1867. <br><br> <b><u> State Abbreviation </b></u> - NE <br> <b><u> State Capital </b></u> - Lincoln <br> <b><u> Largest City </b></u> - Omaha <br> <b><u> Area </b></u> - 77,358 square miles [Nebraska is the 16th biggest state in the USA] <br> <b><u> Population </b></u> - 1,868,516 (as of 2013) [Nebraska is the 37th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Nebraskans <br> <b><u> Major Industries </b></u> - farming (corn, soybeans, wheat, sorghum), grain processing, meat-packing the Air Force Strategic Air Command, <br> <b><u>Total Retail Sales </b></u> - $30,470,717,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Nebraska is from an Oto Indian word that means \"flat water\" (referring to the Platte River, which means \"flat river\" in French) <br> <b><u> State Nickname </b></u> - Cornhusker State, The Tree Planters' State <br> <b><u> State Motto </b></u> - \"Equality before the law\" <br> <b><u> State Song </b></u> - Beautiful Nebraska ",

    "st_28": "Nevada was the 36th state in the USA; it became a state on October 31, 1864. <br><br> <b><u> State Abbreviation </b></u> - NV <br> <b><u> State Capital </b></u> - Carson City <br> <b><u> Largest City </b></u> - Las Vegas <br> <b><u> Area </b></u> - 110,567 square miles [Nevada is the 7th biggest state in the USA] <br> <b><u> Population </b></u> - 2,790,136 (as of 2013) [Nevada is the 35th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Nevadans <br> <b><u> Major Industries </b></u> - tourism, mining (gold, silver), hydro-electric power  <br> <b><u>Total Retail Sales </b></u> - $38,234,170,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Nevada is from the Spanish word meaning \"snowcapped.\" <br> <b><u> State Nickname </b></u> - Silver State, Sagebrush State <br> <b><u> State Motto </b></u> - All for Our Country <br> <b><u> State Song </b></u> - Home Means Nevada ",

    "st_29": "New Hampshire was the 9th state in the USA; it became a state on June 21, 1788.<br><br> <b><u> State Abbreviation </b></u> - NH <br> <b><u> State Capital </b></u> - Concord <br> <b><u> Largest City </b></u> - Manchester <br> <b><u> Area </b></u> - 9,351 square miles [New Hampshire is the 46th biggest state in the USA] <br> <b><u> Population </b></u> - 1,323,459 (as of 2013) [New Hampshire is the 42nd most populous state in the USA] <br> <b><u>Name for Residents</b></u> - New Hampshirites <br> <b><u> Major Industries </b></u> - textiles, lumber, tourism, electronic equipment, software <br> <b><u>Total Retail Sales </b></u> - $26,018,201,000.00 <br> <br> <b><u> Origin of the Name </b></u> - New Hampshire was named for Hampshire, England, by Captain John Mason. <br> <b><u> State Nickname </b></u> - Granite State <br> <b><u> State Motto </b></u> - Live Free or Die <br> <b><u> State Song </b></u> - Old New Hampshire ",

    "st_30": "New Jersey was the 3rd state in the USA; it became a state on December 18, 1787. <br><br> <b><u> State Abbreviation </b></u> - NJ <br> <b><u> State Capital </b></u> - Trenton <br> <b><u> Largest City </b></u> - Newark <br> <b><u> Area </b></u> - 8,722 square miles [New Jersey is the 47th biggest state in the USA] <br> <b><u> Population </b></u> - 8,899,339 (as of 2013) [New Jersey is the 11th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - New Jerseyites or New Jerseyans <br> <b><u> Major Industries </b></u> - farming (potatoes, tomatoes, peaches), chemicals, pharmaceuticals, petroleum-based products, insurance, tourism <br> <b><u>Total Retail Sales </b></u> - $133,665,728,000.00 <br> <br> <b><u> Origin of the Name </b></u> - New Jersey was named by James, Duke of York (the brother of King Charles II of England), who was given New Jersey by his brother. James later gave New Jersey to Lord John Berkeley and Sir George Carteret. James named the colony New Jersey to honor Carteret, who had been the Governor of Jersey, a British island in the English Channel. <br> <b><u> State Nickname </b></u> -  Garden State <br> <b><u> State Motto </b></u> - Liberty and Prosperity <br> <b><u> State Song </b></u> - none ",

    "st_31": "New Mexico was the 47th state in the USA; it became a state on January 6, 1912 . <br><br> <b><u> State Abbreviation </b></u> - NM <br> <b><u> State Capital </b></u> - Santa Fe <br> <b><u> Largest City </b></u> - Albuquerque <br> <b><u> Area </b></u> - 121,593 square miles [New Mexico is the 5th biggest state in the USA] <br> <b><u> Population </b></u> - 2,085,287 (as of 2013) [New Mexico is the 36th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - New Mexicans <br> <b><u> Major Industries </b></u> - mining (potash, copper, silver, uranium), oil, natural gas, tourism  <br> <b><u>Total Retail Sales </b></u> - $25,179,274,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Named by the Spanish, in reference to Mexico <br> <b><u> State Nickname </b></u> -  Land of Enchantment <br> <b><u> State Motto </b></u> - \"Crescit eundo\" - It grows as it goes <br> <b><u> State Song </b></u> - O, Fair New Mexico ",

    "st_32": "New York was the 11th state in the USA; it became a state on July 26, 1788. <br><br> <b><u> State Abbreviation </b></u> - NY <br> <b><u> State Capital </b></u> - Albany <br> <b><u> Largest City </b></u> - New York City <br> <b><u> Area </b></u> - 54,475 square miles [New York is the 27th largest state in the USA] <br> <b><u> Population </b></u> - 19,651,127 (as of 2013) [New York is the third most populous state in the USA, after California and Texas] <br> <b><u>Name for Residents</b></u> - New Yorkers <br> <b><u> Major Industries </b></u> - finance, communications, international trade, publishing, fashion, communications, farming (fruit and dairy), tourism  <br> <b><u>Total Retail Sales </b></u> - $251,167,736,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The English took over of the area that had been called \"New Netherland\" in 1664, and renamed it New York to honor the Duke of York (York is a city in England). <br> <b><u> State Nickname </b></u> - The Empire State <br> <b><u> State Motto </b></u> - Excelsior (Ever Upwards) <br> <b><u> State Song </b></u> - I Love New York ",

    "st_33": "North Carolina was the 12th state in the USA; it became a state on November 21, 1789. <br><br> <b><u> State Abbreviation </b></u> - NC <br> <b><u> State Capital </b></u> - Raleigh <br> <b><u> Largest City </b></u> - Charlotte <br> <b><u> Area </b></u> - 53,821 square miles [North Carolina is the 28th biggest state in the USA] <br> <b><u> Population </b></u> -  9,848,060 (as of 2013) [North Carolina is the 10th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - North Carolinians <br> <b><u> Major Industries </b></u> - farming (tobacco, poultry), textiles, furniture  <br> <b><u>Total Retail Sales </b></u> - $12,069,100,700.00 <br> <br> <b><u> Origin of the Name </b></u> - North Carolina was named to honor King Charles I (Carolus is Latin for Charles). <br> <b><u> State Nickname </b></u> - Tar Heel State <br> <b><u> State Motto </b></u> - \"Esse Quam Videri\" (To Be Rather Than to Seem)<br> <b><u> State Song </b></u> - The Old North State",

    "st_34": "North Dakota was the 39th state in the USA; it became a state on November 2, 1889. <br><br> <b><u> State Abbreviation </b></u> - ND <br> <b><u> State Capital </b></u> - Bismarck <br> <b><u> Largest City </b></u> - Fargo <br> <b><u> Area </b></u> - 70,704 square miles [North Dakota is the 19th biggest state in the USA] <br> <b><u> Population </b></u> - 723,393 (as of 2013) [North Dakota is the 48th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - North Dakotans <br> <b><u> Major Industries </b></u> - farming (wheat, barley, oats, flaxseed), cattle, mining (lignite, soft coal), electrical power generation  <br> <b><u>Total Retail Sales </b></u> - $15,519,816,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Dakota was what the Sioux Indians called themselves. <br> <b><u> State Nickname </b></u> - Peace Garden State, Flickertail State, Roughrider State <br> <b><u> State Motto </b></u> - Liberty and union, now and forever, one and inseparable <br> <b><u> State Song </b></u> -  North Dakota Hymn ",

    "st_35": "Ohio was the 17th state in the USA; it became a state on March 1, 1803. <br><br> <b><u> State Abbreviation </b></u> - OH <br> <b><u> State Capital </b></u> -  Columbus br> <b><u> Largest City </b></u> - Columbus <br> <b><u> Area </b></u> - 44,828 square miles [Ohio is the 34th biggest state in the USA] <br> <b><u> Population </b></u> - 11,570,808 (as of 2013) [Ohio is the seventh most populous state in the USA, after California, New York, Texas, Florida, Illinois and Pennsylvania] <br> <b><u>Name for Residents</b></u> - Ohioans <br> <b><u> Major Industries </b></u> - manufacturing (steel, cars, airplanes, rubber products, chemicals, plastics), farming, mining (coal)  <br> <b><u>Total Retail Sales </b></u> - $153,553,997,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Ohio derives from the Iroquois Indian word meaning \"good river\" or \"large river.\" <br> <b><u> State Nickname </b></u> - Buckeye State <br> <b><u> State Motto </b></u> - With God, All Things Are Possible <br> <b><u> State Song </b></u> - Beautiful Ohio ",

    "st_36": "Oklahoma was the 46th state in the USA; it became a state on November 16, 1907. <br><br> <b><u> State Abbreviation </b></u> - OK <br> <b><u> State Capital </b></u> - Oklahoma City <br> <b><u> Largest City </b></u> - Oklahoma City <br> <b><u> Area </b></u> - 69,903 square miles [Oklahoma is the 20th biggest state in the USA] <br> <b><u> Population </b></u> - 3,850,568 (as of 2013) [Oklahoma is the 28th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Oklahomans <br> <b><u> Major Industries </b></u> - farming (wheat, cattle), oil, natural gas  <br> <b><u>Total Retail Sales </b></u> - $50,256,231,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Oklahoma is from the Choctaw Indian words \"okla\" meaning people and \"humma\" meaning red. <br> <b><u> State Nickname </b></u> - Sooner State <br> <b><u> State Motto </b></u> - \"Labor omnia vincit\" - Labor Conquers All Things <br> <b><u> State Song </b></u> - \"Oklahoma!\" by Rodgers and Hammerstein",

    "st_37": "Oregon was the 33rd state in the USA; it became a state on February 14, 1859. <br><br> <b><u> State Abbreviation </b></u> - OR <br> <b><u> State Capital </b></u> - Salem <br> <b><u> Largest City </b></u> - Portland <br> <b><u> Area </b></u> - 98,386 square miles [Oregon is the 9th biggest state in the USA] <br> <b><u> Population </b></u> - 3,930,065 (as of 2013) [Oregon is the 27th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Oregonians <br> <b><u> Major Industries </b></u> - timber, paper products, farming (wheat, cattle), mining (coal), computer equipment, electronics <br> <b><u>Total Retail Sales </b></u> - $49,481,054,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The origin is unknown. It may have come from the French word Ouragan (which means Hurricane) and was a former name of the Columbia River. <br> <b><u> State Nickname </b></u> - Beaver State <br> <b><u> State Motto </b></u> - \"She Flies With Her Own Wings\" and \"The Union\" <br> <b><u> State Song </b></u> - Oregon, My Oregon ",

    "st_38": "Pennsylvania was the 2nd state in the USA; it became a state on December 12, 1787. <br><br> <b><u> State Abbreviation </b></u> - PA <br> <b><u> State Capital </b></u> - Harrisburg <br> <b><u> Largest City </b></u> - Philadelphia <br> <b><u> Area </b></u> - 46,058 square miles [Pennsylvania is the 33rd biggest state in the USA] <br> <b><u> Population </b></u> - 12,773,801 (as of 2013) [Pennsylvania is the sixth most populous state in the USA, after California, New York, Texas, Florida and Illinois] <br> <b><u>Name for Residents</b></u> - Pennsylvanians <br> <b><u> Major Industries </b></u> - steel, farming (corn, oats, soybeans, mushrooms), mining (iron, portland cement, lime, stone), electronics equipment, cars, pharmaceuticals <br> <b><u>Total Retail Sales </b></u> - $XX,XXX,XXX,XXX.XX <br> <br> <b><u> Origin of the Name </b></u> - This state was named to honor Admiral William Penn and his son, William Penn, Pennsylvania's founder. <br> <b><u> State Nickname </b></u> -  Keystone State <br> <b><u> State Motto </b></u> - \"Virtue, Liberty, and Independence\" <br> <b><u> State Song </b></u> - Pennsylvania, lyrics by Eddie Khoury, music by Ronnie Bonner ",

    "st_39": "Rhode Island was the 13th state in the USA; it became a state on May 29, 1790. <br><br> <b><u> State Abbreviation </b></u> - RI <br> <b><u> State Capital </b></u> - Providence <br> <b><u> Largest City </b></u> - Providence <br> <b><u> Area </b></u> - 1,045 square miles square miles (not including Narragansett Bay) or 1,545 square miles square miles (including Narragansett Bay) [either way, Rhode Island is the smallest state in the USA] <br> <b><u> Population </b></u> - 1,051,511 (as of 2013) [Rhode Island is the 43rd most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Rhode Islanders <br> <b><u> Major Industries </b></u> - textiles, jewelry, rubber products, machinery, tourism  <br> <b><u>Total Retail Sales </b></u> - $12,063,865,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Rhode Island was either named for the Isle of Rhodes (in the Mediterranean Sea) or for its red clay (the Dutch explorer Adriaen Block may have named it \"Rood Eylandt\" meaning Red Island, in Dutch). <br> <b><u> State Nickname </b></u> - The Ocean State, Little Rhody <br> <b><u> State Motto </b></u> - Hope <br> <b><u> State Song </b></u> - Rhode Island, It's for Me",

    "st_40": "South Carolina was the 8th state in the USA; it became a state on May 23, 1788. <br><br> <b><u> State Abbreviation </b></u> - SC <br> <b><u> State Capital </b></u> - Columbia <br> <b><u> Largest City </b></u> - Columbia <br> <b><u> Area </b></u> - 32,007 square miles [South Carolina is the 40th biggest state in the USA] <br> <b><u> Population </b></u> - 4,774,839 (as of 2013) [South Carolina is the 24th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - South Carolinians <br> <b><u> Major Industries </b></u> - farming (tobacco, soybeans), textiles, manufacturing chemicals, processed foods, machinery, electronics, paper products, tourism  <br> <b><u>Total Retail Sales </b></u> - $XX,XXX,XXX,XXX.XX <br> <br> <b><u> Origin of the Name </b></u> - South Carolina was named to honor King Charles I (Carolus is Latin for Charles). <br> <b><u> State Nickname </b></u> - Palmetto State <br> <b><u> State Motto </b></u> - \"Dum Spiro Spero\" - While I breathe, I hope <br> <b><u> State Song </b></u> - Carolina ",

    "st_41": "South Dakota was the 40th state in the USA; it became a state on November 2, 1889. <br><br> <b><u> State Abbreviation </b></u> - SD <br> <b><u> State Capital </b></u> - Pierre <br> <b><u> Largest City </b></u> - Sioux Falls  <br> <b><u> Area </b></u> - 77,121 square miles [South Dakota is the 17th biggest state in the USA] <br> <b><u> Population </b></u> - 844,877 (as of 2013) [South Dakota is the 46th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - South Dakotans <br> <b><u> Major Industries </b></u> -  <br> <b><u>Total Retail Sales </b></u> - $13,791,827,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Dakota was what the Sioux Indians called themselves. <br> <b><u> State Nickname </b></u> -  Mount Rushmore State <br> <b><u> State Motto </b></u> - Under God the people rule <br> <b><u> State Song </b></u> - Hail, South Dakota ",

    "st_42": "Tennessee was the 16th state in the USA; it became a state on June 1, 1796. <br><br> <b><u> State Abbreviation </b></u> - TN <br> <b><u> State Capital </b></u> - Nashville <br> <b><u> Largest City </b></u> - Memphis <br> <b><u> Area </b></u> - 42,146 square miles [Tennessee is the 36th biggest state in the USA] <br> <b><u> Population </b></u> - 6,495,978 (as of 2013) [Tennessee is the 17th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Tennesseans <br> <b><u> Major Industries </b></u> - mining (coal), electrical power, enriched uranium production, music, automobile manufacturing, farming (tobacco, cattle, soybeans, cotton), walking horses, tourism <br> <b><u>Total Retail Sales </b></u> - $91,641,605,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Tennessee came from a Cherokee village in the region that is called \"Tanasie.\" <br> <b><u> State Nickname </b></u> - The Volunteer State <br> <b><u> State Motto </b></u> - Agriculture and Commerce <br> <b><u> State Song </b></u> - My Homeland Tennessee, The Tennessee Waltz, When It's Iris Time in Tennessee, My Tennessee, Rocky Top, Tennessee, and The Pride of Tennessee.  ",

    "st_43": "Texas was the 28th state in the USA; it was admitted on December 29, 1845. <br><br> <b><u> State Abbreviation </b></u> - TX <br> <b><u> State Capital </b></u> - Austin <br> <b><u> Largest City </b></u> - Houston <br> <b><u> Area </b></u> - 268,601 square miles [Texas is the second biggest state in the USA - only Alaska is bigger] <br> <b><u> Population </b></u> - 26,448,193 (as of 2013) [Texas is the second most populous state in the USA, after California; New York is the third most populous] <br> <b><u>Name for Residents</b></u> - Texans <br> <b><u> Major Industries </b></u> - petroleum and natural gas, farming (cotton, livestock), steel, banking, insurance, tourism <br> <b><u>Total Retail Sales </b></u> - $356,116,376,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The Caddo Indians of eastern Texas called their group of tribes the \"Tejas,\" meaning \"those who are friends\". <br> <b><u> State Nickname </b></u> - The Lone Star State <br> <b><u> State Motto </b></u> - Friendship <br> <b><u> State Song </b></u> - Texas, Our Texas ",

    "st_44": "Utah was the 45th state in the USA; it became a state on January 4, 1896. <br><br> <b><u> State Abbreviation </b></u> - UT <br> <b><u> State Capital </b></u> -  Salt Lake City <br> <b><u> Largest City </b></u> - Salt Lake City <br> <b><u> Area </b></u> - 84,904 square miles [Utah is the 13th biggest state in the USA] <br> <b><u> Population </b></u> - 2,900,872 (as of 2013) [Utah is the 33rd most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Utahans or Utahns <br> <b><u> Major Industries </b></u> - oil, natural gas, mining (coal, copper, iron ore, silver, gold), steel-making, farming (cattle, sheep, dairy products), tourism (especially skiing) <br> <b><u>Total Retail Sales </b></u> - $38,024,486,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Utah is from the Ute Indians. <br> <b><u> State Nickname </b></u> - Beehive State <br> <b><u> State Motto </b></u> - Industry <br> <b><u> State Song </b></u> - Utah, We Love Thee ",

    "st_45": "Vermont was the 14th state in the USA; it became a state on March 4, 1791 <br><br> <b><u> State Abbreviation </b></u> - VT <br> <b><u> State Capital </b></u> -  Montpelier <br> <b><u> Largest City </b></u> -  Burlington <br> <b><u> Area </b></u> - 9,615 square miles [Vermont is the 45th biggest state in the USA] <br> <b><u> Population </b></u> - 626,630 (as of 2013) [Vermont is the 49th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Vermonters <br> <b><u> Major Industries </b></u> - maple syrup, farming (dairy), tourism, electronics, forest products (especially paper)  <br> <b><u>Total Retail Sales </b></u> - $9,933,751,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Vermont comes from the French words for green mountain, \"mont vert.\" <br> <b><u> State Nickname </b></u> - Green Mountain State <br> <b><u> State Motto </b></u> - Freedom and Unity <br> <b><u> State Song </b></u> - These Green Mountains ",

    "st_46": "Virginia was the 10th state in the USA; it became a state on June 25, 1788. <br><br> <b><u> State Abbreviation </b></u> - VA <br> <b><u> State Capital </b></u> - Richmond <br> <b><u> Largest City </b></u> - Virginia Beach <br> <b><u> Area </b></u> - 42,769 square miles [Virginia is the 35th biggest state in the USA] <br> <b><u> Population </b></u> - 8,260,405 (as of 2013) [Virginia is the 12th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Virginians <br> <b><u> Major Industries </b></u> - farming (tobacco, peanuts, corn, sweet potatoes, poultry, ham), tourism, US Navy warships, mining (coal), lumber (for paper and furniture), government workers <br> <b><u>Total Retail Sales </b></u> - $110,002,385,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Virginia was named for Queen Elizabeth I of England (she was known as the Virgin Queen). Sir Walter Raleigh may have suggested this name around 1584. <br> <b><u> State Nickname </b></u> - Old Dominion <br> <b><u> State Motto </b></u> - \"Sic Semper Tyrannis\" (Thus Always to Tyrants) <br> <b><u> State Song </b></u> - Carry Me Back to Old Virginia ",

    "st_47": "Washington was the 42nd state in the USA; it became a state on November 11, 1889. <br><br> <b><u> State Abbreviation </b></u> - WA <br> <b><u> State Capital </b></u> - Olympia <br> <b><u> Largest City </b></u> - Seattle <br> <b><u> Area </b></u> - 71,303 square miles [Washington is the 18th biggest state in the USA] <br> <b><u> Population </b></u> - 6,971,406 (as of 2013) [Washington is the 13th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Washingtonians <br> <b><u> Major Industries </b></u> - farming (fruit, berries, nuts, cattle, wheat), lumber, tourism, hydroelectric power, computer software, aircraft, aluminum refining <br> <b><u>Total Retail Sales </b></u> - $118,924,049,000.00 <br> <br> <b><u> Origin of the Name </b></u> - This state is named for George Washington, the first president of the USA. <br> <b><u> State Nickname </b></u> - The Evergreen State <br> <b><u> State Motto </b></u> - \"Alki\" (By and By) <br> <b><u> State Song </b></u> - Washington, My Home ",

    "st_48": "West Virginia was the 35th state in the USA; it became a state on June 20, 1863. <br><br> <b><u> State Abbreviation </b></u> - WV <br> <b><u> State Capital </b></u> - Charleston <br> <b><u> Largest City </b></u> - Charleston <br> <b><u> Area </b></u> - 24,231 square miles [West Virginia is the 41st biggest state in the USA] <br> <b><u> Population </b></u> - 1,854,304 (as of 2013) [West Virginia is the 38th most populous state in the USA] <br> <b><u>Name for Residents</b></u> -  West Virginians <br> <b><u> Major Industries </b></u> - mining (coal), livestock, chemical manufacturing, glass products, tourism  <br> <b><u>Total Retail Sales </b></u> - $22,637,923,000.00 <br> <br> <b><u> Origin of the Name </b></u> - West Virginia was named for Queen Elizabeth I of England (she was known as the Virgin Queen). Sir Walter Raleigh may have suggested this name around 1584. <br> <b><u> State Nickname </b></u> - Mountain State <br> <b><u> State Motto </b></u> - \"Montani semper liberi\" - Mountaineers are always free <br> <b><u> State Song </b></u> - West Virginia My Home, The West Virginia Hills, This Is My West Virginia ",

    "st_49": "Wisconsin was the 30th state in the USA; it became a state on May 29,1848. <br><br> <b><u> State Abbreviation </b></u> - WI <br> <b><u> State Capital </b></u> - Madison <br> <b><u> Largest City </b></u> - Milwaukee <br> <b><u> Area </b></u> - 65,503 square miles [Wisconsin is the 23rd biggest state in the USA] <br> <b><u> Population </b></u> - 5,742,713 (as of 2013) [Wisconsin is the 20th most populous state in the USA] <br> <b><u>Name for Residents</b></u> - Wisconsinites <br> <b><u> Major Industries </b></u> - dairy products (milk, butter, cheese), farming (corn), machinery, paper manufacturing, beer, tourism <br> <b><u>Total Retail Sales </b></u> - $78,201,822,000.00 <br> <br> <b><u> Origin of the Name </b></u> - Wisconsin is from an Indian word, but the origin is uncertain. It is perhaps an Algonquian Indian word that means \"long river,\" a Chippewa/Ojibwa/Anishinabe word, \"Ouisconsin,\" that means \"grassy place,\" or \"gathering of the waters.\" <br> <b><u> State Nickname </b></u> - Badger State <br> <b><u> State Motto </b></u> - Forward <br> <b><u> State Song </b></u> - On, Wisconsin! ",

    "st_50": "Wyoming was the 44th state in the USA; it became a state on July 10, 1890. <br><br> <b><u> State Abbreviation </b></u> - WY <br> <b><u> State Capital </b></u> - Cheyenne <br> <b><u> Largest City </b></u> - Cheyenne <br> <b><u> Area </b></u> - 97,818 square miles [Wyoming is the 10th biggest state in the USA] <br> <b><u> Population </b></u> - 582,658 (as of 2013) [Wyoming is the least populous state in the USA] <br> <b><u>Name for Residents</b></u> - Wyomingites <br> <b><u> Major Industries </b></u> - farming (cattle, sheep), mining (coal, uranium), oil, natural gas, tourism <br> <b><u>Total Retail Sales </b></u> - $9,446,043,000.00 <br> <br> <b><u> Origin of the Name </b></u> - The name Wyoming may be derived from the Delaware Indian word \"Maughwauwama,\" which means \"large plains.\" <br> <b><u> State Nickname </b></u> - Equality State <br> <b><u> State Motto </b></u> - Equal Rights <br> <b><u> State Song </b></u> - Wyoming "

}

function getStateBrief(key) {
    return state_brief[key];
}


var state_briefCn = {

    "st_1": "阿拉巴马州是美国东南部地区的一个州。它毗邻田纳西州北部，格鲁吉亚东部，佛罗里达州和墨西哥湾南部，密西西比河西部。阿拉巴马州是美国第30个最广泛的人口第24位。阿拉巴马州距离将近1500公里（2,400公里）是全国最长的内陆航道之一",

    "st_2": "阿拉斯加州是位于北美西北部的美国国家。不列颠哥伦比亚省和育空地区的加拿大行政区划与东部毗邻，其最极端的西部是阿图岛，与俄罗斯在白令海峡西岸有海上边界。北部是楚科奇和博福特海 - 北冰洋南部。太平洋位于南，西南。它是美国最大的地区，也是世界第七大国家分区。此外，这是美国第三人口最少，人口最少的国家;然而，到目前为止，人口最多的领土主要位于北美60平行北部，其人口（2015年美国人口普查局估计为738,432人），比加拿大北部和加拿大北部的人口总数翻了两番格陵兰。大约一半的阿拉斯加居民住在安克拉治地区。阿拉斯加的经济以渔业，天然气和石油工业为主，资源丰富。军事基地和旅游业也是经济的重要组成部分",

    "st_3": "亚利桑那州（/ɛərᵻzoʊnə，ærᵻ-/（关于这个声音听））（Navajo：Hoozdo Hahoodzo [xòːztòxɑxòːtsò]; O'odham：Alĭṣonak[ˡaɺiˡʂonak]）是美国西南地区的一个国家。它也是西部和山区国家的一部分。这是五十个州的第六大人口第十四人。其首都和最大的城市是凤凰城。亚利桑那州是四角国家之一。它与新墨西哥州，犹他州，内华达州，加利福尼亚州和墨西哥有边界，与科罗拉多州西南角有一个共同点。亚利桑那州与墨西哥的边界距离墨西哥索诺拉州和下加利福尼亚州的北部边界长389英里（626公里）。",

    "st_4": "阿肯色州（/ɑːrkənsɔː/（关于这个声音听）AR-kən-saw）是美国东南部地区的一个国家，到2017年有超过300万人的家园。[7] [8]它的名字是从苏美的语言衍生出来的，代表他们的相关亲属，Quapaw印第安人[9]国家的不同地理范围从组成美国​​内陆高地的Ozach山和Ouachita山脉的山区，到南部被称为阿肯色州山区的密集森林的土地，沿密西西比河和阿肯色州的东部低地三角洲。",

    "st_5": "加利福尼亚州（/ˌkælᵻfɔːrnjə，-ni.ə/（关于这个声音听）KAL-ə-FORN-yə，KAL-ə-FORN-ee-ə）是美国人口最多的国家，也是第三大区域。加利福尼亚州位于美国西部（太平洋）海岸，毗邻俄勒冈州，内华达北部，东部和东北部，亚利桑那州东南部，与墨西哥下加利福尼亚州南部共享国际边界。国家首都是萨克拉门托。洛杉矶是加州人口最多的城市，是纽约市以后的第二大城市。大洛杉矶地区和旧金山湾区分别是全国第二和第五大人口众多的城市地区。加州也拥有全国人口最多的县，洛杉矶县及其最大的县城，圣贝纳迪诺县。",

    "st_6": "科罗拉多州（/kɒlərædoʊ，-rɑːdoʊ/（关于这个声音听）[8] [9]）是美国的一个国家，包括大部分的南方洛矶山脉以及科罗拉多高原的东北部和西部边缘大平原科罗拉多州是美国西部，美国西南部和山地国家的一部分。科罗拉多州是全美第八大最广泛的国家，也是全美第50位美国人口第21位。美国人口普查局估计，自2010年美国人口普查以来，科罗拉多州的人口在2016年7月1日为5,540,545人，同比增长了10.17％。",

    "st_7": "康涅狄格州（/kənɛtᵻkət/（关于这个声音听））[12]是美国东北部新英格兰地区最南端的州。截至2010年人口普查，康涅狄格州的人均收入最高，人类发展指数（0.962）和美国家庭收入中位数[13] [14] [15]康涅狄格州毗邻东部的罗德岛，北部的马萨诸塞州，西部的纽约和南部的长岛海峡。其首都是哈特福德，其人口最多的城市是布里奇波特。虽然康乃迪克州在技术上是新英格兰的一部分，但它通常与纽约州和新泽西州分为三州地区。国家被命名为康涅狄格河，这是一条主要的美国河流，大致将国家平分。 “康涅狄格”这个词源自“长潮河”的阿尔贡奎字的各种各样的拼写错误。",

    "st_8": "特拉华州（/dɛləwɛər/（关于这个声音听））[9]是位于美国中大西洋或东北地区的一个国家。[a]与马里兰州南部和西部毗邻，东北方向新泽西州，宾夕法尼亚州北部。国家以托马斯·西，托马斯·西第三爵士，英国贵族和弗吉尼亚州第一任殖民统治者为名。",

    "st_9": "佛罗里达州/flɒrᵻdə/（关于这个声音听）（西班牙语为“花地”）是位于美国东南部地区的州。它毗邻墨西哥湾的西部，北部由阿拉巴马州和格鲁吉亚，东接大西洋，南接佛罗里达和古巴海峡。佛罗里达州是美国第22位，人口第三，人口第三，人口第八位。杰克逊维尔是该州人口最多的自治市，是毗邻美国最大的城市。迈阿密大都会区是佛罗里达州人口最多的城市地区。塔拉哈西市是国家首府。",

    "st_10": "格鲁吉亚（/dʒɔːrdʒə/（关于这个声音听）JOR-juh）是美国东南部的一个国家。它始于1733年的英国殖民地，是最初的十三个殖民地。[5]以英国国王乔治二世命名，[6]格鲁吉亚省覆盖了从南卡罗来纳州到西班牙佛罗里达州和新法国的路易斯安那州（新法国），也毗邻西密西西比河。格鲁吉亚是1788年1月2日批准“美国宪法”的第四个国家。[7]在1802-1804年，格鲁吉亚西部被分裂到密西西比州，后来分裂成为阿拉巴马州与1819年前西佛罗里达州的一部分。格鲁吉亚宣布在1861年1月19日脱离联盟，是原来的七个联邦之一的状态。[7] 1870年7月15日是最后一个恢复联盟的国家。[7]格鲁吉亚是美国的第24大人口和第八大人口。从2007年到2008年，格鲁吉亚的14个县位居全国前100名，增长最快，仅次于得克萨斯州。[8]格鲁吉亚被称为桃国和南方帝国。[7]亚特兰大是国家首府，人口最多的城市，并被评为全球城市。",

    "st_11": "夏威夷（英文：/həwaɪ.i，-ji，-ʔi/（关于这个声音）hə-WY-（y）ee;夏威夷语：夏威夷语[həvɐjʔi]）是加入美国的第五十个最近的国家的美国，1959年8月21日获得成立。[10]夏威夷是唯一位于大洋洲的美国国家，唯一一个完全由岛屿组成的国家。它是波利尼西亚最北端的岛屿集团，占据了太平洋中部的大多数群岛。[11]夏威夷是唯一位于北美以外的美国国家。",

    "st_12": "爱达荷州（/aɪdəhoʊ/（关于这个声音听））是美国西北地区的一个国家。它毗邻蒙大拿州东部和东北部，怀俄明州东部，内华达州和犹他州南部，华盛顿州和俄勒冈州西部。它在北部与加拿大不列颠哥伦比亚省分享了加拿大边界的一小部分。爱达荷州的人口约160万，面积为83,569平方英里（216,440平方公里），是美国第50位，人口第39位，人口最少的第十四位。该州的首府和最大的城市是博伊西。",

    "st_13": "伊朗伊利诺伊州是国土面积第五大人口第25位，被评为整个国家的缩影。[7] “伊利诺伊”这个词来自法语的阿尔贡金字母渲染。芝加哥在密歇根湖的东北部，伊利诺伊州中部和北部的小型工业城市和巨大的农业生产力以及南部的煤炭，木材和石油等自然资源具有不同的经济基础，是一个主要的交通枢纽。芝加哥港将国家与其他全球港口通过伊利诺斯州的水路连接，通过圣劳伦斯海峡，大西洋以及密西西比河的大湖到大湖。几十年来，奥黑尔国际机场已被列为全球最繁忙的机场之一。在社会和文化方面，伊利诺伊长期以来一直以声誉而闻名[7]和政治。",

    "st_14": "印第安纳州/ɪndiænə/（关于这个声音听）是位于北美中西部和大湖地区的美国国家。印第安纳州是全美第38大地区，是美国50个州中第16个人口最多的地区。它的首都和最大的城市是印第安纳波利斯。印第安纳州于1816年12月11日入住美国，成为美国第十九个州。印第安纳州毗邻密歇根湖，西北部，密歇根州北部，俄亥俄州东部，肯塔基州南部和东南部以及伊利诺伊州西部。",

    "st_15": "爱荷华州（/aɪ.əwə/（关于这个声音听）[6] [7] [8]）是美国中西部的美国国家，毗邻密西西比河东部，密苏里河和大苏维埃河在西边周边国家包括威斯康辛州东北部，伊利诺伊州东部，密苏里州南部，内布拉斯加州西部，南达科他州西北部，明尼苏达州北部。",

    "st_16": "堪萨斯州/kænzəs/（关于这个声音听）是美国中西部的一个美国国家。[10]它的首都是托皮卡，其最大的城市是威奇托。堪萨斯州以堪萨斯州美洲原住民部落命名，居住在该地区。[11]部落的名字（天生的kką：ze）经常被认为是指“南（南）风”的人，虽然这可能不是术语的本义。[12] [13]数千年来，现在的堪萨斯州是许多美洲原住民部落的家园。该州东部的部落一般居住在河谷的村庄。在西部部落的部落是半游牧和猎杀大群野牛。",
    "st_17": "肯塔基州（/kəntʌki/（关于这个声音听），kən-TUCK-ee），正式是肯塔基州，是位于美国东南中部地区的一个州。虽然在创造它的法律中被誉为“肯塔基州”，但肯塔基州是美国四大州之一（其中一个是弗吉尼亚州，宾夕法尼亚州和马萨诸塞州）。原本是弗吉尼亚州的一部分，1792年，肯塔基成为加入联盟的第十五个州。肯塔基州是美国第37大人口第26位，人口最多的是美国。",

    "st_18": "路易斯安那州（/luˌiːziænə/（关于这个声音听）或/ˌluːziænə/（关于这个声音听）;路易斯安那法语：路易斯安那州，[la lwizjan]或[la luzjan]; [9]路易斯安那州克里奥尔语：Létade laLwizyàn;标准法语Étatde Louisiane，[lwizjan]（关于这个声音））是位于美国南部的州。路易斯安那州是全美第31位，是美国50强人口第25位。它的首都是巴吞鲁日和最大的城市是新奥尔良。路易斯安那州是美国唯一的政治部门，被称为教区，这是地方政府相当于县的地方。人口最多的教区是东巴吞鲁日教区，总面积最大的是Plaquemines。路易斯安那州毗邻北部的阿肯色州，东部密西西比州，西部得克萨斯州和南部的墨西哥湾。",

    "st_19": "缅因州（/meɪn/）是美国东北部新英格兰地区最北的州。缅因州是美国第39个最广泛的地区和第41个人口最多的国家和地区。它毗邻新罕布什尔州西部，大西洋到东南部，加拿大新不伦瑞克省和魁北克省分别到东北和西北。缅因州是美国毗邻的最东部的国家，也是大湖最北端的东部。它以锯齿状的岩石海岸线而闻名低山，滚山森林茂盛的内部，风景如画的水路;以及其海鲜美食，特别是蛤蜊和龙虾。整个国家都有潮湿的大陆性气候，甚至在沿海地区，如人口最多的波特兰市。[10]首都是奥古斯塔。",

    "st_20": "马里兰州（/mɛrᵻlənd/（关于这个声音听））[8]是美国中大西洋地区的一个国家，毗邻弗吉尼亚州，西弗吉尼亚州和华盛顿特区南部和西部;宾夕法尼亚北部;和特拉华州东部。国家最大的城市是巴尔的摩，首都是安纳波利斯。其中偶尔的绰号是旧线国家，自由州和切萨皮克湾州。国家以法国的Henrietta Maria命名。",

    "st_21": "马萨诸塞州/ˌmæsətʃuːsᵻts/（关于这个声音听）mass-ə-CHOO坐或/ˌmæsətʃuːzᵻts/ mass-ə-CHOO-zits;正式是马萨诸塞州联邦，是美国东北部新英格兰地区人口最多的国家。它毗邻东部的大西洋，康乃狄克州和南部的罗德岛，北部的新罕布什尔州和佛蒙特州以及西边的纽约。国家被命名为马萨诸塞州部落，曾经居住在该地区。马萨诸塞州首府和新英格兰人口最多的城市是波士顿。超过80％的马萨诸塞州的人口居住在大波士顿大都会地区，这个地区是影响美国历史，学术界和工业界的地区。[43]最初依赖农业，渔业和贸易[44]马萨诸塞州在工业革命期间转变为制造中心。[45]在二十世纪，马萨诸塞州的经济从制造转向服务业。[46]现代马萨诸塞州是生物技术，工程，高等教育，金融和海运业的全球领导者。",

    "st_22": "密执安/mɪʃᵻɡən/（关于这个听声）是美国的大湖和中西部地区的一个国家。名字密西根是Ojibwa字mishigamaa的法语形式，意思是“大水”或“大湖”。密西根州是美国第十个人口最多，总面积第11位（密西西比河以东总面积最大的州）。它的首都是兰辛，其最大的城市是底特律。",

    "st_23": "明尼苏达州（/ˌmɪnᵻsoʊtə/（关于这个声音听））在本地关于这个声音[ˌmɪnəso̞ɾɐ]）是美国中西部和北部地区的一个国家。明尼苏达州于1858年5月11日由明尼苏达州东部半岛成立，是美国第32个州。国家有大量的湖泊，以“万湖之乡”为口号而闻名。其官方座右铭是L'Étoiledu Nord（法语：北极星）。",

    "st_24": "密西西比州/ˌmɪsᵻsɪpi/（关于这个声音听）是美国南部地区的一个国家，其南部边界的一部分由墨西哥湾组成。其西部边界由密西西比河组成。国家人口约300万。这是第50位美国人口第32位，人口第32位。杰克逊位于国家中心，是国家首都和最大的城市，人口约为17.5万人。",

    "st_25": "密苏里州是美国中西部的一个州。[5]拥有六百多万居民，是人口第十八大的国家。最大的城市地区是圣路易斯，堪萨斯城，斯普林菲尔德和哥伦比亚。国会大厦在密苏里河的杰斐逊城。国家是第21个最广泛的国家。在南方，是一个森林高地的奥扎克族，提供木材，矿物和娱乐。密西西比河形成了国家的东部边界。",

    "st_26": "蒙大拿州/mɒntænə/（关于这个声音听）是美国西部地区的一个国家。国家的名字源于西班牙语montaña（山）。蒙大拿有几个昵称，虽然没有官方[6]，包括“大天国”和“宝藏国”，以及包括“闪耀之地的土地”的口号，最近还有“最后的最佳”地点\”。蒙大拿与加拿大的三个省份有545英里（877公里）的边界：不列颠哥伦比亚省，阿尔伯塔省和萨斯喀彻温省，这是唯一的国家。它也毗邻北达科他州和南达科他东部，怀俄明南部，爱达荷州西部和西南。蒙大拿州的人口密度为50人，人口第44位，人口密度为48位。蒙大拿州的西部三分之一包含许多山脉。整个州都发现了更小的岛屿范围。总共有77个命名范围是落基山脉的一部分。蒙大拿东部的一半以西部草原地形和荒地为特征。",

    "st_27": "内布拉斯加州/nᵻbræskə/（关于这个声音听）是一个位于美国大平原和美国中西部的国家。该国毗邻南达科他北部，爱荷华州东部和密苏里州东南部，穿越密苏里河，堪萨斯南部，科罗拉多州西南部和怀俄明州西部。这是美国唯一的内陆美国国家。内布拉斯加州的面积超过77,220平方英里（20万平方公里），近190万人。它的国家首都是林肯，其最大的城市是在密苏里河上的奥马哈。",

    "st_28": "内华达州（西班牙语为“雪”;见发音）是美国西部，西北部和西南地区的一个州。内华达州是第七大人口第34位，人口最多的是第50位美国人口第9位。内华达州近四分之三的人住在克拉克县，其中包括拉斯维加斯 - 天堂大都会区[6]，其中三个州是四个最大的城市所在。[7]内华达州的首府是卡森城。内华达正式被称为“银州”，因为银的历史和经济的重要性。它也被称为“战国生”，因为在内战期间实现了国有制（“战斗出生”也出现在国旗上）;作为“Sage-brush State”，为同名的本地植物;作为“圣母国”。[8]内华达州将俄勒冈州西北部，爱达荷州，东北部，加利福尼亚州西部，亚利桑那州，东南部和犹他州东部。",

    "st_29": "新汉普郡（/nuːhæmpʃər/（关于这个声音））是美国东北部的新英格兰地区的一个州。它毗邻南部的马萨诸塞州，西部的佛蒙特州，缅因州和东部的大西洋以及北部的加拿大魁北克省。新罕布什尔州是土地面积第五小，也是美国第五大人口第九。",

    "st_30": "新泽西州是美国东北部和中部大西洋地区的一个州。它是一个半岛，毗邻纽约州北部和东部;东，南，南大西洋;在特拉华河和宾夕法尼亚州西部;在特拉华州和特拉华州的西南部。新泽西州是按地区排名第四的国家，也是美国第十一个人口最多，人口最多的国家。新泽西完全属于纽约市和费城的统计领域，是2014年人均收入的第二大美国国家。",

    "st_31": "新墨西哥州（新西兰语：NuevoMéxico在本地发表[nweβomexiko];纳瓦霍语：YootóHahoodzo [jò：txóhàhò：tsò]）是位于美利坚合众国西南地区的州。 1912年1月6日被联盟列为第47个国家，通常被认为是山区之一。新墨西哥是全美第五大人口第五，人口第六，人口密度最低的是五十个。",

    "st_32": "纽约是美国东北部的一个州。纽约是组建美国的十三个殖民地之一。 2015年约有1,980万居民，[9]这是美国人口第四大的国家。",

    "st_33": "北卡罗来纳州（/ˌnɔːrθkærəlaɪnə/（关于这个声音））是美国东南部地区的一个国家。国家南部的南卡罗来纳州和格鲁吉亚，西部的田纳西州，北部的弗吉尼亚州以及东部的大西洋。北卡罗来纳州是美国第28大人口和第9个人口最多的国家。国家分为100个县。首都是罗利。人口最多的城市是夏洛特，这是纽约市后美国第二大银行中心。",

    "st_34": "北达科他州（/ˌnɔːrθdəkoʊtə/（关于这个声音听）;本地[ˌno̞ɹθdəko̞ɾə]）是美国的第39个州，1889年11月2日被接纳到工会。",

    "st_35": "俄亥俄州/oʊhaɪ.oʊ/（关于这个声音听）是美国大湖地区的一个中西部国家。俄亥俄州是第34个最大的地区，人口第七，人口最多的是美国的50个。国家首都和最大的城市是哥伦布。",

    "st_36": "俄克拉荷马州（/ˌoʊkləhoʊmə/（关于这个声音听））; [7]切诺基：阿斯加亚gigageyi /ᎠᏍᎦᏯᎩᎦᎨᏱ; [8] Pawnee：Uukuhuúwa，[9] Cayuga：Gahnawiyoˀgeh[10]）是南中部地区的一个国家美国[11]这是50个美国人口中第20位，第28位。国家的名字源于Choctaw词okla和humma，意思是“红人”。[12]它也被称为非正式的昵称“The Sooner State”，参考非本地定居者在正式开放日期之前将其索赔提交给最有希望的地块，并于1889年印度拨款法案中打开了美国印度领土白色定居点的大门。这个名字在国家定居。俄克拉何马地区和印度领土合并，印度人从名字上掉下来。 1907年11月16日，俄克拉何马州成为进入工会的第46个国家。它的居民被称为“俄克拉荷马人”，或非正式地“Okies”，其首都和最大的城市是俄克拉荷马城。",

    "st_37": "俄勒冈州（/ɒrᵻɡən/（关于这个声音听）[7]）是美国西海岸太平洋西北地区的一个国家。哥伦比亚河描绘了俄勒冈州北部边界沿华盛顿州的大部分地区，而蛇河描绘了爱达荷州东部边界的大部分地区。平行的42°北部描绘了加利福尼亚和内华达州的南部边界。它是美国毗邻的三个州之一，在太平洋上有海岸线。",

    "st_38": "宾夕法尼亚州/ˌpɛnsᵻlveɪnjə/（关于这个声音）（宾夕法尼亚州德语：Pennsylvaani或Pennsilfaani），正式是宾夕法尼亚州，是位于美国东北部和中大西洋地区的州。阿巴拉契亚山穿过它的中间。英联邦毗邻特拉华州东南部，马里兰州南部，西弗吉尼亚州西南部，俄亥俄州西部，伊利湖，加拿大安大略省西北部，纽约北部，新泽西州东部。",

    "st_39": "罗德岛（/ˌroʊdaɪlənd/（关于这个声音听）），[7] [8]正式是罗德岛州和普罗维登斯种植园，[9]是美国东北部新英格兰地区的一个州。在新泽西州之后，罗得岛州是最小的地区，人口第八低，是美国50个州中第二个人口最多的地区。其官方名称也是联盟中最长的国家。罗德岛与康涅狄格州毗邻，马萨诸塞州北部和东部，大西洋向南通过罗德岛州声音和岛屿岛屿声音。国家与纽约也有一个短暂的海上边界。",

    "st_40": "南卡罗来纳州/ˌsaʊθkærəlaɪnə/（关于这个声音听）是美国东南部地区的一个国家。国家北部毗邻北卡罗莱纳州，南部和西部由格鲁吉亚横跨萨凡纳河，东接大西洋。",

    "st_41": "南达科他州（/ˌsaʊθdəkoʊtə/（关于这个声音听）;本地：[ˌsɑʊθdəko̞ɾə]）是美国中西部地区的一个国家。它以名列美国的拉科塔州和达科他州美洲土着美洲部落的名字命名，他们占据了大部分人口，历史上占据了领土地位。南达科他州是第十七个最广泛的国家，但是五十个人口最少，五十个人口密度最低的是五十个美国人。一旦达科他州南部地区，南达科他州于1889年11月2日与北达科他州同时成为国家。皮埃尔是国家首都和苏族瀑布，人口约171,000，是南达科他州最大的城市。",

    "st_42": "田纳西州（/tɛnᵻsiː/（关于这个声音听））（切诺基：ᏔᎾᏏ，translit。Tanasi）是位于美国东南部地区的州。田纳西州是美国的第36大人口和第十六大人口。田纳西州毗邻肯塔基州和弗吉尼亚州北部，北卡罗来纳州东部，格鲁吉亚，阿拉巴马州和密西西比南部，阿肯色州和密苏里州西部。阿巴拉契亚山脉主宰了该州东部，密西西比河形成了国家的西部边界。纳什维尔是国家首府和最大的城市，人口为660,388人。田纳西州的第二大城市是孟菲斯，人口为652,717人。",

    "st_43": "德克萨斯州（/tɛksəs/，本地/tɛksᵻz/;西班牙语：德克萨斯州或Tejas [德克萨斯州]）是美国第二大的地区和人口。德克萨斯地理位于该国南部中部地区，与美国路易斯安那州东部毗邻，阿肯色州东北部，俄克拉荷马州北部，新墨西哥州西部，墨西哥奇瓦瓦州，科阿胡拉新月州莱昂和塔毛利帕斯到西南，而墨西哥湾则在东南部。",

    "st_44": "犹他州（/juːtɔː/ or /juːtɑː/（关于这个声音听））是美国西部的一个州。它成为了1896年1月4日进入美国的第45个州。犹他州是美国第十三大地区，人口第31位，人口最多，人口最多的是美国。犹他州人口超过300万（2016年7月1日人口普查估计），其中大约80％居住在瓦萨奇阵线，以国家首府盐湖城为中心。[8]犹他州毗邻科罗拉多州东部，怀俄明州到东北部，爱达荷州北部，亚利桑那州南部，内华达州西部。它也触及东南部的新墨西哥角落。",

    "st_45": "佛蒙特州（/vərmɒntˌvɜːr-/（关于这个声音听）[7] [a]）是美国东北部新英格兰地区的一个州。它毗邻美国其他州马萨诸塞州南部，新罕布什尔州东部，纽约西部，加拿大魁北克省北部。尚普兰湖形成佛蒙特州西部边界的一半，与纽约州相连，绿色山脉在南部长达一段时间。",

    "st_46": "弗吉尼亚州（/vərdʒɪnjə/（关于这个声音听），英国：/vərdʒɪni.ə/，正式的弗吉尼亚州）是美国东南部[6]位于大西洋海岸和阿巴拉契亚山脉之间的一个州。弗吉尼亚州由于其在北美大陆建立的第一个英国殖民地地位，[7]和“总统之母”，被昵称为“老统治者”，因为8位美国总统出生在任何其他国家。英联邦的地理和气候由蓝岭山脉和切萨皮克湾形成，为其大部分植物和动物群提供栖息地。英联邦的首都是里士满;弗吉尼亚海滩是人口最多的城市，费尔法克斯县是人口最多的政治分支。截至2014年，联邦估计人口超过830万。",

    "st_47": "华盛顿（/wɑːʃɪŋtən/（关于这个声音听））是位于美国太平洋西北地区的一个州，位于俄勒冈州北部，爱达荷州以西，加拿大不列颠哥伦比亚省在太平洋沿岸的南部。以美国第一任总统乔治华盛顿命名，国家是从华盛顿领土西部出来的，英国在1846年根据“俄勒冈条约”解决俄勒冈边界争端已经被英国放弃。 1889年被联盟列为第42个国家。奥林匹亚是国家首都。华盛顿有时被称为华盛顿州或华盛顿州，将其与美国首都华盛顿特区进行区分，美国首都经常缩写为华盛顿。",

    "st_48": "西弗吉尼亚州/ˌwɛstvərdʒɪnjə/（关于这个声音听）是位于美国南部阿巴拉契亚地区的一个州。[7] [8] [9] [10] [11]弗吉尼亚州毗邻东南部，肯塔基州西南部，俄亥俄州西北部，宾夕法尼亚州北部（略微向东），马里兰州向东北方向。西弗吉尼亚州是按地区排名第10位，人口第38位，是美国50位居民家庭第二低的收入来源。首都和最大的城市是查尔斯顿。",

    "st_49": "威斯康辛州（/wᵻskɒnsᵻn/（关于这个声音））是位于美国中北部，中西部和大湖区的美国国家。它毗邻明尼苏达州西部，爱荷华州西南部，伊利诺伊州南部，密歇根湖东部，密歇根州东北部，以及苏必利尔湖北部。威斯康星州是总面积第23位的第二大州，也是第二十多人口。国家首都是麦迪逊，其最大的城市是密尔沃基，密歇根湖西岸。国家分为72个县。",

    "st_50": "怀俄明州/ɪɪʊɪŋɪŋɪŋɪŋ）））））））））。。。。。。。。。。。国家是全国第十大，人口最少，人口密度最低的国家。怀俄明毗邻北部由蒙大拿州，东部由南达科他州和内布拉斯加州，南部由科罗拉多州，西南部由犹他州，西部由爱达荷州。 2015年，国家人口估计为586,107，不到美国最大城市的31个。[7]夏延是首都和人口最多的城市，2015年人口估计为63,335人。"

}

function getStateBriefCn(key) {
    return state_briefCn[key];
}