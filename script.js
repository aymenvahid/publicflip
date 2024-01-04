// Category Viewer
{
    var categories = [
        {
            name: "Toys",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            srcset: "",
        },
        {
            name: "Mobiles",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            srcset: "",
        },
        {
            name: "Fashion",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
            srcset: "",
        },
        {
            name: "Electronics",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            srcset: "",
        },
        {
            name: "Appliances",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            srcset: "",
        },
        {
            name: "Travel",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            srcset: "",
        },
        {
            name: "Top Offers",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            srcset: "",
        },
        {
            name: "Beauty, Toys & More",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
            srcset: "",
        },
        {
            name: "Two Wheelers",
            url: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
            srcset: "",
        },
    ]

    var categoriesContent = "";

    categories.forEach(ele => {
        categoriesContent += `
            <div class="category-item">
                <div class="d-flex justify-content-center">
                    <img class="img-fluid"
                    src="${ele.url}" alt=""
                    width="64" />
                </div>
                <p class="text-center">${ele.name}</p>
            </div>
        `;  
    });
    document.getElementById("categories").innerHTML = categoriesContent;
}

// Products Viewer
//container 1
{
    var products = [
        {
            name: "Top Mirrorless Cameras",
            url: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "From ₹57,999"
        },
        {
            name: "Printers",
            url: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 768w",
            starting_price: "3999",
            brand: "From ₹3999"
        },
        {
            name: "Best of Shavers",
            url: "https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 768w",
            starting_price: "1649",
            brand: "From ₹1,649"
        }, {
            name: "Monitor",
            url: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 768w",
            starting_price: "8279",
            brand: "From ₹8999"
        },
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "From ₹9999"
        },
        {
            name: "Premium PowerBanks",
            url: "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 768w",
            starting_price: "699",
            brand: "Shop now"
        }, 
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70  ",             
            srcset: "https://rukminim1.flixcart.com/image/200/200/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 768w",
            starting_price: "6599",
            brand: "From ₹14999"
        },
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 768w",
            starting_price: "7949",
            brand: "From ₹7949"
        }
    ]

    var electronics = "";

    products.forEach(ele => {
        electronics += `
            <div class="swiper-slide product-card">
                <div class="product-image">
                    <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="" width="auto" height="200px" sizes="(max-width: 768px) 720px, 1024px">
                </div>
                <p class="product-brand mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
                
                <p class="product-title mt-2 mb-0">${ele.brand}</p>
            </div>
    `;
    });

    
    
    document.getElementById("electronic-products").innerHTML += electronics;
}

