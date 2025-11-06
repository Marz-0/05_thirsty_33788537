// Create a new router
const express = require("express");
const router = express.Router();

//define our data

var shopData = {shopName: "Drinks4U",
                productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shopLocations:[
                    {manager: "Marzhan", address: "1 Main St, London, UK"},
                    {manager: "Jem", address: "2 Baker St, London, UK"},
                    {manager: "Bob", address: "3 Soho St, London, UK"},
                ]

            };



// Handle the main routes

router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

// Survey routes
router.get('/survey', (req, res) => {
    // render the survey form, productCategories provided in shopData
    res.render('survey.ejs', shopData);
});

router.post('/survey_result', (req, res) => {
    // collect responses from the form 
    const response = {
        first: req.body.first_name || '',
        last: req.body.surname || '',
        email: req.body.email || '',
        age: req.body.age || '',
        category: req.body.drink_category || 'Not specified',
        student: req.body.is_student ? 'Yes' : 'No'
    };

    // pass both shopData and the response 
    res.render('survey_result.ejs', Object.assign({}, shopData, { response: response }));
});

router.get('/search_result', function (req, res) {
    // Render search results page using the search template
    const locals = Object.assign({}, shopData, {
        searchText: req.query.search_text || '',
        category: req.query.category || ''
    });
    res.render('search_result.ejs', locals);
 });

 router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    // Render a registration result page 
    const registered = {
        first: req.body.first || '',
        last: req.body.last || '',
        email: req.body.email || ''
    };
    res.render('registered.ejs', Object.assign({}, shopData, { registered }));

}); 
// TODO

// Export the router object so index.js can access it
module.exports = router;