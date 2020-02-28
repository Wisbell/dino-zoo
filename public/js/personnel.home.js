function setActiveTab(tabName) {
  switch(tabName) {
    case 'all':
      document.querySelector('#all').classList.add('is-active')
      document.querySelector('#keepers').classList.remove('is-active')
      document.querySelector('#trainers').classList.remove('is-active')
      break;
    case 'keepers':
      document.querySelector('#all').classList.remove('is-active')
      document.querySelector('#keepers').classList.add('is-active')
      document.querySelector('#trainers').classList.remove('is-active')
      break;
    case 'trainers':
      document.querySelector('#all').classList.remove('is-active')
      document.querySelector('#keepers').classList.remove('is-active')
      document.querySelector('#trainers').classList.add('is-active')
      break;
    default:
      break;
  }
}

// TODO: Add functionality to hide/show choice