import './_index.scss';
$(document).on("turbolinks:load", ()=>$('.lud-aside').on('click', '.lud-aside__collapse > a',
  function (e) {
    let $parent = $(e.currentTarget).parent();
    let openCls = 'lud-aside__collapse--open';
    if (!$parent.hasClass(openCls)) {
      // Accordion.
      $(`.${openCls}`).removeClass(openCls);
    }
    $parent.toggleClass(openCls);
  })
);

