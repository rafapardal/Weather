(function() {
    const elem = document.getElementsByClassName('weather-days__name');

    const elemClick = function() {
        const order = this.getAttribute('data-order');
        const margin = order * 390;

        // New margin
        document.getElementById('weather-days__wrapper').style.margin = '0 -' + margin + 'px';

        // Remove all active classes
        for (var i = 0; i < elem.length; i++) {
            elem[i].classList.remove('weather-days__name--active');
        }

        // add active class
        this.classList.add('weather-days__name--active');

        // background color change
        if(order === '0') {
            document.getElementById('weather-info').classList.remove('weather-info--night');
            document.getElementById('weather-info').classList.add('weather-info--day');
        } else if(order === '1') {
            document.getElementById('weather-info').classList.remove('weather-info--day');
            document.getElementById('weather-info').classList.add('weather-info--night');
        }
 
    };

    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', elemClick, false);
    }

}());