const searchInputEl = searchEl.querySelector('input')

searchInputEl.addEventListener('focus', function() {
    searchInputEl.setAttribute('placeholder', '통합검색')
}) 