// Swiper script
{
    let swiper = new Swiper('.mySwiper', {
        // loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}


//container2

{
    var products2= [
        {
            name: "Reusable Magic Water Painting Book",
            url: "https://rukminim2.flixcart.com/image/612/612/xif0q/art-set/y/q/q/magic-water-book-quick-dry-book-water-coloring-book-with-magic-original-imaghb6khsranxu6.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/art-set/y/q/q/magic-water-book-quick-dry-book-water-coloring-book-with-magic-original-imaghb6khsranxu6.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/art-set/y/q/q/magic-water-book-quick-dry-book-water-coloring-book-with-magic-original-imaghb6khsranxu6.jpeg?q=70 768w",
            starting_price: "335",
            brand: "From ₹335"
        },
        {
            name: "Healthy Nutmix | Mixed DryFruits",
            url: "https://rukminim2.flixcart.com/image/612/612/kz5vwy80/nut-dry-fruit/z/d/t/200-healthy-nutmix-mixed-dryfruits-source-of-vitamin-and-original-imagb8hwjgnutzpk.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/kz5vwy80/nut-dry-fruit/z/d/t/200-healthy-nutmix-mixed-dryfruits-source-of-vitamin-and-original-imagb8hwjgnutzpk.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/kz5vwy80/nut-dry-fruit/z/d/t/200-healthy-nutmix-mixed-dryfruits-source-of-vitamin-and-original-imagb8hwjgnutzpk.jpeg?q=70 768w",
            starting_price: "267",
            brand: "Upto 75% off"
        },
        {
            name: "Monster truck toy friction kids",
            url: "https://rukminim2.flixcart.com/image/612/612/kqv8vww0/vehicle-pull-along/g/v/u/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imag4rz9fbbfdbwf.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/kqv8vww0/vehicle-pull-along/g/v/u/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imag4rz9fbbfdbwf.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/kqv8vww0/vehicle-pull-along/g/v/u/friction-powered-mini-monster-cars-for-kids-with-big-rubber-original-imag4rz9fbbfdbwf.jpeg?q=70 768w",
            starting_price: "",
            brand:"From ₹153"
        }, {
            name: "Flying remote control RC type",
            url: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/k/z/r/remote-control-helicopter-for-kids-blue-1-shree-original-imag3c74zw8b6ytj.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/k/z/r/remote-control-helicopter-for-kids-blue-1-shree-original-imag3c74zw8b6ytj.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/k/z/r/remote-control-helicopter-for-kids-blue-1-shree-original-imag3c74zw8b6ytj.jpeg?q=70 768w",
            starting_price: "279",
            brand: "Up to 80% off"
        },
        {
            name: "7 days 100% organic ",
            url: "https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/b/m/t/30-100-organic-dark-spot-removal-serum-7days-original-imagukfe3vz3zbg4.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/b/m/t/30-100-organic-dark-spot-removal-serum-7days-original-imagukfe3vz3zbg4.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/b/m/t/30-100-organic-dark-spot-removal-serum-7days-original-imagukfe3vz3zbg4.jpeg?q=70 768w",
            starting_price: "255",
            brand: "DAYS Darkspot",
            offer: "From ₹255"
        },
        {
            name: "Premium Derma roller",
            url: "https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/t/v/1/10-derma-roller-for-hair-growth-and-beard-growth-0-5mm-540-micro-original-imagssvuzabwf2z7.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/t/v/1/10-derma-roller-for-hair-growth-and-beard-growth-0-5mm-540-micro-original-imagssvuzabwf2z7.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/body-skin-treatment/t/v/1/10-derma-roller-for-hair-growth-and-beard-growth-0-5mm-540-micro-original-imagssvuzabwf2z7.jpeg?q=70 768w",
            starting_price: "186",
            brand: "Up to 70% off"
        }, 
        {
            name: "Spyder MTB Cycle",
            url: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/t/b/-original-imagrzvjjvvxvwa2.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/t/b/-original-imagrzvjjvvxvwa2.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/k/t/b/-original-imagrzvjjvvxvwa2.jpeg?q=70 768w",
            starting_price: "4,499",
            brand: "Up to 40% off"
        },
        {
            name: "BK Acoustic Guitar",
            url: "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/acoustic-guitar/x/l/i/jrz38c-bk-juarez-original-imagc8aszfks49ed.jpeg?q=70",
            srcset: "https://rukminim2.flixcart.com/image/612/612/l0fm07k0/acoustic-guitar/x/l/i/jrz38c-bk-juarez-original-imagc8aszfks49ed.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/l0fm07k0/acoustic-guitar/x/l/i/jrz38c-bk-juarez-original-imagc8aszfks49ed.jpeg?q=70 768w",
            starting_price: "2,000",
            brand: "Up to 70% off"
        }
    ]

    var summer = "";

    products2.forEach(ele => {
        summer += `
            <div class="swiper-slide product-card">
                <div class="product-image">
                    <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="" width="auto" height="200px" sizes="(max-width: 768px) 720px, 1024px">
                </div>
                <p class="product-brand mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
                
                <p class="product-title mt-2 mb-0">${ele.brand}</p>
            </div>
    `;
    });

    
    
    document.getElementById("summer-products").innerHTML += summer;
}

// Swiper script
{
    let swiper = new Swiper('.mySwiper', {
        
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}






//container 3


var products3 = [
    {
        name: "RPM Fitness RPM 717",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/4/m/e/rpm717-carbon-motorized-with-diet-plan-personal-trainer-doctor-original-imagg5zvhf8hpzvt.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/4/m/e/rpm717-carbon-motorized-with-diet-plan-personal-trainer-doctor-original-imagg5zvhf8hpzvt.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/4/m/e/rpm717-carbon-motorized-with-diet-plan-personal-trainer-doctor-original-imagg5zvhf8hpzvt.jpeg?q=70 768w",
        starting_price: "11,999",
        brand: "From ₹11,999"
    },
    {
        name: "LIfelong LLTM162Fit Pro",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/y/f/4/-original-imagsypgq9a9fq28.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/y/f/4/-original-imagsypgq9a9fq28.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/y/f/4/-original-imagsypgq9a9fq28.jpeg?q=70 768w",
        starting_price: "16,999",
        brand: "From ₹16,999"
    },
    {
        name: "RPM Fitness 162",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/b/n/-original-imagszb5txjsbwpe.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/b/n/-original-imagszb5txjsbwpe.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/b/n/-original-imagszb5txjsbwpe.jpeg?q=70 768w",
        starting_price: "10,999",
        brand: "Up to 40% off"
    }, {
        name: "Treadmill 110kg",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/w/v/a/walking-pad-2-hp-foldable-motorised-under-desk-treadmill-for-original-imaguy42b38xmgpx.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/w/v/a/walking-pad-2-hp-foldable-motorised-under-desk-treadmill-for-original-imaguy42b38xmgpx.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/treadmill/w/v/a/walking-pad-2-hp-foldable-motorised-under-desk-treadmill-for-original-imaguy42b38xmgpx.jpeg?q=70 768w",
        starting_price: "8,999",
        brand: "Up to 70% off"
    },
    {
        name: "Exercise Bike",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/4/q/5/elena-110-arrow-fitness-50-8-original-imagqr8d5jra5yg3.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/4/q/5/elena-110-arrow-fitness-50-8-original-imagqr8d5jra5yg3.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/4/q/5/elena-110-arrow-fitness-50-8-original-imagqr8d5jra5yg3.jpeg?q=70 768w",
        starting_price: "15,750",
        brand: "From ₹15,750"
    },
    {
        name: "Pro spin Fitness Bike",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/h/s/-original-imagsypfgpv2sxak.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/h/s/-original-imagsypfgpv2sxak.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/g/h/s/-original-imagsypfgpv2sxak.jpeg?q=70 768w",
        starting_price: "11,999",
        brand: "Up to 40% off"
    }, 
    {
        name: "Bike Max Pedlar Fitness",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/x/t/f/mini-bike-max-pedlar-fitness-equipment-with-lcd-display-for-home-original-imagj6fr5pkpzd6a.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/x/t/f/mini-bike-max-pedlar-fitness-equipment-with-lcd-display-for-home-original-imagj6fr5pkpzd6a.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/x/t/f/mini-bike-max-pedlar-fitness-equipment-with-lcd-display-for-home-original-imagj6fr5pkpzd6a.jpeg?q=70 768w",
        starting_price: "4,129",
        brand: "Under ₹5000"
    },
    {
        name: "Moving Handle Cycle",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/j/s/c/moving-handle-exercise-cycle-air-bike-for-home-gym-with-twister-original-imagnczhxjgd2ztz.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/j/s/c/moving-handle-exercise-cycle-air-bike-for-home-gym-with-twister-original-imagnczhxjgd2ztz.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/exercise-bike/j/s/c/moving-handle-exercise-cycle-air-bike-for-home-gym-with-twister-original-imagnczhxjgd2ztz.jpeg?q=70 768w",
        starting_price: "5,999",
        brand: "From ₹5,999"
    }
   
]



var sports = "";

products3.forEach(ele => {
    sports += `
        <div class="swiper-slide product-card">
            <div class="product-image">
                <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="">
            </div>
            <p class="product-brand mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
            
            <p class="product-title mt-2 mb-0">${ele.brand}</p>
        </div>
`;
});

document.getElementById("sport-products").innerHTML += sports;








// Swiper script
{
let swiper2 = new Swiper('.mySwiper2', {
    
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});
}



var products4 = [
    {
        name: "Allen Solly & Van Heusen",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/4/x/3-128319-blu-6-skechers-blu-original-imagtteddzqn7axw.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/4/x/3-128319-blu-6-skechers-blu-original-imagtteddzqn7axw.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/2/4/x/3-128319-blu-6-skechers-blu-original-imagtteddzqn7axw.jpeg?q=70 768w",
        starting_price: "",
        brand: "Min.40% Off"
    },
    {
        name: "LIfelong LLTM162Fit Pro",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/t/q/t/-original-imagr4kcyzusjrwj.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/t/q/t/-original-imagr4kcyzusjrwj.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/t/q/t/-original-imagr4kcyzusjrwj.jpeg?q=70 768w",
        starting_price: "16,999",
        brand: "Min.40% Off"
    },
    {
        name: "Amazing Lahangas",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/f/g/b/free-3-4-sleeve-jivikaaa-001-vajiba-original-imaggzc8mespdkr6.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/f/g/b/free-3-4-sleeve-jivikaaa-001-vajiba-original-imaggzc8mespdkr6.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/f/g/b/free-3-4-sleeve-jivikaaa-001-vajiba-original-imaggzc8mespdkr6.jpeg?q=70 768w",
        starting_price: "10,999",
        brand: "Under ₹599"
    }, {
        name: "Bags, Trolleys,Luggages..",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/l/u/g/-original-imagkuxzqkqrseat.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/l/u/g/-original-imagkuxzqkqrseat.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/l/u/g/-original-imagkuxzqkqrseat.jpeg?q=70 768w",
        starting_price: "8,999",
        brand: "50-70%+Extra 10% off"
    },
    {
        name: "Kurtas @ LOwest Prices!",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/i/2/3xl-new-pyarelal-original-imagtet9jvjsnjyj.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/i/2/3xl-new-pyarelal-original-imagtet9jvjsnjyj.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/n/i/2/3xl-new-pyarelal-original-imagtet9jvjsnjyj.jpeg?q=70 768w",
        starting_price: "15,750",
        brand: "Under ₹399"
    },
    {
        name: "Crazy Deals on Handbags",
        url: "https://rukminim2.flixcart.com/image/612/612/khp664w0/hand-messenger-bag/q/t/j/laffile-green-5-lfa1-hand-held-bag-alonzo-original-imafxnjcvb3wgb4j.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/khp664w0/hand-messenger-bag/q/t/j/laffile-green-5-lfa1-hand-held-bag-alonzo-original-imafxnjcvb3wgb4j.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/khp664w0/hand-messenger-bag/q/t/j/laffile-green-5-lfa1-hand-held-bag-alonzo-original-imafxnjcvb3wgb4j.jpeg?q=70 768w",
        starting_price: "11,999",
        brand: "Min 60% Off"
    }, 
    {
        name: "Apple iPads",
        url: "https://rukminim2.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/312/312/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70 768w",
        starting_price: "4,129",
        brand: "Shop now"
    },
    {
        name: "Kid's Clothing",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/d/3/4-5-years-mactshrt364-disney-by-miss-chief-original-imagmghf674gj5up.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/d/3/4-5-years-mactshrt364-disney-by-miss-chief-original-imagmghf674gj5up.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/h/d/3/4-5-years-mactshrt364-disney-by-miss-chief-original-imagmghf674gj5up.jpeg?q=70 768w",
        starting_price: "5,999",
        brand: "Min. 60% off"
    }
   
]



var fashion = "";

products4.forEach(ele => {
    fashion += `
        <div class="swiper-slide product-card">
            <div class="product-image">
                <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="">
            </div>
            <p class="product-brand mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
            
            <p class="product-title mt-2 mb-0">${ele.brand}</p>
        </div>
`;
});

document.getElementById("fashion-products").innerHTML += fashion;








// Swiper script
{
let swiper2 = new Swiper('.mySwiper2', {
    
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});
}




var products4 = [
    {
        name: "Top Mirrorless Cameras",
            url: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 768w",
            starting_price: "9999",
            brand: " ₹57,999"
    },
    {
        name: "Coirfit Born Zone",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed-mattress/a/v/a/normal-top-single-5-42-78-bone-zone-with-rebotech-tech-pu-foam-original-imagtgyvpyrgqfqh.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed-mattress/a/v/a/normal-top-single-5-42-78-bone-zone-with-rebotech-tech-pu-foam-original-imagtgyvpyrgqfqh.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/bed-mattress/a/v/a/normal-top-single-5-42-78-bone-zone-with-rebotech-tech-pu-foam-original-imagtgyvpyrgqfqh.jpeg?q=70 768w",
        starting_price: "16,999",
        brand: "₹3099"
    },
    {
        name: "Bluetooth wireless Earbuds",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/t/u/ha1921-m19-latest-bluetoothplayback-with-power-bank-earbuds-pack-original-imagnyb2trhdewmg.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/t/u/ha1921-m19-latest-bluetoothplayback-with-power-bank-earbuds-pack-original-imagnyb2trhdewmg.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/w/t/u/ha1921-m19-latest-bluetoothplayback-with-power-bank-earbuds-pack-original-imagnyb2trhdewmg.jpeg?q=70 768w",
        starting_price: "10,999",
        brand: " ₹649"
    }, {
        name: "Colorblock Men Track suit",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/w/c/w/xxl-colorblock-m7-by-metronaut-original-imagpxdgdhnashdh.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/w/c/w/xxl-colorblock-m7-by-metronaut-original-imagpxdgdhnashdh.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/w/c/w/xxl-colorblock-m7-by-metronaut-original-imagpxdgdhnashdh.jpeg?q=70 768w",
        starting_price: "8,999",
        brand: "329"
    },
    {
        name: "CG Homes Cotton Double  Bedsheet",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/t/x/d/printed-1-na-vo-db674-flat-cg-homes-original-imagz97hhup6tn6c.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/t/x/d/printed-1-na-vo-db674-flat-cg-homes-original-imagz97hhup6tn6c.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/t/x/d/printed-1-na-vo-db674-flat-cg-homes-original-imagz97hhup6tn6c.jpeg?q=70 768w",
        starting_price: "15,750",
        brand: " ₹329"
    },
    {
        name: "Hook Stand Display Holder",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/key-holder/i/h/r/12-deer-tree-01-kitchfluent-original-imagmzcahqpymuyu.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/key-holder/i/h/r/12-deer-tree-01-kitchfluent-original-imagmzcahqpymuyu.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/key-holder/i/h/r/12-deer-tree-01-kitchfluent-original-imagmzcahqpymuyu.jpeg?q=70 768w",
        starting_price: "11,999",
        brand: "₹249"
    }, 
    {
        name: "Analog watch - For men",
        url: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/d/n/-original-imagrk9s3hdczsmd.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/d/n/-original-imagrk9s3hdczsmd.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/d/n/-original-imagrk9s3hdczsmd.jpeg?q=70 768w",
        starting_price: "4,129",
        brand: "₹458"
    },
    {
        name: "MegaKleen Vehicle Washing Cloth",
        url: "https://rukminim2.flixcart.com/image/612/612/l4n2oi80/vehicle-washing-cloth/c/v/q/3-600gsm-3pc-megakleen-original-imagfhkphhcyqeyt.jpeg?q=70",
        srcset: "https://rukminim2.flixcart.com/image/612/612/l4n2oi80/vehicle-washing-cloth/c/v/q/3-600gsm-3pc-megakleen-original-imagfhkphhcyqeyt.jpeg?q=70 1024w, https://rukminim2.flixcart.com/image/612/612/l4n2oi80/vehicle-washing-cloth/c/v/q/3-600gsm-3pc-megakleen-original-imagfhkphhcyqeyt.jpeg?q=70 768w",
        starting_price: "5,999",
        brand: "₹195"
    }
   
]



var recent = "";

products4.forEach(ele => {
    recent += `
        <div class="swiper-slide product-card">
            <div class="product-image">
                <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="">
            </div>
            <p class="product-brand mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
            
            <p class="product-title mt-2 mb-0">${ele.brand}</p>
        </div>
`;
});

document.getElementById("recent-products").innerHTML += recent;








// Swiper script
{
let swiper2 = new Swiper('.mySwiper2', {
    
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});
}