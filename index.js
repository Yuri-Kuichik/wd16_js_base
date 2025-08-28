console.log('hello from index.js')

const arrSections = document.querySelectorAll('section')

function switchTab(e) {
    const id = e.target?.id

    if (!id) return;

    hideVisiblePage()
    showPage(id)
}

function showPage(id) {
    const el = document.querySelector('.' + id)
    el?.classList.replace('hidden', 'visible')
}


function hideVisiblePage() {
    findVisiblePage()?.classList.replace('visible', 'hidden')
}


function findVisiblePage() {
    return [...arrSections].find( (section) => {
        return section.classList.contains('visible')
    } )
}

