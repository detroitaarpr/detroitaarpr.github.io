
function toggleNav() {
    let nav = document.getElementsByTagName('nav')[0]
    let body = document.getElementsByTagName('body')[0]

    if(nav.className === 'show') {
	nav.className = 'hide';
	body.className = '';
    } else if(nav.className === 'hide') {
	nav.className = 'show';
	body.className = 'no-scroll';
    }
}
