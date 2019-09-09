/***********************************
 * DOM-Elements
 **********************************/
let form = $('form');
let inputFrom = $('input[name="from"]');
let inputTo = $('input[name="to"]');
let from = $("#from");
let to = $("#to");
let error = $(".error");

/***********************************
 * Methodes
 **********************************/
function getResult(){
    inputTo.val(calculateResult(inputFrom.val(), from.val(), to.val()));
}

function calculateResult(value, from, to){

    value = parseFloat(value);
    //celsius to Kelvin
    if(from === 'c' && to === 'k'){

        return (value + 273.15).toFixed(2);

    }
    //celsius to Fahrenheit
    if(from === 'c' && to === 'f'){

        return ((value * (9/5)) + 32).toFixed(2);

    }
    //kelvin to celsius
    if(from === 'k' && to === 'c'){

        return (value - 273.15).toFixed(2);

    }
    //kelvin to Fahrenheit
    if(from === 'k' && to === 'f'){

        return ((value - 273.15) + (9/5) + 32).toFixed(2);

    }
    //fahrenheit to celsius
    if(from === 'f' && to === 'c'){

        return ((value - 32) * (5/9)).toFixed(2);

    }
    //fahrenheit to kelvin
    if(from === 'f' && to === 'k'){

        return ((value - 32) * (5/9) + 273.15).toFixed(2);

    }

}

function changeDisabledField(){
    $("#to > option").each(function() {

        this.value === from.val() ?  this.disabled = true :  this.disabled = false;

    });
}


/***********************************
 * Eventlistener
 **********************************/
form.submit(function (e) {
    e.preventDefault();
    getResult();
});

inputFrom.keyup(function () {
    input = inputFrom.val();

    if ($.isNumeric(input) || !input) {
        return error.text('');
    }

    error.text('Bitte nur Zahlen eingeben');

});

from.change(function () {
    changeDisabledField();
});
