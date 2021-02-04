$(function () {
    $('.carousel__switch').slick({
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 2.333,
        slidesToScroll: 2,
        arrows: false,
        focusOnSelect: true,
    });
})
window.onload = function () {
    var allStep = document.querySelectorAll('.step')
    console.log(allStep)
    var allImg = document.querySelectorAll('.steps__img__img')
    console.log(allImg)

    allStep.forEach((elm) => {
        elm.onclick = function (e) {
            var stepAcctive = document.querySelector('.step--active')
            stepAcctive.classList.remove('step--active')
            elm.classList.add('step--active')
            var clsAtrLeftImg = '.' + elm.getAttribute('x')// .l1 .l2 .l3
            var imgAcctive = document.querySelector('.step__img__img-active')
            imgAcctive.classList.remove('step__img__img-active')

            document.querySelector(clsAtrLeftImg).classList.add('step__img__img-active')

            console.log(clsAtrLeftImg)
            e.stopPropagation()


        }
    })

}