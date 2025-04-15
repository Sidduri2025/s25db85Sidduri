var express = require('express');
var router = express.Router();

/* GET expeditions listing. */
router.get('/', function(req, res, next) {
  let expeditions = [
    { name: "Everest Base Camp", destination: "Nepal", duration: 14 },
    { name: "Amazon Rainforest", destination: "Brazil", duration: 10 },
    { name: "Antarctic Voyage", destination: "Antarctica", duration: 21 }
  ];
  res.render('expeditions', { title: "Search Results - Expeditions", expeditions });
});
var express = require('express');
const expeditions_controlers= require('../controllers/expeditions');
var router = express.Router();
/* GET costumes */
router.get('/', expeditions_controlers.expeditions_view_all_Page );

/* GET detail costume page */
router.get('/detail', expeditions_controlers.expeditions_view_one_Page);

/* GET create costume page */
router.get('/create', expeditions_controlers.expeditions_create_Page);

/* GET create update page */
router.get('/update', expeditions_controlers.expeditions_update_Page);

/* GET delete costume page */
router.get('/delete', expeditions_controlers.expeditions_delete_Page);



module.exports = router;



