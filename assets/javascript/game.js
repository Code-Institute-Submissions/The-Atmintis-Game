$(function () {
  $('[data-toggle="popover"]').popover({
      placement : 'top',
      trigger : 'hover'
  })
})

// see webdevsimplified as their documentation helped

if (document.readyState == 'loading') { 
    document.addEventListener('DOMContentLoaded', ready); // if loading wait until it loads and call ready
} else {
    ready();
}

// message screen for start game, game over and card functions, need to add the divs.
