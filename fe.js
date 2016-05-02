window.find = function(params, cb) {
     let xhr = new XMLHttpRequest();
     xhr.open("POST", 'http://localhost:3000/find');

     xhr.onload = function(resp) {
         cb.call(this);
     };

     xhr.send(JSON.stringify(params));
 };

window.create = function(params, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/create');

    xhr.onload = function(resp) {
        cb.call(this);
    };

    xhr.send(JSON.stringify(params));
};


window.tracks = [
    {
        author: "Dolan",
        genre: "four",
        year: 2000,
        name: "Pantoprazole Sodium",
        duration: 193429
    },
    {
        author: "Charles",
        genre: "eight",
        year: 2002,
        name: "Cephalexin",
        duration: 235743
    },
    {
        author: "Malcolm",
        genre: "two",
        year: 2000,
        name: "Penicillin VK",
        duration: 270601
    },
    {
        author: "Kaseem",
        genre: "ten",
        year: 2007,
        name: "Ibuprofen (Rx)",
        duration: 289131
    },
    {
        author: "Aquila",
        genre: "four",
        year: 2006,
        name: "Atenolol",
        duration: 235760
    },
    {
        author: "Brock",
        genre: "three",
        year: 2015,
        name: "Enalapril Maleate",
        duration: 328072
    },
    {
        author: "Camden",
        genre: "six",
        year: 2011,
        name: "Simvastatin",
        duration: 299156
    },
    {
        author: "Baxter",
        genre: "four",
        year: 2000,
        name: "Metformin HCl",
        duration: 263005
    },
    {
        author: "Guy",
        genre: "ten",
        year: 2011,
        name: "Metoprolol Tartrate ",
        duration: 333306
    },
    {
        author: "Jamal",
        genre: "nine",
        year: 2012,
        name: "Abilify",
        duration: 314701
    },
    {
        author: "Samuel",
        genre: "six",
        year: 2003,
        name: "Viagra",
        duration: 199310
    },
    {
        author: "Damon",
        genre: "one",
        year: 2014,
        name: "Oxycodone HCl",
        duration: 161360
    },
    {
        author: "Randall",
        genre: "eight",
        year: 2006,
        name: "Furosemide",
        duration: 163178
    },
    {
        author: "Zane",
        genre: "ten",
        year: 2014,
        name: "Bystolic",
        duration: 232372
    },
    {
        author: "Aaron",
        genre: "ten",
        year: 2014,
        name: "Fluticasone Propionate",
        duration: 213028
    },
    {
        author: "Hop",
        genre: "four",
        year: 2001,
        name: "Carvedilol",
        duration: 289781
    },
    {
        author: "Hakeem",
        genre: "six",
        year: 2005,
        name: "Prednisone",
        duration: 178007
    },
    {
        author: "Christopher",
        genre: "one",
        year: 2013,
        name: "Doxycycline Hyclate",
        duration: 238801
    },
    {
        author: "Rafael",
        genre: "three",
        year: 2013,
        name: "Meloxicam",
        duration: 147912
    },
    {
        author: "Neville",
        genre: "four",
        year: 2014,
        name: "Hydrochlorothiazide",
        duration: 225279
    },
    {
        author: "Levi",
        genre: "three",
        year: 2009,
        name: "Flovent HFA",
        duration: 315743
    },
    {
        author: "Flynn",
        genre: "four",
        year: 2006,
        name: "Amoxicillin",
        duration: 166936
    },
    {
        author: "Dalton",
        genre: "nine",
        year: 2003,
        name: "Simvastatin",
        duration: 269525
    },
    {
        author: "David",
        genre: "three",
        year: 2007,
        name: "Cialis",
        duration: 189182
    },
    {
        author: "Kadeem",
        genre: "two",
        year: 2006,
        name: "Atenolol",
        duration: 266114
    },
    {
        author: "Melvin",
        genre: "four",
        year: 2012,
        name: "Loestrin 24 Fe",
        duration: 197979
    },
    {
        author: "Patrick",
        genre: "three",
        year: 2007,
        name: "Sertraline HCl",
        duration: 184594
    },
    {
        author: "Zeus",
        genre: "six",
        year: 2012,
        name: "Cyclobenzaprin HCl",
        duration: 304458
    },
    {
        author: "Rigel",
        genre: "six",
        year: 2004,
        name: "Synthroid",
        duration: 197580
    },
    {
        author: "Burton",
        genre: "two",
        year: 2011,
        name: "Pravastatin Sodium",
        duration: 164760
    },
    {
        author: "Lane",
        genre: "seven",
        year: 1999,
        name: "Diovan",
        duration: 171119
    },
    {
        author: "Burke",
        genre: "three",
        year: 2003,
        name: "Amlodipine Besylate",
        duration: 322469
    },
    {
        author: "Josiah",
        genre: "one",
        year: 2016,
        name: "Omeprazole (Rx)",
        duration: 335644
    },
    {
        author: "Ralph",
        genre: "eight",
        year: 2003,
        name: "Glyburide",
        duration: 298611
    },
    {
        author: "Hu",
        genre: "one",
        year: 2011,
        name: "Prednisone",
        duration: 320514
    },
    {
        author: "Brock",
        genre: "five",
        year: 2015,
        name: "Clonazepam",
        duration: 158529
    },
    {
        author: "Wesley",
        genre: "one",
        year: 2013,
        name: "Trazodone HCl",
        duration: 219562
    },
    {
        author: "Luke",
        genre: "five",
        year: 1999,
        name: "Sertraline HCl",
        duration: 337044
    },
    {
        author: "Brady",
        genre: "one",
        year: 2009,
        name: "Premarin",
        duration: 235736
    },
    {
        author: "Harrison",
        genre: "ten",
        year: 2007,
        name: "Plavix",
        duration: 251122
    },
    {
        author: "Colton",
        genre: "three",
        year: 2004,
        name: "Venlafaxine HCl ER",
        duration: 179215
    },
    {
        author: "Arden",
        genre: "five",
        year: 2011,
        name: "Doxycycline Hyclate",
        duration: 142756
    },
    {
        author: "Vladimir",
        genre: "four",
        year: 2002,
        name: "Simvastatin",
        duration: 163207
    },
    {
        author: "Grant",
        genre: "three",
        year: 2005,
        name: "Lantus",
        duration: 288753
    },
    {
        author: "Declan",
        genre: "eight",
        year: 2007,
        name: "Gabapentin",
        duration: 183393
    },
    {
        author: "Zachary",
        genre: "five",
        year: 1999,
        name: "Endocet",
        duration: 225080
    },
    {
        author: "Scott",
        genre: "four",
        year: 2008,
        name: "Premarin",
        duration: 150407
    },
    {
        author: "Steel",
        genre: "seven",
        year: 2007,
        name: "Lisinopril",
        duration: 255632
    },
    {
        author: "Alan",
        genre: "nine",
        year: 2013,
        name: "Ibuprofen (Rx)",
        duration: 150205
    },
    {
        author: "Quinn",
        genre: "seven",
        year: 2014,
        name: "Glipizide",
        duration: 143907
    },
    {
        author: "Michael",
        genre: "ten",
        year: 2002,
        name: "Lantus",
        duration: 193492
    },
    {
        author: "Todd",
        genre: "three",
        year: 2003,
        name: "Tamsulosin HCl",
        duration: 166819
    },
    {
        author: "Tanner",
        genre: "four",
        year: 2010,
        name: "Lantus",
        duration: 306064
    },
    {
        author: "Chadwick",
        genre: "five",
        year: 2003,
        name: "Amlodipine Besylate",
        duration: 228465
    },
    {
        author: "Odysseus",
        genre: "six",
        year: 2009,
        name: "Niaspan",
        duration: 180003
    },
    {
        author: "Adam",
        genre: "five",
        year: 2011,
        name: "Cheratussin AC",
        duration: 150804
    },
    {
        author: "Steven",
        genre: "nine",
        year: 2011,
        name: "Simvastatin",
        duration: 147879
    },
    {
        author: "Howard",
        genre: "three",
        year: 2003,
        name: "Hydrochlorothiazide",
        duration: 230259
    },
    {
        author: "Harding",
        genre: "eight",
        year: 2005,
        name: "Ibuprofen (Rx)",
        duration: 164720
    },
    {
        author: "Rajah",
        genre: "four",
        year: 2009,
        name: "Amlodipine Besylate",
        duration: 264742
    },
    {
        author: "Fuller",
        genre: "seven",
        year: 2006,
        name: "Metformin HCl",
        duration: 178676
    },
    {
        author: "Grant",
        genre: "ten",
        year: 2007,
        name: "Cephalexin",
        duration: 316142
    },
    {
        author: "Nathan",
        genre: "two",
        year: 2003,
        name: "Cyclobenzaprin HCl",
        duration: 269713
    },
    {
        author: "Orlando",
        genre: "seven",
        year: 2004,
        name: "Potassium Chloride",
        duration: 226428
    },
    {
        author: "Christian",
        genre: "four",
        year: 2002,
        name: "Lisinopril",
        duration: 267161
    },
    {
        author: "Elmo",
        genre: "nine",
        year: 1999,
        name: "Diazepam",
        duration: 276868
    },
    {
        author: "Melvin",
        genre: "eight",
        year: 2007,
        name: "Lyrica",
        duration: 304945
    },
    {
        author: "Emerson",
        genre: "three",
        year: 2016,
        name: "Atenolol",
        duration: 170521
    },
    {
        author: "Tad",
        genre: "one",
        year: 2011,
        name: "Paroxetine HCl",
        duration: 289345
    },
    {
        author: "Brock",
        genre: "two",
        year: 2005,
        name: "Clonazepam",
        duration: 289135
    },
    {
        author: "Dale",
        genre: "four",
        year: 2011,
        name: "Zolpidem Tartrate",
        duration: 247092
    },
    {
        author: "Abraham",
        genre: "six",
        year: 2016,
        name: "Triamcinolone Acetonide",
        duration: 333131
    },
    {
        author: "Elliott",
        genre: "six",
        year: 2009,
        name: "Furosemide",
        duration: 264375
    },
    {
        author: "Xavier",
        genre: "three",
        year: 2008,
        name: "Azithromycin",
        duration: 316858
    },
    {
        author: "Caleb",
        genre: "five",
        year: 2003,
        name: "Niaspan",
        duration: 228230
    },
    {
        author: "Chadwick",
        genre: "one",
        year: 2012,
        name: "LevothyroxineSodium",
        duration: 237164
    },
    {
        author: "Brady",
        genre: "five",
        year: 2008,
        name: "Zolpidem Tartrate",
        duration: 317078
    },
    {
        author: "Raja",
        genre: "nine",
        year: 2010,
        name: "Amlodipine Besylate",
        duration: 293295
    },
    {
        author: "Fritz",
        genre: "nine",
        year: 2005,
        name: "Ciprofloxacin HCl",
        duration: 165286
    },
    {
        author: "Lionel",
        genre: "seven",
        year: 2012,
        name: "Tramadol HCl",
        duration: 287160
    },
    {
        author: "Kibo",
        genre: "eight",
        year: 2001,
        name: "Triamterene/Hydrochlorothiazide",
        duration: 219947
    },
    {
        author: "Tanek",
        genre: "three",
        year: 2015,
        name: "Abilify",
        duration: 321224
    },
    {
        author: "Igor",
        genre: "five",
        year: 2002,
        name: "Atenolol",
        duration: 300388
    },
    {
        author: "Giacomo",
        genre: "ten",
        year: 2003,
        name: "Metformin HCl",
        duration: 202839
    },
    {
        author: "Basil",
        genre: "six",
        year: 2012,
        name: "Allopurinol",
        duration: 211216
    },
    {
        author: "Kennan",
        genre: "ten",
        year: 2014,
        name: "Metformin HCl",
        duration: 313079
    },
    {
        author: "Brenden",
        genre: "seven",
        year: 2000,
        name: "Sertraline HCl",
        duration: 161643
    },
    {
        author: "Rudyard",
        genre: "nine",
        year: 2001,
        name: "Amoxicillin",
        duration: 207865
    },
    {
        author: "Basil",
        genre: "six",
        year: 2016,
        name: "Azithromycin",
        duration: 209812
    },
    {
        author: "Harrison",
        genre: "one",
        year: 2011,
        name: "Singulair",
        duration: 294212
    },
    {
        author: "Jared",
        genre: "six",
        year: 2013,
        name: "Metoprolol Succinate",
        duration: 251811
    },
    {
        author: "Finn",
        genre: "eight",
        year: 2000,
        name: "Amlodipine Besylate",
        duration: 166686
    },
    {
        author: "Thomas",
        genre: "one",
        year: 2005,
        name: "Gabapentin",
        duration: 281861
    },
    {
        author: "Keith",
        genre: "one",
        year: 2002,
        name: "Hydrocodone/APAP",
        duration: 173771
    },
    {
        author: "Kyle",
        genre: "six",
        year: 2005,
        name: "Trazodone HCl",
        duration: 174751
    },
    {
        author: "Carson",
        genre: "seven",
        year: 2006,
        name: "Carisoprodol",
        duration: 210804
    },
    {
        author: "Darius",
        genre: "one",
        year: 2011,
        name: "Viagra",
        duration: 195213
    },
    {
        author: "Amery",
        genre: "six",
        year: 2012,
        name: "Simvastatin",
        duration: 251566
    },
    {
        author: "August",
        genre: "seven",
        year: 2004,
        name: "Amlodipine Besylate",
        duration: 318623
    },
    {
        author: "Calvin",
        genre: "eight",
        year: 2010,
        name: "Alendronate Sodium",
        duration: 252430
    }
]

