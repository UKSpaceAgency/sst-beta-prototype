//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
    window.MOJFrontend.initAll();
    new MOJFrontend.FilterToggleButton({
      bigModeMediaQuery: '(min-width: 48.063em)',
      startHidden: true,
      toggleButton: {
        container: $('.moj-action-bar__filter'),
        showText: 'Filter by data source',
        hideText: 'Hide filter',
        classes: 'govuk-button--secondary'
      },
      closeButton: {
        container: $('.moj-filter__header-action'),
        text: 'Close'
      },
      filter: {
        container: $('.moj-filter')
      }
      });
})

// Script to enable 'select all' option for account/gov-user/account-settings-v2 //
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-module="select-all-checkboxes"]').forEach(container => {
    const selectAll = container.querySelector('#select-all')
    const boxes = Array.from(container.querySelectorAll('input[type="checkbox"]'))
      .filter(cb => cb !== selectAll)

    if (!selectAll || boxes.length === 0) return

    // Toggle all boxes when "Select all" changes
    selectAll.addEventListener('change', () => {
      boxes.forEach(cb => cb.checked = selectAll.checked)
    })

    // Keep "Select all" in sync when individuals change
    boxes.forEach(cb => {
      cb.addEventListener('change', () => {
        selectAll.checked = boxes.every(cb => cb.checked)
      })
    })
  })
})

