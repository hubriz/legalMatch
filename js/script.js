
var modalBtn = document.querySelector('.modal-btn');

modalBtn.style.display = "none";

// Display modal

var clickMe = document.querySelector('#triggerOtherCategories');
var clickEnter = document.querySelector('#modal-toggle');


clickMe.addEventListener('click', function(e){
	e.preventDefault();
	clickEnter.checked = true;
});


// Display other categories
var fieldCategory = document.querySelector('#field-category');


function getTextContent(a) {
	fieldCategory.setAttribute('placeholder', a.textContent);
	fieldCategory.setAttribute('value', a.textContent);
	clickEnter.checked = false;
}



// Display Client Review Detail
var readMore = document.querySelector('#client-review-brigida');
var reviewContent = document.querySelector('#modal-toggle-review')

readMore.addEventListener('click', function(e){
	e.preventDefault();
	reviewContent.checked = true;
});

// Display Zip Codes
var zipList = [
  {
    "zip_code": 501,
    "latitude": 40.922326,
    "longitude": -72.637078,
    "city": "Holtsville",
    "state": "NY",
    "county": "Suffolk"
  },
  {
    "zip_code": 544,
    "latitude": 40.922326,
    "longitude": -72.637078,
    "city": "Holtsville",
    "state": "NY",
    "county": "Suffolk"
  },
  {
    "zip_code": 601,
    "latitude": 18.165273,
    "longitude": -66.722583,
    "city": "Adjuntas",
    "state": "PR",
    "county": "Adjuntas"
  },
  {
    "zip_code": 602,
    "latitude": 18.393103,
    "longitude": -67.180953,
    "city": "Aguada",
    "state": "PR",
    "county": "Aguada"
  },
  {
    "zip_code": 603,
    "latitude": 18.455913,
    "longitude": -67.14578,
    "city": "Aguadilla",
    "state": "PR",
    "county": "Aguadilla"
  },
  {
    "zip_code": 604,
    "latitude": 18.49352,
    "longitude": -67.135883,
    "city": "Aguadilla",
    "state": "PR",
    "county": "Aguadilla"
  },
  {
    "zip_code": 605,
    "latitude": 18.465162,
    "longitude": -67.141486,
    "city": "Aguadilla",
    "state": "PR",
    "county": "Aguadilla"
  },
  {
    "zip_code": 606,
    "latitude": 18.172947,
    "longitude": -66.944111,
    "city": "Maricao",
    "state": "PR",
    "county": "Maricao"
  },
  {
    "zip_code": 610,
    "latitude": 18.288685,
    "longitude": -67.139696,
    "city": "Anasco",
    "state": "PR",
    "county": "Anasco"
  },
  {
    "zip_code": 611,
    "latitude": 18.279531,
    "longitude": -66.80217,
    "city": "Angeles",
    "state": "PR",
    "county": "Utuado"
  },
  {
    "zip_code": 612,
    "latitude": 18.450674,
    "longitude": -66.698262,
    "city": "Arecibo",
    "state": "PR",
    "county": "Arecibo"
  },
  {
    "zip_code": 613,
    "latitude": 18.458093,
    "longitude": -66.732732,
    "city": "Arecibo",
    "state": "PR",
    "county": "Arecibo"
  },
  {
    "zip_code": 614,
    "latitude": 18.429675,
    "longitude": -66.674506,
    "city": "Arecibo",
    "state": "PR",
    "county": "Arecibo"
  }
]



$(function(){
    $("#field-city").easyAutocomplete({
        data: zipList,
        getValue: function(element) {
            return element.city + ', ' + element.state + ' ' + element.zip_code;
        },
        // getValue: "zip_code"
    });
})


// Custom Dropdown

$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        // console.log(this);


        // Display #3
        var step3 = document.querySelector('#modal-toggle-step-3');
        step3.checked = true;
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


// $(function(){
// 	$('#triggerOtherCategories').on('click', function(e){
// 		e.preventDefault();
// 		$('.modal-btn').trigger('click');
// 	})
// })